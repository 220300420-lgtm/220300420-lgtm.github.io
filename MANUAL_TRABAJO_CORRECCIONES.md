# Manual de Trabajo y Auditoria de Correcciones

## 1. Resumen ejecutivo

El proyecto `Registro-Facturas` es un MVP operativo de facturacion, ingesta documental, triple match, reglas financieras, orquestacion de pagos y cierre semanal construido sobre Python, SQLite y archivos fiscales/operativos.

La arquitectura conceptual es buena y esta separada por fases, pero el nucleo todavia no es confiable para cierre financiero real. Los riesgos principales confirmados son:

* El sistema no importa correctamente por `Optional` faltante en `03_SCRIPTS/core/matching/matcher.py`.
* Hay scripts destructivos que ejecutan `DELETE` o `UPDATE` al cargarse.
* No existe un `schema.sql` versionado ni dependencias reproducibles en el repositorio actual.
* Hay rutas privadas absolutas hacia archivos externos.
* La ruta de base de datos no esta centralizada.
* El cierre semanal trata una corrida `LIBERADA` como si fuera pago real.
* No existe un ledger real de pagos parciales, pagados y conciliados.
* La purga de staging elimina evidencia sin snapshot completo previo.
* El historico se declara inmutable, pero usa `INSERT OR REPLACE`.

El primer problema a atacar debe ser el import roto de `Optional`, porque bloquea `core.matching`, `ingest_pipeline` y `workflow_engine`.

## 2. Comprension real del proyecto

El sistema busca controlar facturas y pagos para varias empresas mediante un flujo operativo por fases:

* Ingesta de XML/PDF de facturas, ordenes de compra y contrarrecibos.
* Normalizacion de proveedores, fechas, moneda e importes.
* Validacion documental y fiscal basica.
* Triple match entre factura, OC y contrarrecibo.
* Evaluacion de reglas de negocio en `cerebro_operativo`.
* Orquestacion semanal de pagos.
* Cierre operativo, historico, bitacora y memoria semanal.

Entradas principales:

* XML CFDI.
* PDF de facturas, OC y contrarrecibos.
* Archivos Excel fuente.
* Bases SQLite locales.

Salidas principales:

* `staging_facturas`.
* `staging_ocs`.
* `staging_contrarrecibos`.
* `cruce_triple_match`.
* `cerebro_operativo`.
* `orquestador_pagos`.
* `payment_runs`.
* `payment_run_details`.
* `historico_pagos`.
* `historico_bitacora`.
* DLQ y reportes de cierre.

Usuarios o areas implicadas:

* Cuentas por pagar.
* Tesoreria.
* Contabilidad.
* Auditoria operativa.
* Administracion de proyectos.

## 3. Arquitectura encontrada

Estructura general:

| Carpeta o modulo | Responsabilidad |
|---|---|
| `01_MAPA_GENERAL/` | Documentacion conceptual |
| `02_TABLAS_FUENTE/` | Archivos fuente por empresa |
| `03_SCRIPTS/` | Nucleo Python operativo |
| `04_DICCIONARIO_DE_DATOS/` | Diccionario operativo |
| `05_RELACIONES_Y_DEPENDENCIAS/` | Documentacion de relaciones |
| `06_FLUJOS_OPERATIVOS/` | Cronograma operativo |
| `07_OUTPUTS_EJEMPLO/` | Snapshots y salidas ejemplo |
| `08_DASHBOARDS_Y_VISUALES/` | Reportes y dashboards |
| `09_REGLAS_DE_NEGOCIO/` | Reglas metodologicas |
| `10_LIMITACIONES_Y_PROBLEMAS_CONOCIDOS/` | Limitaciones documentadas |
| `03_SCRIPTS/core/pipeline/` | Ingesta y DLQ |
| `03_SCRIPTS/core/extractors/` | Extractores XML/PDF/AI |
| `03_SCRIPTS/core/loaders/` | Persistencia SQLite |
| `03_SCRIPTS/core/normalizers/` | Normalizacion |
| `03_SCRIPTS/core/validators/` | Validaciones |
| `03_SCRIPTS/core/matching/` | Triple match |
| `03_SCRIPTS/core/cerebro/` | Reglas de negocio |
| `03_SCRIPTS/core/orquestacion/` | Corridas y pagos |
| `03_SCRIPTS/core/cierre/` | Cierre, historico y purga |
| `03_SCRIPTS/core/ai/` | Gemini Shadow Mode |

Partes bien disenadas:

* Separacion modular por dominio.
* DTO canonico con `Decimal`.
* DLQ para documentos fallidos.
* Logger estructurado.
* Motor de matching explicable.
* Reglas de negocio separadas.
* Cierre transaccional parcial.

Partes acopladas o fragiles:

* Rutas de base de datos duplicadas.
* CLIs que escriben directo sobre `luximia_pilot_v2.db`.
* Cierre semanal duplicado entre CLI y `workflow_engine.py`.
* Esquema ausente como SQL versionado.
* `.db` versionadas usadas como fuente practica de verdad.
* Pruebas dentro de `03_SCRIPTS/`, mezcladas con scripts operativos.

No debe tocarse todavia:

* Scoring del matching.
* Reglas de negocio finas.
* Estructura general de carpetas.
* Migracion a PostgreSQL.
* API, dashboard o RBAC completo.

## 4. Analisis de `03_SCRIPTS/`

| Archivo o modulo | Que hace | Importancia | Problemas detectados | Riesgos | Recomendacion |
|---|---|---|---|---|---|
| `core/matching/matcher.py` | Decide match automatico, sugerido o ambiguo | Critica | Usa `Optional` sin importarlo | Bloquea imports | Agregar `Optional` y prueba de import |
| `workflow_engine.py` | Orquestador maestro | Critica | BD default divergente, `INSERT OR REPLACE`, cierre/purga | Estados y rutas inconsistentes | Convertir gradualmente en fachada delgada |
| `run_real_batch.py` | Ejecucion de lote real | Alta | Ruta privada a `schema.sql` | No reproducible | Usar `db/schema.sql` versionado |
| `run_weekly_closing.py` | CLI de cierre | Alta | Ejecuta cierre real y purga | Perdida de evidencia | Exigir preview, confirmacion y dry-run |
| `run_payments_orchestrator.py` | CLI de corridas de pago | Alta | Opera sobre DB real por default | Cambios accidentales | Parametrizar DB y agregar modo dry-run |
| `reprocess_documents.py` | Reprocesa DLQ | Media | Usa rutas fisicas guardadas | Sensibilidad y dependencia local | Sanitizar rutas y confirmar reproceso |
| `clean_all.py` | Limpia tablas | Critica | Ejecuta al importarse | Borrado accidental | `main`, confirmacion, bloqueo env |
| `clean_staging.py` | Limpia staging | Critica | Ejecuta al importarse | Borrado accidental | `main`, dry-run |
| `clear_matriz.py` | Borra matriz | Alta | Ejecuta al importarse | Pierde catalogos | `main`, confirmacion |
| `modify_importe.py` | Modifica importe | Alta | `UPDATE` top-level | Manipulacion silenciosa | Convertir a script controlado |
| `modify_proveedor.py` | Modifica proveedor | Alta | `UPDATE` top-level | Manipulacion silenciosa | Convertir a script controlado |
| `core/config/config.py` | Config global | Alta | DB path no usado por CLIs | Bases distintas | Centralizar ruta |
| `core/orquestacion/orchestration_engine.py` | Corridas de pago | Critica | `LIBERADA` como pago, `REAL/float`, no valida `rowcount` | Cierre prematuro | Ledger y estados separados |
| `core/cierre/close_validator.py` | Valida cierre | Critica | Exige `LIBERADA`, no pago bancario real | Cierre falso | Validar pago conciliado |
| `core/cierre/historian.py` | Historico | Critica | `INSERT OR REPLACE`, guarda `total_neto` como pagado | Sobrescritura | Historico append-only |
| `core/cierre/archivist.py` | Purga staging | Critica | `DELETE` fisico sin snapshot completo | Perdida de datos | Snapshot obligatorio |
| `core/normalizers/document_normalizers.py` | Normaliza fechas | Media | Fecha invalida se vuelve hoy | Elegibilidad falsa | Rechazar o mandar a revision |
| `core/validators/document_validators.py` | Valida DTO | Media | Regla de nota de credito imposible | Falso control | Corregir validacion |
| `core/extractors/xml/xml_cfdi_extractor.py` | Extrae CFDI | Media | No extrae/valida RFC receptor | Facturas de otra empresa | Agregar receptor |
| `core/ai/gemini_shadow_runner.py` | Shadow AI | Media | Puede enviar PDFs fiscales a servicio externo | Riesgo de seguridad | Politica explicita opt-in |

## 5. Revalidacion del analisis previo

| Hallazgo previo | Evidencia actual | Clasificacion | Severidad | Sigue siendo real | Impacto | Recomendacion |
|---|---|---|---|---|---|---|
| `Optional` faltante | `matcher.py` usa `Optional` en anotacion sin import | Confirmado | Urgente | Si | Bloquea imports | Corregir primero |
| Falta `schema.sql` | No existe `.sql` en el repo actual | Confirmado | Alta | Si | No reproducible | Crear `db/schema.sql` |
| Falta dependencias | No existen `requirements.txt`, `pyproject.toml`, `.env.example` | Confirmado | Alta | Si | Instalacion no reproducible | Crear dependencias |
| Rutas privadas | `run_real_batch.py` y tests apuntan a usuario externo | Confirmado | Alta | Si | No funciona en otra maquina | Eliminar rutas privadas |
| Scripts destructivos importables | `clean_all.py`, `clean_staging.py`, `clear_matriz.py`, `modify_*` | Confirmado | Urgente | Si | Perdida de datos | Proteger scripts |
| `INSERT OR REPLACE` peligroso | `workflow_engine.py`, `historian.py`, `orchestration_engine.py`, `rules_engine.py` | Confirmado | Alta | Si | Sobrescribe evidencia | Reemplazar gradualmente |
| `LIBERADA` como pago | `orchestration_engine.py` suma corridas liberadas como monto pagado | Confirmado | Alta | Si | Cierre prematuro | Ledger real |
| Falta ledger real | Solo existe `payment_run_details` con monto programado | Confirmado | Alta | Si | Pagos parciales debiles | Crear ledger |
| Falta snapshot completo | Historico resume datos; purga borra staging | Confirmado | Alta | Si | No reconstruible | Snapshot antes de purga |
| Fechas invalidas a hoy | `document_normalizers.py` retorna fecha actual | Confirmado | Media | Si | Elegibilidad falsa | Rechazar fecha |
| Uso de `float` en dinero | Persistencia convierte `Decimal` a `float` | Parcialmente confirmado | Media | Si | Redondeos | Usar centavos o texto decimal |
| Falta total de pruebas | Hay tests en `03_SCRIPTS`, pero no son reproducibles todos | Parcialmente confirmado | Media | Matizar | Baja confianza | Reordenar tests |
| Falta RFC receptor | XML solo extrae emisor | Confirmado | Media | Si | Facturas incorrectas | Agregar receptor |
| Riesgo AI externa | `GEMINI_API_KEY` activa envio de PDFs | Confirmado | Media | Si | Exposicion fiscal | Politica de datos |
| `AUDITORIA_REGISTRO_FACTURAS.md` | No localizado en repo actual | No comprobable | Baja | No | No contrastable | Revisar si existe fuera del repo |

## 6. Tabla principal de errores reales

| ID | Error detectado | Evidencia | Causa probable | Impacto real | Severidad | Prioridad | Solucion recomendada | Validacion |
|---|---|---|---|---|---|---|---|---|
| E01 | `Optional` no importado | `matcher.py` linea 27 | Olvido de import | Sistema no importa | Urgente | 1 | Agregar `Optional` | Import controlado |
| E02 | Scripts destructivos top-level | `clean_all.py`, `clean_staging.py`, `clear_matriz.py`, `modify_*` | Scripts de prueba quedaron operativos | Borrado/modificacion accidental | Urgente | 2 | `main`, confirmacion, dry-run | Import no toca DB |
| E03 | Schema SQL ausente | No hay `.sql` | DB se construyo fuera del repo | No reproducible | Alta | 3 | Crear `db/schema.sql` | Validar en memoria |
| E04 | Dependencias ausentes | No hay requirements/env | Proyecto local no empaquetado | Instalacion fragil | Alta | 4 | Crear `requirements.txt` y `.env.example` | Imports limpios |
| E05 | Rutas privadas | Ruta `C:\Users\Jarod...` | Desarrollo local | No portable | Alta | 5 | Rutas relativas al repo | `rg Jarod` limpio |
| E06 | DB path inconsistente | Config apunta a `data/registro.db`; CLIs a `luximia_pilot_v2.db` | Config no usada | Datos dispersos | Alta | 6 | Centralizar DB | Test config |
| E07 | `LIBERADA` como pagado | Suma corridas liberadas | Modelo incompleto | Cierre prematuro | Alta | 7 | Estados separados | Test no cierra sin pago |
| E08 | Sin ledger real | `payment_run_details` solo programa | MVP parcial | Pagos parciales falsos | Alta | 8 | Crear ledger | Test parcial |
| E09 | Purga sin snapshot | `archivist.py` borra staging | Cierre fisico temprano | Perdida de evidencia | Alta | 9 | Snapshot obligatorio | Test snapshot antes purga |
| E10 | Historico reemplazable | `INSERT OR REPLACE` | Idempotencia mal aplicada | Sobrescritura | Alta | 10 | Append-only/versionado | Test doble cierre |
| E11 | Fecha invalida a hoy | `normalize_date` | Fallback conveniente | Cierre/elegibilidad falsa | Media | 11 | Error o revision | Test fecha invalida |
| E12 | Dinero como `REAL/float` | `db_loader.py`, schema DB | Facilidad SQLite | Redondeos | Media | 12 | Centavos enteros o texto decimal | Test precision |
| E13 | Sin RFC receptor | Extractor XML no lo captura | Alcance inicial | Facturas de otra empresa | Media | 13 | Extraer y validar receptor | Test receptor |
| E14 | AI externa sin politica | Gemini lee PDF bytes | Shadow opt-in tecnico | Exposicion fiscal | Media | 14 | Politica y controles | Test opt-in |

## 7. Contradicciones detectadas

| Contradiccion | Donde aparece | Por que es contradiccion | Riesgo | Como resolverla |
|---|---|---|---|---|
| Historico inmutable vs `INSERT OR REPLACE` | `historian.py` | Reemplazar no es inmutable | Perdida de evidencia | Append-only con `closing_id` |
| `LIBERADA` vs pago real | `orchestration_engine.py`, `close_validator.py` | Liberar no equivale a pagar/conciliar | Cierre falso | Estados separados |
| Config central vs CLIs | `config.py` y scripts | Hay varias rutas de DB | Operar base equivocada | Config/env unica |
| Documento dice que existe schema | `VERSIONADO_SCHEMA_DEPENDENCIAS.md` | El repo actual no contiene `db/schema.sql` | Documentacion enganosa | Reconciliar documento y repo |
| Pruebas existen pero no reproducen | Tests con ruta privada a `schema.sql` | Se ven pruebas, pero algunas dependen de maquina externa | Baja confianza | Crear schema local y tests limpios |
| Cierre manual documentado vs purga automatica | Docs y `archivist.py` | El codigo borra fisicamente | Perdida de control | Preview + confirmacion + snapshot |

## 8. Problemas por categoria

### 8.1 Errores urgentes

* `Optional` faltante en `matcher.py`.
* Scripts destructivos ejecutables al importarse.
* Rutas privadas a `schema.sql`.
* Cierre basado en `LIBERADA`.

### 8.2 Riesgos de datos

* Purga fisica de staging.
* Historico con `INSERT OR REPLACE`.
* DLQ guarda rutas fisicas completas.
* `.db` versionadas sin schema reproducible.

### 8.3 Riesgos financieros

* Pagos parciales sin ledger.
* Monto pagado derivado de `total_neto`.
* Uso de `REAL/float`.
* Fechas invalidas convertidas a fecha actual.

### 8.4 Riesgos de cierre semanal

* Cierre permite corrida `LIBERADA`.
* Reporte JSON se escribe despues del commit.
* Purga borra evidencia viva.
* No hay snapshot completo.

### 8.5 Riesgos de base de datos

* Falta `schema.sql`.
* Falta migraciones.
* Vistas criticas existen solo dentro de `.db`.
* Inconsistencia de rutas de DB.

### 8.6 Riesgos de seguridad

* PDFs fiscales pueden enviarse a Gemini si existe `GEMINI_API_KEY`.
* Rutas sensibles en DLQ.
* No hay `.env.example` ni politica de secretos.

### 8.7 Problemas de mantenibilidad

* CLIs operativos mezclados con pruebas.
* Scripts debug y destructivos junto al flujo productivo.
* Mensajes con mojibake.
* `workflow_engine.py` duplica logica de CLIs.

### 8.8 Problemas de pruebas

* Tests dentro de `03_SCRIPTS/`.
* Algunas pruebas dependen de ruta privada.
* No hay prueba minima de imports seguros.
* No hay prueba de scripts destructivos.

### 8.9 Problemas de documentacion

* Documentacion dice que existe schema y dependencias, pero no aparecen en el repo actual.
* No hay guia reproducible de instalacion.
* No hay contrato formal de estados financieros.

### 8.10 Mejoras futuras no urgentes

* RBAC completo.
* API.
* Dashboard.
* PostgreSQL.
* Automatizacion avanzada.
* Integraciones de IA gobernadas.
* Interfaz multiusuario.

## 9. Analisis de no romper lo que ya funciona

Partes que parecen bien disenadas:

* Separacion modular por dominios.
* DTO canonico.
* DLQ.
* Matching explicable.
* Reglas de negocio centralizadas.
* Validaciones transaccionales parciales.

Partes que tienen razon de negocio:

* Uso de SQLite para MVP local.
* Uso de staging para documentos vivos.
* Uso de `cerebro_operativo` como mesa de decision.
* Uso de `payment_runs` para corridas semanales.
* Uso de DLQ para documentos problematicos.

Cambios peligrosos ahora:

* Reescribir toda la arquitectura.
* Migrar a PostgreSQL antes de tener schema SQLite versionado.
* Cambiar scoring sin pruebas.
* Cambiar reglas financieras sin casos de prueba.
* Crear API/UI antes de estabilizar cierres.

Cambios seguros:

* Corregir import faltante.
* Agregar pruebas de import.
* Blindar scripts destructivos.
* Centralizar ruta de DB.
* Crear schema reproducible.
* Crear `.env.example`.

## 10. Manual de trabajo para correcciones

| Fase | Paso | Accion | Objetivo | Archivos afectados | Riesgo | Requisitos previos | Comando sugerido | Validacion | Prioridad |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | Reparar `Optional` | Desbloquear imports | `matcher.py` | Bajo | Ninguno | `python -c "import core.matching.matcher"` | Import OK | Urgente |
| 1 | 2 | Crear prueba minima de imports | Evitar regresion | `tests/test_imports.py` | Bajo | Fix E01 | `pytest tests/test_imports.py` | Pasa | Urgente |
| 1 | 3 | Blindar scripts destructivos | Evitar borrado accidental | `clean_all.py`, `clean_staging.py`, `clear_matriz.py`, `modify_*` | Medio | Test import | `pytest tests/test_safe_scripts_do_not_execute_on_import.py` | Import no toca DB | Urgente |
| 1 | 4 | Unificar ruta DB | Evitar bases distintas | `config.py`, CLIs, `workflow_engine.py` | Medio | Definir ruta oficial | `rg "luximia_pilot|registro.db"` | Una fuente | Alta |
| 1 | 5 | Detectar rutas privadas | Limpiar portabilidad | Scripts y tests | Bajo | Ninguno | `rg "Jarod|\.gemini|C:\\Users"` | Sin rutas privadas | Alta |
| 1 | 6 | Confirmar dependencias minimas | Preparar reproducibilidad | repo root | Bajo | Imports detectados | `rg "^import|^from" 03_SCRIPTS` | Lista base | Alta |
| 2 | 1 | Crear `db/schema.sql` | DB reproducible | `db/schema.sql` | Medio | Inspeccion DB real | Validador en memoria | Schema crea tablas | Alta |
| 2 | 2 | Crear `requirements.txt` | Instalacion reproducible | `requirements.txt` | Bajo | Imports reales | `pip install -r requirements.txt` | Imports OK | Alta |
| 2 | 3 | Crear `.env.example` | Secretos seguros | `.env.example` | Bajo | Variables detectadas | `rg "os.environ|getenv"` | Variables documentadas | Alta |
| 2 | 4 | Crear DB limpia de prueba | Validar schema | tmp/test DB | Bajo | Schema | Validador SQLite | DB limpia OK | Alta |
| 2 | 5 | Documentar instalacion | Transferible | README/docs | Bajo | Dependencias | N/A | Guia usable | Media |
| 3 | 1 | Test imports | Sanidad base | `tests/test_imports.py` | Bajo | Fase 1 | `pytest` | Pasa | Urgente |
| 3 | 2 | Test config paths | Una DB | `tests/test_config_paths.py` | Bajo | Config unica | `pytest` | Pasa | Alta |
| 3 | 3 | Test scripts seguros | No efectos al import | `tests/test_safe_scripts_do_not_execute_on_import.py` | Medio | Scripts blindados | `pytest` | Pasa | Alta |
| 3 | 4 | Test schema | Reproducibilidad | `tests/test_schema_can_initialize_empty_db.py` | Bajo | Schema | `pytest` | Pasa | Alta |
| 4 | 1 | Separar estados financieros | No confundir autorizado/pagado | Schema/orquestacion/cierre | Alto | Tests base | Tests de cierre | Estados correctos | Alta |
| 4 | 2 | No tratar `LIBERADA` como `PAGADO` | Cierre real | `orchestration_engine.py`, `close_validator.py` | Alto | Ledger | Test no cierra sin pago | Pasa | Alta |
| 4 | 3 | Crear ledger pagos parciales | Saldo real | Schema/orquestacion | Alto | Schema | Test pagos parciales | Saldos correctos | Alta |
| 4 | 4 | Validar saldos reales | Evitar cierre prematuro | cierre | Medio | Ledger | Test saldo | Pasa | Alta |
| 5 | 1 | Snapshot antes de purga | Auditoria | cierre/schema | Medio | Schema | Test snapshot | Snapshot existe | Alta |
| 5 | 2 | Evitar purga fisica sin evidencia | Proteger datos | `archivist.py` | Medio | Snapshot | Test purga | Pasa | Alta |
| 5 | 3 | Reemplazar `INSERT OR REPLACE` | Inmutabilidad | `historian.py`, otros | Medio | Tests | Test doble cierre | No sobrescribe | Media |
| 5 | 4 | Bitacora append-only | Auditoria | schema/cierre | Medio | Schema | Test bitacora | Secuencia preservada | Media |
| 6 | 1 | Mejorar manejo de errores | Menos fallos silenciosos | varios | Medio | Tests | `pytest` | Pasa | Media |
| 6 | 2 | Mejorar logs | Operacion clara | logger/CLIs | Bajo | Ninguno | Revision manual | Mensajes claros | Media |
| 6 | 3 | Validar RFC receptor | Seguridad fiscal | XML/DTO/validator | Medio | Schema/DTO | Test receptor | Pasa | Media |
| 6 | 4 | Reducir duplicidad | Mantenibilidad | CLIs/workflow | Medio | Tests | `pytest` | Pasa | Media |
| 7 | 1 | RBAC | Control usuarios | Futuro | Alto | Nucleo estable | N/A | N/A | Futuro |
| 7 | 2 | API | Integracion | Futuro | Alto | Nucleo estable | N/A | N/A | Futuro |
| 7 | 3 | Dashboard | Operacion | Futuro | Medio | API/datos | N/A | N/A | Futuro |
| 7 | 4 | PostgreSQL | Escala | Futuro | Alto | Schema estable | N/A | N/A | Futuro |
| 7 | 5 | IA avanzada | Extraccion | Futuro | Medio | Politica datos | N/A | N/A | Futuro |

## 11. Comandos exactos para Codex o Antigravity

```powershell
# Fase 1 - Inspeccion inicial
rg --files
rg -n "Optional|INSERT OR REPLACE|DELETE FROM|UPDATE|LIBERADA|PAGADO|schema\.sql|sqlite3|DB_PATH|GEMINI_API_KEY" 03_SCRIPTS
rg -n "Jarod|\.gemini|C:\\Users|schema_path" 03_SCRIPTS

# Fase 1 - Validacion de sintaxis
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m compileall 03_SCRIPTS

# Fase 1 - Validacion de import controlado
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -c "import sys; sys.path.insert(0,'03_SCRIPTS'); import core.matching.matcher; print('matcher OK')"

# Fase 1 - Estado del repo
git status --short

# Fase 2 - Confirmar artefactos reproducibles
Test-Path "db\schema.sql"
Test-Path "requirements.txt"
Test-Path ".env.example"

# Fase 3 - Pruebas selectivas futuras
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m pytest tests/test_imports.py
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m pytest tests/test_config_paths.py
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m pytest tests/test_safe_scripts_do_not_execute_on_import.py
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m pytest tests/test_schema_can_initialize_empty_db.py
```

Comandos que no deben ejecutarse todavia sobre la base principal:

```powershell
python 03_SCRIPTS\clean_all.py
python 03_SCRIPTS\clean_staging.py
python 03_SCRIPTS\clear_matriz.py
python 03_SCRIPTS\modify_importe.py
python 03_SCRIPTS\modify_proveedor.py
python 03_SCRIPTS\run_weekly_closing.py close
python 03_SCRIPTS\run_payments_orchestrator.py liberate
python 03_SCRIPTS\run_payments_orchestrator.py cancel
python 03_SCRIPTS\run_payments_orchestrator.py add-to-run
```

## 12. Pruebas recomendadas

| Prueba | Que valida | Archivo sugerido | Modulo cubierto | Error que previene | Prioridad |
|---|---|---|---|---|---|
| Imports seguros | Modulos importan sin errores | `tests/test_imports.py` | matching/workflow/pipeline | `Optional` faltante | Urgente |
| Scripts destructivos | Import no ejecuta SQL | `tests/test_safe_scripts_do_not_execute_on_import.py` | scripts CLI | Borrado accidental | Urgente |
| Config paths | Ruta DB unica | `tests/test_config_paths.py` | config/CLIs | Bases distintas | Alta |
| Schema reproducible | DB limpia inicia | `tests/test_schema_can_initialize_empty_db.py` | SQLite | Falta schema | Alta |
| Pagos parciales | Saldos reales | `tests/test_payment_ledger.py` | orquestacion | Pagos parciales falsos | Alta |
| Cierre semanal | No cierra sin pago real | `tests/test_weekly_closing_requires_paid.py` | cierre | Cierre prematuro | Alta |
| Fechas invalidas | No usar hoy como fallback | `tests/test_invalid_dates.py` | normalizers | Elegibilidad falsa | Media |
| Dinero Decimal | Sin redondeos | `tests/test_money_precision.py` | loaders/orquestacion | Diferencias monetarias | Media |
| RFC receptor | Factura pertenece a empresa | `tests/test_receptor_rfc.py` | XML/validators | Facturas ajenas | Media |
| Snapshots | Evidencia antes de purga | `tests/test_closing_snapshot.py` | cierre | Perdida forense | Alta |

## 13. Priorizacion final

| Prioridad | Accion | Por que va primero | Riesgo si se pospone | Dificultad | Impacto |
|---|---|---|---|---|---|
| Urgente | Arreglar `Optional` | El sistema no importa | Todo flujo bloqueado | Baja | Alto |
| Urgente | Blindar scripts destructivos | Evita perdida inmediata | Borrado accidental | Baja | Alto |
| Alta | Crear schema y dependencias | Reproducibilidad | Auditoria incompleta | Media | Alto |
| Alta | Unificar ruta de DB | Evita operar base equivocada | Datos dispersos | Baja | Alto |
| Alta | Crear ledger pagos | Corrige saldos reales | Facturas cerradas sin pago | Alta | Alto |
| Alta | Crear snapshot cierre | Evidencia forense | Perdida irreversible | Media | Alto |
| Media | Corregir fechas/dinero/RFC receptor | Mejora integridad | Errores silenciosos | Media | Medio |
| Baja | Mejorar logs/mojibake | Operacion clara | Confusion de usuario | Baja | Medio |
| Futuro | RBAC/API/UI/PostgreSQL | Escala futura | Complejidad prematura | Alta | Futuro |

## 14. Primer problema a atacar

* Problema: `Optional` faltante en `03_SCRIPTS/core/matching/matcher.py`.
* Evidencia: el archivo importa `List`, `Dict`, `Any`, `Tuple`, pero la firma de `evaluate_candidates` usa `Optional`.
* Por que va primero: bloquea `core.matching`, `ingest_pipeline`, `workflow_engine`, `run_real_batch.py` y reprocesos.
* Archivos afectados: `03_SCRIPTS/core/matching/matcher.py`; prueba sugerida `tests/test_imports.py`.
* Cambio recomendado: agregar `Optional` al import de `typing`.
* Riesgo: bajo.
* Comando de validacion:

```powershell
& "C:\Users\alexm\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -c "import sys; sys.path.insert(0,'03_SCRIPTS'); import core.matching.matcher; import workflow_engine; print('OK')"
```

* Prueba minima: importar `core.matching.matcher`, `core.matching.reconciliation_engine`, `core.pipeline.ingest_pipeline` y `workflow_engine`.
* Que NO debe tocarse todavia: cierre, ledger, schema completo, scoring, reglas de negocio, migraciones grandes, API o dashboard.

## 15. Conclusion critica

El proyecto tiene una idea fuerte y una estructura funcional razonable, pero actualmente no es confiable para produccion financiera. La prioridad no es redisenar todo, sino estabilizar el nucleo minimo: imports, scripts seguros, schema reproducible, rutas centralizadas y pruebas basicas.

El analisis previo es mayormente confiable, pero debe matizarse: si existen `.db` y pruebas dentro de `03_SCRIPTS`; lo que falta es reproducibilidad limpia, proteccion operativa y contrato formal de cierre/pagos.

Errores confirmados:

* Import roto por `Optional`.
* Falta de `schema.sql` versionado.
* Falta de dependencias y `.env.example`.
* Rutas privadas.
* Scripts destructivos al importarse.
* Uso riesgoso de `INSERT OR REPLACE`.
* Cierre sobre corrida `LIBERADA`.
* Falta de ledger real.
* Falta de snapshot completo antes de purga.
* Fecha invalida convertida a fecha actual.

Errores que deben matizarse:

* No faltan totalmente pruebas; existen, pero estan ubicadas dentro de `03_SCRIPTS` y algunas dependen de rutas privadas.
* No todo el sistema usa `float`; el DTO usa `Decimal`, pero la persistencia y orquestacion convierten a `float`.
* RBAC, API, dashboard y PostgreSQL son mejoras futuras, no el primer frente.

## Autoevaluacion final

1. Estoy resolviendo una problematica real del proyecto: si.
2. Las recomendaciones estan justificadas por evidencia: si.
3. Evite proponer cambios que rompan lo que ya funciona: si.
4. Separe errores criticos de mejoras futuras: si.
5. Valide el analisis previo contra el codigo actual: si.
6. Explique que repara, por que lo repara y para que lo mejora: si.
7. Ordene el trabajo por fases para evitar conflictos: si.
8. Genere contenido listo para `MANUAL_TRABAJO_CORRECCIONES.md`: si.
