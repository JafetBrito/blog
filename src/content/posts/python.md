---
title: "🐍 Python Aumentado: El Libro que los Otros 9 Millones No Escribieron"
title_en: "🐍 Augmented Python: The Book the Other 9 Million Didn't Write"
description: "El libro de Python más completo de 2026: desde cero hasta producción, con IA integrada en cada capítulo. Ciberseguridad, Data Science, automatización, desarrollo web, y APIs de LLMs. Siete partes, código real, secretos que nadie más te cuenta, y la IA como copiloto permanente."
description_en: "The most complete Python book of 2026: from zero to production, with AI integrated in every chapter. Cybersecurity, Data Science, automation, web development, and LLM APIs. Seven parts, real code, secrets nobody else tells you, and AI as your permanent copilot."
pubDate: 2026-06-11
tags: ["Python", "Python3", "ProgramacionIA", "DataScience", "Automatizacion", "Ciberseguridad", "LLM", "Tutorial", "Libro", "DeepLearning"]
author: "Jafet Brito"
heroImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&q=80"
draft: false
---

<div class="lang-es">

# 🐍 Python Aumentado: El Libro que los Otros 9 Millones No Escribieron

**Por Jafet Brito** · Security Researcher · *Publicado el 11 de junio de 2026*

---

> *"Python no es un lenguaje de programación. Es el idioma con el que la humanidad le habla a las máquinas en 2026."*

> *"El código que no puedes leer en seis meses no era código — era magia oscura."*
> — El principio de la legibilidad de Python

---

## ⚠️ Por Qué Este Libro es Diferente

Hay 9 millones de tutoriales de Python en internet. Este no es uno más.

**Lo que hace diferente a este libro:**

* 🤖 **IA como copiloto permanente** — cada capítulo incluye cómo usar Claude, Gemini, o GitHub Copilot para acelerar ese tema específico
* 🔐 **Mentalidad Zero Trust desde el primer día** — seguridad no es un capítulo al final, es una filosofía que atraviesa todo el código
* 🎯 **Proyectos reales, no ejercicios de juguete** — cada parte termina con algo que puedes poner en tu portafolio
* 📅 **Python 3.14 + las novedades de 2026** — t-strings, free-threading, JIT compiler, y lo que realmente importa
* 🌐 **El puente hacia los LLMs** — Python como la puerta de entrada al ecosistema de IA generativa
* ⚗️ **Los "secretos" que los tutoriales básicos nunca mencionan** — patrones de producción, anti-patterns, y las decisiones que diferencian código amateur de código profesional

---

## 🗺️ Mapa del Libro

```
📖 PYTHON AUMENTADO — ESTRUCTURA COMPLETA

PARTE 0: Antes del Código — La Mentalidad
  └─ Cap 0.1: Por qué Python ganó
  └─ Cap 0.2: Cómo configurar tu entorno como un profesional
  └─ Cap 0.3: Tu primer copiloto de IA

PARTE I: Los Fundamentos (Sin Atajos)
  └─ Cap 1.1: Variables, tipos y la verdad sobre los objetos
  └─ Cap 1.2: Operadores, condiciones y el arte de la decisión
  └─ Cap 1.3: Loops — la filosofía del control
  └─ Cap 1.4: Funciones — el arte de no repetirte
  └─ Cap 1.5: Errores y excepciones — Zero Trust en tu código

PARTE II: Estructuras de Datos — Los Bloques de la Realidad
  └─ Cap 2.1: Listas — el array que sabe demasiado
  └─ Cap 2.2: Diccionarios — el JSON antes de JSON
  └─ Cap 2.3: Sets y Tuplas — cuando importa la semántica
  └─ Cap 2.4: Comprensiones — Python idiomático

PARTE III: Python Intermedio — Donde Todo Cambia
  └─ Cap 3.1: Programación Orientada a Objetos
  └─ Cap 3.2: Decoradores — el patrón que nadie explica bien
  └─ Cap 3.3: Generators e Iterators — memoria infinita finita
  └─ Cap 3.4: Context Managers y el protocolo with
  └─ Cap 3.5: Módulos, paquetes y el arte de organizar código
  └─ Cap 3.6: Python 3.14 — las novedades que importan

PARTE IV: Python para el Mundo Real
  └─ Cap 4.1: Archivos, paths y el sistema de archivos
  └─ Cap 4.2: APIs REST — habla con el mundo
  └─ Cap 4.3: Bases de datos con Python
  └─ Cap 4.4: Testing — código que confía en sí mismo
  └─ Cap 4.5: Concurrencia y paralelismo moderno

PARTE V: Python + IA — El Diferenciador de 2026
  └─ Cap 5.1: El ecosistema de IA en Python
  └─ Cap 5.2: APIs de LLMs — Claude, GPT, Gemini desde código
  └─ Cap 5.3: LangChain y agentes de IA
  └─ Cap 5.4: Data Science esencial (NumPy, Pandas, visualización)
  └─ Cap 5.5: Machine Learning con scikit-learn
  └─ Cap 5.6: Deep Learning con PyTorch

PARTE VI: Python para Ciberseguridad y OSINT
  └─ Cap 6.1: Python para seguridad — mentalidad y ética
  └─ Cap 6.2: Networking y análisis de paquetes
  └─ Cap 6.3: OSINT automatizado con Python
  └─ Cap 6.4: Automatización de herramientas de seguridad
  └─ Cap 6.5: Python para Blue Team — detección y análisis

PARTE VII: Python en Producción
  └─ Cap 7.1: Entornos virtuales y gestión de dependencias
  └─ Cap 7.2: Docker + Python
  └─ Cap 7.3: CI/CD para proyectos Python
  └─ Cap 7.4: APIs con FastAPI
  └─ Cap 7.5: El portafolio que consigue empleo
```

---

# PARTE 0: Antes del Código — La Mentalidad

![Python setup](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

## Capítulo 0.1: Por Qué Python Ganó

Antes de escribir una sola línea de código, necesitas entender **por qué Python**. No porque sea el "mejor" lenguaje — no lo es en velocidad pura, no lo es en tipado estático, no lo es en consumo de memoria. Python ganó por razones más profundas:

**1. La filosofía de la legibilidad**

Python tiene un documento llamado **PEP 20 — The Zen of Python**. Escribe `import this` en cualquier intérprete de Python y lo verás. Los principios más importantes:

> *"Beautiful is better than ugly."*
> *"Explicit is better than implicit."*
> *"Simple is better than complex."*
> *"Readability counts."*

Esto no es marketing. Es la filosofía que guía cada decisión de diseño del lenguaje. Python se diseñó para que **los humanos lo lean primero, las máquinas después**.

**2. El ecosistema que ganó todas las guerras**

En 2026, Python domina:
* 🧠 **Machine Learning / IA** — PyTorch, TensorFlow, scikit-learn, Hugging Face
* 📊 **Data Science** — Pandas, NumPy, Jupyter, Matplotlib
* 🔐 **Ciberseguridad** — Scapy, Impacket, herramientas de pentest
* 🌐 **Web backends** — Django, FastAPI, Flask
* ⚙️ **Automatización** — Ansible, scripts de infraestructura, Selenium
* 🤖 **Integración con LLMs** — El lenguaje nativo de Claude, GPT y Gemini

Cuando Google, Netflix, Instagram, Spotify, o cualquier empresa de IA escribe código, escriben Python. No porque sea el más rápido — porque es el más **comunicativo**.

**3. Python 3.14 — El momento del salto de rendimiento**

La versión más reciente estable de Python es la **3.14** (lanzada el 7 de octubre de 2025). Las novedades que realmente importan para 2026:

* 🚀 **Free-Threading oficial (PEP 779)** — se elimina el Global Interpreter Lock (GIL), habilitando verdadero paralelismo en múltiples hilos
* ⚡ **JIT Compiler experimental** — aceleración de rendimiento para loops intensivos
* 🧵 **T-strings (PEP 750)** — evolución de los f-strings con procesamiento personalizable
* 📝 **Anotaciones diferidas** — mejoran tiempo de inicio y rendimiento en runtime
* 🎨 **REPL con colores y multi-línea** — la experiencia interactiva que Python siempre debió tener
* 🆔 **UUID v7** — nativo en el módulo `uuid`, ordenados por tiempo de creación

---

## Capítulo 0.2: Configura Tu Entorno Como un Profesional

La mayoría de tutoriales te dice "instala Python". Los profesionales hacen algo diferente.

### El Stack de Desarrollo Profesional 2026

```bash
# Paso 1: Instala pyenv (gestiona múltiples versiones de Python)
# En macOS/Linux:
curl https://pyenv.run | bash

# En Windows (con PowerShell como admin):
# Instala desde https://github.com/pyenv-win/pyenv-win

# Paso 2: Instala Python 3.14 con pyenv
pyenv install 3.14.0
pyenv global 3.14.0

# Verifica
python --version  # Python 3.14.0

# Paso 3: Instala uv — el gestor de paquetes moderno
# uv es 10-100x más rápido que pip
curl -LsSf https://astral.sh/uv/install.sh | sh

# Paso 4: Crea tu primer proyecto profesional
uv init mi-proyecto
cd mi-proyecto
uv add requests  # equivalente a pip install, pero mejor

# Paso 5: Editor de código
# VS Code con las extensiones:
# - Python (Microsoft)
# - Pylance (autocompletado avanzado)
# - Ruff (linter ultrarrápido)
# - GitHub Copilot (tu copiloto de IA)
```

### La Estructura de Proyecto Profesional

```
mi-proyecto/
├── src/
│   └── mi_proyecto/
│       ├── __init__.py
│       ├── main.py
│       └── utils.py
├── tests/
│   ├── __init__.py
│   └── test_main.py
├── .env                  # Variables de entorno (NUNCA en git)
├── .env.example          # Ejemplo sin valores reales
├── .gitignore
├── pyproject.toml        # Configuración moderna del proyecto
└── README.md
```

> 🔐 **Zero Trust desde el día 1:** El archivo `.env` contiene tus credenciales y claves API. **Nunca** lo subas a git. Crea siempre un `.gitignore` que lo excluya antes de escribir tu primera línea de código.

```bash
# Crea .gitignore antes de git init
echo ".env" >> .gitignore
echo "__pycache__/" >> .gitignore
echo ".venv/" >> .gitignore
echo "*.pyc" >> .gitignore
```

---

## Capítulo 0.3: Tu Primer Copiloto de IA

Antes de empezar a aprender Python, configura tu copiloto. En 2026, aprender a programar **sin IA** es como aprender a cocinar sin saber que existen los cuchillos afilados.

### Las 3 Formas de Usar IA para Aprender Python

**Modo 1 — El Tutor (para entender conceptos)**
```
Prompt para Claude/Gemini/GPT:
"Soy principiante en Python. Explícame qué es
una función como si fuera un chef que hace
recetas reutilizables. Luego dame un ejemplo
de una función que calcule el precio con IVA,
y explícame cada línea. Al final, hazme 3
preguntas para verificar que entendí."
```

**Modo 2 — El Par Programador (para escribir código)**
```
Prompt para GitHub Copilot / Cursor:
"Escribe una función Python que:
- Reciba una lista de emails
- Valide que cada uno tenga formato correcto
- Retorne una tupla: (emails_válidos, emails_inválidos)
- Incluya type hints modernos de Python 3.14
- Incluya docstring con ejemplos
- Sea testeable con pytest"
```

**Modo 3 — El Debugger (para resolver errores)**
```
Prompt:
"Este código Python me da el siguiente error.
En lugar de darme la solución directamente,
explícame QUÉ está causando el error y POR QUÉ,
luego hazme preguntas para guiarme a encontrar
la solución yo mismo.

Código: [tu código]
Error: [el mensaje de error completo]"
```

> 💡 **El secreto de aprender con IA:** Usa la IA para entender, no para copiar. El código que no entiendes es deuda cognitiva que pagarás con intereses cuando necesites modificarlo.

---

# PARTE I: Los Fundamentos — Sin Atajos

![Fundamentals](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80)

## Capítulo 1.1: Variables, Tipos y la Verdad Sobre los Objetos

### La Primera Verdad: Todo es un Objeto

A diferencia de muchos lenguajes, en Python **absolutamente todo es un objeto**. Los números, las cadenas de texto, las funciones, las clases — todo. Esta decisión de diseño tiene consecuencias profundas que la mayoría de tutoriales para principiantes ignora completamente.

```python
# Parece simple...
nombre = "Jafet"
edad = 28
es_activo = True
precio = 99.99

# Pero en realidad, cada variable apunta a un objeto en memoria
# Esto no es solo un número:
x = 42
print(type(x))        # <class 'int'>
print(id(x))          # Dirección en memoria: ej. 140234567890
print(x.__class__)    # <class 'int'>
print(dir(x))         # Todos los métodos que tiene un int

# Los enteros pequeños son objetos compartidos (optimización)
a = 256
b = 256
print(a is b)         # True — mismo objeto en memoria

a = 257
b = 257
print(a is b)         # False — objetos distintos (fuera del rango cacheado)
```

> 🧠 **El secreto que nadie cuenta:** Python cachea los enteros del -5 al 256 como objetos singleton. Esto explica uno de los bugs más confusos que encontrarás en tu carrera: por qué `a is b` es `True` para números pequeños pero `False` para grandes. Usa siempre `==` para comparar valores, `is` solo para verificar identidad de objeto (como `is None`).

### Los Tipos Fundamentales de Python

```python
# Tipos numéricos
entero = 42              # int — precisión arbitraria (no overflow!)
flotante = 3.14159       # float — IEEE 754 doble precisión
complejo = 3 + 4j        # complex — números complejos nativos
booleano = True          # bool — subclase de int (True == 1, False == 0)

# El "gotcha" del flotante que destruye aplicaciones financieras:
print(0.1 + 0.2)         # 0.30000000000000004  ⚠️
# La solución profesional:
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.2 ✅

# Cadenas de texto
simple = 'hola'
doble = "mundo"
multilinea = """
Este es un texto
que ocupa múltiples
líneas
"""

# F-strings — la forma moderna (Python 3.6+)
nombre = "Jafet"
edad = 28
mensaje = f"Hola, {nombre}. Tienes {edad} años."

# T-strings — LA NOVEDAD de Python 3.14
# Permiten procesamiento personalizado de strings
from string.templatelib import Template  # Python 3.14
datos_usuario = t"SELECT * FROM users WHERE id = {user_id}"
# A diferencia de f-strings, t-strings no se evalúan automáticamente
# Permiten sanitización, escape, traducción, etc.

# None — el valor especial de "nada"
resultado = None
print(resultado is None)  # True — siempre usa 'is' con None

# Verificación de tipos
print(isinstance(42, int))          # True
print(isinstance(3.14, (int, float)))  # True — múltiples tipos
```

### Tipado Dinámico vs Tipado Estático — La Conversación que Importa

```python
# Python es dinámicamente tipado:
# Una variable puede cambiar de tipo durante la ejecución
x = 42
x = "ahora soy un string"  # Python lo permite
x = [1, 2, 3]               # Y ahora una lista

# Pero en 2026, el código Python profesional usa TYPE HINTS
# No cambia el comportamiento — mejora la legibilidad y el tooling

def calcular_iva(precio: float, tasa: float = 0.16) -> float:
    """
    Calcula el precio con IVA incluido.
    
    Args:
        precio: Precio base sin IVA
        tasa: Tasa de IVA (default 16%)
    
    Returns:
        Precio total con IVA
    
    Examples:
        >>> calcular_iva(100.0)
        116.0
        >>> calcular_iva(100.0, 0.10)
        110.0
    """
    return precio * (1 + tasa)

# Python 3.14 — Anotaciones diferidas: mejor rendimiento
# Las anotaciones ya no se evalúan en tiempo de importación
from __future__ import annotations  # En 3.13 aún necesario, nativo en 3.14
```

---

## Capítulo 1.2: Operadores, Condiciones y el Arte de la Decisión

```python
# Operadores de comparación — todos retornan bool
print(5 == 5)    # True  — igualdad de valor
print(5 != 3)    # True  — desigualdad
print(5 > 3)     # True  — mayor que
print(5 >= 5)    # True  — mayor o igual

# Python permite encadenar comparaciones (no todos los lenguajes lo hacen):
edad = 25
print(18 <= edad < 65)  # True — pythónico y legible

# Operadores lógicos
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# Short-circuit evaluation — crucial para rendimiento y seguridad:
usuario = None
# Esto NO lanza error porque Python evalúa de izquierda a derecha:
nombre = usuario and usuario.nombre  # None (no evalúa .nombre)
nombre = usuario or "Anónimo"        # "Anónimo"

# Operador walrus := (Python 3.8+) — asignar y evaluar en una línea
import re
texto = "Error: archivo no encontrado"
if match := re.search(r"Error: (.+)", texto):
    print(f"Encontrado: {match.group(1)}")  # archivo no encontrado

# Condicionales — la forma idiomática
def clasificar_edad(edad: int) -> str:
    """Clasifica una persona por rango de edad."""
    match edad:  # Pattern matching — Python 3.10+
        case edad if edad < 0:
            return "Edad inválida"
        case edad if edad < 13:
            return "Niño"
        case edad if edad < 18:
            return "Adolescente"
        case edad if edad < 65:
            return "Adulto"
        case _:
            return "Adulto mayor"

# Expresión ternaria — para condicionales simples en una línea
status = "activo" if usuario else "inactivo"

# El anti-pattern más común con condicionales:
# ❌ Comparar booleanos explícitamente:
if es_activo == True:  # MAL
    pass

# ✅ El modo Python:
if es_activo:  # BIEN
    pass
```

---

## Capítulo 1.3: Loops — La Filosofía del Control

```python
# For loops — iteración sobre secuencias
frutas = ["mango", "papaya", "guanábana"]

# ❌ El loop no-Python (estilo C/Java):
for i in range(len(frutas)):
    print(frutas[i])

# ✅ El loop Python:
for fruta in frutas:
    print(fruta)

# ✅ Cuando necesitas el índice, usa enumerate:
for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")

# ✅ Iterar sobre dos listas simultáneamente, usa zip:
nombres = ["Ana", "Pedro", "María"]
notas = [95, 87, 92]
for nombre, nota in zip(nombres, notas):
    print(f"{nombre}: {nota}")

# While loops — cuando no sabes cuántas veces iterar
intentos = 0
max_intentos = 3

while intentos < max_intentos:
    # Simula verificación de credenciales
    credenciales_ok = verificar_credenciales()
    if credenciales_ok:
        break
    intentos += 1
else:
    # El else en un while/for se ejecuta si NO hubo break
    # Uno de los secretos más útiles de Python que nadie enseña
    print("Cuenta bloqueada por demasiados intentos")

# Loop control
for numero in range(100):
    if numero % 2 == 0:
        continue  # Salta al siguiente iteración
    if numero > 10:
        break     # Sale del loop
    print(numero)

# Loops con comprensiones — veremos más en Parte II
cuadrados = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16...]
pares = [x for x in range(20) if x % 2 == 0]

# 🔐 Zero Trust en loops — el peligro del loop infinito en producción:
import time

def loop_seguro(max_iteraciones: int = 10_000):
    """Loop con protección de timeout para código productivo."""
    for i in range(max_iteraciones):
        # Tu lógica aquí
        resultado = procesar_item(i)
        if resultado.completado:
            break
    else:
        raise TimeoutError(f"Loop no convergió en {max_iteraciones} iteraciones")
```

---

## Capítulo 1.4: Funciones — El Arte de No Repetirte

Las funciones son el primer nivel de abstracción. Son donde el código empieza a tener **significado**, no solo instrucciones.

```python
# Función básica con todos los elementos modernos
def procesar_pago(
    monto: float,
    moneda: str = "MXN",
    *,                          # Todo lo que sigue es keyword-only
    descripcion: str = "",
    validar: bool = True
) -> dict:
    """
    Procesa un pago con validación opcional.
    
    Args:
        monto: Cantidad a cobrar (debe ser positiva)
        moneda: Código ISO de moneda (default: MXN)
        descripcion: Descripción opcional del pago
        validar: Si True, valida el monto antes de procesar
    
    Returns:
        Diccionario con status, id_transaccion, y timestamp
    
    Raises:
        ValueError: Si el monto es negativo o cero
        
    Examples:
        >>> procesar_pago(100.0, descripcion="Suscripción mensual")
        {'status': 'success', 'monto': 100.0, 'moneda': 'MXN'}
    """
    if validar and monto <= 0:
        raise ValueError(f"Monto debe ser positivo, recibido: {monto}")
    
    return {
        "status": "success",
        "monto": monto,
        "moneda": moneda,
        "descripcion": descripcion
    }

# *args y **kwargs — flexibilidad máxima
def log_evento(nivel: str, mensaje: str, *args, **kwargs):
    """Logger flexible que acepta cualquier contexto adicional."""
    import datetime
    
    entry = {
        "timestamp": datetime.datetime.now().isoformat(),
        "nivel": nivel,
        "mensaje": mensaje.format(*args),
        "contexto": kwargs
    }
    print(entry)

log_evento("ERROR", "Fallo en autenticación para {}", "usuario@email.com",
           ip="192.168.1.1", intentos=3)

# Funciones lambda — para operaciones simples en una línea
ordenar_por_apellido = lambda persona: persona["apellido"]
personas_ordenadas = sorted(personas, key=ordenar_por_apellido)

# Pero en Python moderno, preferimos funciones nombradas cuando hay lógica:
from operator import itemgetter
personas_ordenadas = sorted(personas, key=itemgetter("apellido"))  # Más rápido

# Funciones como ciudadanos de primera clase (first-class functions)
def aplicar_descuento(precio: float) -> float:
    return precio * 0.9

def aplicar_iva(precio: float) -> float:
    return precio * 1.16

def calcular_precio_final(precio: float, *transformaciones) -> float:
    """Aplica una cadena de transformaciones de precio."""
    resultado = precio
    for transformacion in transformaciones:
        resultado = transformacion(resultado)
    return resultado

precio = calcular_precio_final(100.0, aplicar_descuento, aplicar_iva)
print(f"Precio final: ${precio:.2f}")  # $104.40
```

---

## Capítulo 1.5: Errores y Excepciones — Zero Trust en Tu Código

> **Principio Zero Trust aplicado al código:** No asumas que los datos externos son válidos. No asumas que la red está disponible. No asumas que el archivo existe. Verifica todo.

```python
# La jerarquía de excepciones en Python
# BaseException
#   └── Exception
#       ├── ValueError    — valor incorrecto
#       ├── TypeError     — tipo incorrecto
#       ├── KeyError      — clave no existe en dict
#       ├── IndexError    — índice fuera de rango
#       ├── AttributeError — atributo no existe
#       ├── FileNotFoundError — archivo no existe
#       ├── PermissionError — sin permisos
#       └── ...

# Manejo básico de excepciones
def leer_configuracion(ruta: str) -> dict:
    """Lee un archivo JSON de configuración de forma segura."""
    import json
    import pathlib
    
    ruta_path = pathlib.Path(ruta)
    
    try:
        contenido = ruta_path.read_text(encoding="utf-8")
        return json.loads(contenido)
    
    except FileNotFoundError:
        print(f"⚠️ Archivo no encontrado: {ruta}")
        return {}
    
    except json.JSONDecodeError as e:
        print(f"⚠️ JSON inválido en {ruta}: {e}")
        return {}
    
    except PermissionError:
        print(f"🔒 Sin permisos para leer: {ruta}")
        raise  # Re-lanza la excepción — no podemos continuar sin permisos
    
    finally:
        # Se ejecuta SIEMPRE, independientemente del resultado
        print(f"Intento de lectura completado para: {ruta}")

# Crear excepciones personalizadas — crucial para código productivo
class ErrorAutenticacion(Exception):
    """Excepción para fallos de autenticación."""
    
    def __init__(self, usuario: str, razon: str):
        self.usuario = usuario
        self.razon = razon
        super().__init__(f"Fallo de auth para '{usuario}': {razon}")

class ErrorRateLimiting(ErrorAutenticacion):
    """Cuenta bloqueada por demasiados intentos."""
    
    def __init__(self, usuario: str, tiempo_espera: int):
        super().__init__(usuario, f"Rate limit — espera {tiempo_espera}s")
        self.tiempo_espera = tiempo_espera

# Uso:
try:
    autenticar("hacker@evil.com")
except ErrorRateLimiting as e:
    print(f"Cuenta bloqueada. Intenta en {e.tiempo_espera} segundos.")
except ErrorAutenticacion as e:
    print(f"No autorizado: {e.razon}")

# Context manager para manejo de recursos (más sobre esto en Parte III)
# El with garantiza que los recursos se limpien aunque haya error
with open("datos.txt", "r") as archivo:
    contenido = archivo.read()
# El archivo se cierra automáticamente aquí, incluso si hubo excepción
```

---

# PARTE II: Estructuras de Datos — Los Bloques de la Realidad

## Capítulo 2.1: Listas — El Array que Sabe Demasiado

```python
# Operaciones fundamentales con listas
frutas = ["mango", "papaya", "guanábana", "tamarindo"]

# Slicing — una de las operaciones más poderosas de Python
print(frutas[1:3])      # ["papaya", "guanábana"] — de índice 1 a 2
print(frutas[:2])       # ["mango", "papaya"] — desde el inicio
print(frutas[2:])       # ["guanábana", "tamarindo"] — hasta el final
print(frutas[-1])       # "tamarindo" — el último elemento
print(frutas[::-1])     # Invierte la lista — el truco que sorprende

# Métodos importantes
frutas.append("mamey")          # Añade al final — O(1)
frutas.insert(1, "pitahaya")    # Inserta en posición — O(n)
frutas.pop()                    # Remueve y retorna el último — O(1)
frutas.pop(0)                   # Remueve y retorna el primero — O(n)
frutas.remove("papaya")         # Remueve primera ocurrencia — O(n)

# Ordenamiento
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
numeros.sort()                  # Ordena in-place (modifica la lista)
ordenados = sorted(numeros)     # Retorna nueva lista ordenada
descendente = sorted(numeros, reverse=True)

# Ordenar objetos complejos
personas = [
    {"nombre": "Ana", "edad": 28},
    {"nombre": "Pedro", "edad": 22},
    {"nombre": "María", "edad": 35}
]
por_edad = sorted(personas, key=lambda p: p["edad"])
por_nombre = sorted(personas, key=lambda p: p["nombre"])

# El secreto de rendimiento: las listas son O(n) para búsquedas
# Para búsquedas frecuentes, usa sets o diccionarios:
emails_lista = ["a@b.com", "c@d.com", "e@f.com"]
emails_set = set(emails_lista)  # Convierte a set para O(1) lookup

if "a@b.com" in emails_lista:  # O(n) — recorre toda la lista
    pass
if "a@b.com" in emails_set:    # O(1) — tabla hash directa
    pass

# Listas como stacks y queues
stack = []
stack.append(1)     # push
stack.append(2)
ultimo = stack.pop() # pop — eficiente

from collections import deque  # Para queues eficientes
queue = deque()
queue.append(1)         # enqueue — O(1)
queue.append(2)
primero = queue.popleft() # dequeue — O(1) (vs O(n) en list)
```

---

## Capítulo 2.2: Diccionarios — El JSON Antes de JSON

Los diccionarios son la estructura de datos más poderosa y más usada de Python. En 2026, también son la interfaz natural entre Python y el mundo de los LLMs (que trabajan con JSON).

```python
# Diccionario básico
usuario = {
    "id": 12345,
    "nombre": "Jafet Brito",
    "email": "jafet@example.com",
    "roles": ["admin", "researcher"],
    "activo": True
}

# Acceso seguro — el error más común en Python es KeyError
print(usuario["nombre"])              # Lanza KeyError si no existe
print(usuario.get("telefono"))        # None si no existe — SEGURO
print(usuario.get("telefono", "N/A")) # "N/A" si no existe — MEJOR

# Modificación
usuario["nombre"] = "Jafet B."        # Modifica
usuario["creado"] = "2026-06-11"       # Añade nueva clave
del usuario["telefono"]                # Elimina (cuidado con KeyError)
usuario.pop("telefono", None)          # Elimina sin KeyError si no existe

# Iteración sobre diccionarios
for clave in usuario:                  # Itera sobre claves
    print(clave)

for clave, valor in usuario.items():  # Itera sobre pares — PREFERIDO
    print(f"{clave}: {valor}")

claves = list(usuario.keys())         # Lista de claves
valores = list(usuario.values())      # Lista de valores

# Merge de diccionarios — el operador | (Python 3.9+)
base = {"host": "localhost", "puerto": 5432}
override = {"puerto": 5433, "database": "mi_db"}
config = base | override  # {"host": "localhost", "puerto": 5433, "database": "mi_db"}

# defaultdict — evita KeyError en conteo y agrupación
from collections import defaultdict

conteo = defaultdict(int)
palabras = "python es genial python es rapido".split()
for palabra in palabras:
    conteo[palabra] += 1  # No lanza KeyError aunque la clave no exista
# {"python": 2, "es": 2, "genial": 1, "rapido": 1}

# Counter — para contar elementos
from collections import Counter
frecuencia = Counter(palabras)
print(frecuencia.most_common(3))  # Los 3 más frecuentes

# Diccionarios anidados — representación de datos complejos
config_sistema = {
    "database": {
        "host": "localhost",
        "puerto": 5432,
        "credenciales": {
            "usuario": "admin",
            "password": "NO_HARDCODEAR_ESTO"  # Usar env vars
        }
    },
    "api": {
        "base_url": "https://api.example.com",
        "timeout": 30
    }
}

# Acceso profundo seguro con get encadenado
db_host = config_sistema.get("database", {}).get("host", "localhost")
```

---

## Capítulo 2.3: Sets y Tuplas — Cuando Importa la Semántica

```python
# SETS — colecciones sin duplicados, búsqueda O(1)
emails_únicos = {"a@b.com", "c@d.com", "a@b.com"}  # Solo guarda una vez
print(emails_únicos)  # {"a@b.com", "c@d.com"}

# Operaciones de conjuntos — extremadamente útiles en análisis
usuarios_premium = {"ana", "pedro", "maría", "juan"}
usuarios_activos = {"pedro", "juan", "carlos", "luis"}

# ¿Quiénes son premium Y activos?
ambos = usuarios_premium & usuarios_activos  # {"pedro", "juan"}

# ¿Quiénes son premium O activos?
alguno = usuarios_premium | usuarios_activos  # {"ana", "pedro", "maría", "juan", "carlos", "luis"}

# ¿Premium pero NO activos?
solo_premium = usuarios_premium - usuarios_activos  # {"ana", "maría"}

# ¿En uno pero no en el otro?
diferencia_simetrica = usuarios_premium ^ usuarios_activos  # {"ana", "maría", "carlos", "luis"}

# Sets para deduplicar datos sucios
ips_bruteforce = ["192.168.1.1", "192.168.1.1", "10.0.0.1", "192.168.1.1"]
ips_únicas = list(set(ips_bruteforce))  # ["192.168.1.1", "10.0.0.1"]

# TUPLAS — colecciones inmutables, la estructura de datos subestimada
# Úsalas cuando el dato NO debe cambiar
coordenadas = (19.4326, -99.1332)  # CDMX — lat, long
punto_x, punto_y = coordenadas     # Unpacking

# Named tuples — el mejor de dos mundos (nombre + inmutabilidad)
from collections import namedtuple
from typing import NamedTuple  # La forma moderna con type hints

class Punto(NamedTuple):
    latitud: float
    longitud: float
    nombre: str = "Desconocido"

cdmx = Punto(19.4326, -99.1332, "Ciudad de México")
print(cdmx.latitud)   # 19.4326
print(cdmx[0])        # 19.4326 — también funciona por índice
lat, lon, nombre = cdmx  # Unpacking

# Tuplas como claves de diccionario (los sets y listas NO pueden serlo)
distancias = {
    ("CDMX", "Guadalajara"): 550,  # Kilómetros
    ("CDMX", "Monterrey"): 880
}
```

---

## Capítulo 2.4: Comprensiones — Python Idiomático

Las comprensiones son la característica que hace que el código Python sea reconocible al instante. Son más rápidas que los loops equivalentes y, cuando se usan bien, más legibles.

```python
# List comprehension
cuadrados = [x**2 for x in range(10)]
# vs el equivalente en loop:
cuadrados = []
for x in range(10):
    cuadrados.append(x**2)

# Con condición (filter)
pares = [x for x in range(20) if x % 2 == 0]

# Transformación + filtro
emails_válidos = [email.lower() for email in emails_raw 
                  if "@" in email and "." in email]

# Dict comprehension — transformar diccionarios
precios = {"mango": 25, "papaya": 18, "guanábana": 35}
con_iva = {fruta: precio * 1.16 for fruta, precio in precios.items()}

# Set comprehension — deduplica automáticamente
dominios = {email.split("@")[1] for email in emails if "@" in email}

# Generator expression — como list comprehension pero lazy (no carga todo en memoria)
# CRUCIAL para procesar archivos grandes o streams de datos
suma_cuadrados = sum(x**2 for x in range(1_000_000))  # No crea lista de 1M elementos

# El límite: no anides más de 2 niveles — pierde legibilidad
# ❌ Difícil de leer:
resultado = [[j for j in range(5)] for i in range(5) if i % 2 == 0]
# ✅ Usa una función nombrada para lógica compleja:
def generar_fila(i):
    return [j for j in range(5)]
resultado = [generar_fila(i) for i in range(5) if i % 2 == 0]
```

---

# PARTE III: Python Intermedio — Donde Todo Cambia

## Capítulo 3.1: Programación Orientada a Objetos

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import uuid

# En 2026, los dataclasses son la forma preferida de crear clases de datos
@dataclass
class Usuario:
    """Representación de un usuario del sistema."""
    nombre: str
    email: str
    id: str = field(default_factory=lambda: str(uuid.uuid7()))
    activo: bool = True
    creado: datetime = field(default_factory=datetime.now)
    roles: list[str] = field(default_factory=list)
    
    def __post_init__(self):
        """Validación automática después de la inicialización."""
        if "@" not in self.email:
            raise ValueError(f"Email inválido: {self.email}")
        self.email = self.email.lower()
    
    @property
    def es_admin(self) -> bool:
        """Verifica si el usuario tiene rol de administrador."""
        return "admin" in self.roles
    
    def agregar_rol(self, rol: str) -> None:
        """Agrega un rol al usuario si no lo tiene ya."""
        if rol not in self.roles:
            self.roles.append(rol)
    
    def __repr__(self) -> str:
        return f"Usuario(nombre={self.nombre!r}, email={self.email!r})"

# Herencia — cuándo usarla (y cuándo no)
@dataclass
class UsuarioAdmin(Usuario):
    """Usuario con privilegios de administración."""
    nivel_acceso: int = 1
    
    def __post_init__(self):
        super().__post_init__()  # Ejecuta validaciones del padre
        self.roles.append("admin")  # Los admins siempre tienen el rol

# Composición sobre herencia — el principio moderno
@dataclass
class Sesion:
    """Sesión activa de un usuario."""
    usuario: Usuario
    ip: str
    token: str = field(default_factory=lambda: str(uuid.uuid7()))
    iniciada: datetime = field(default_factory=datetime.now)
    
    def es_valida(self, tiempo_max_horas: int = 8) -> bool:
        """Verifica si la sesión sigue siendo válida."""
        from datetime import timedelta
        expira = self.iniciada + timedelta(hours=tiempo_max_horas)
        return datetime.now() < expira and self.usuario.activo

# Uso
usuario = Usuario("Jafet Brito", "jafet@example.com")
usuario.agregar_rol("researcher")
sesion = Sesion(usuario, "192.168.1.100")
print(sesion.es_valida())  # True
```

---

## Capítulo 3.2: Decoradores — El Patrón que Nadie Explica Bien

Los decoradores son una de las características más potentes de Python y, simultáneamente, la que más confunde a los programadores de otros lenguajes.

```python
import functools
import time
import logging
from typing import Callable, Any

# Entendiendo decoradores desde cero
# Un decorador es simplemente una función que toma una función y retorna una función

def medir_tiempo(func: Callable) -> Callable:
    """Decorador que mide el tiempo de ejecución de una función."""
    
    @functools.wraps(func)  # Preserva el nombre y docstring de func
    def wrapper(*args, **kwargs) -> Any:
        inicio = time.perf_counter()
        try:
            resultado = func(*args, **kwargs)
            return resultado
        finally:
            fin = time.perf_counter()
            print(f"⏱️ {func.__name__} ejecutó en {fin-inicio:.4f}s")
    
    return wrapper

# Decorador con parámetros — el siguiente nivel
def reintentar(max_intentos: int = 3, espera: float = 1.0):
    """Decorador que reintenta una función si falla."""
    
    def decorador(func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs) -> Any:
            ultimo_error = None
            
            for intento in range(max_intentos):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    ultimo_error = e
                    print(f"Intento {intento+1}/{max_intentos} falló: {e}")
                    if intento < max_intentos - 1:
                        time.sleep(espera)
            
            raise ultimo_error
        
        return wrapper
    return decorador

# Decoradores de clase — para estado persistente
class cache_resultado:
    """Decorador con cache — memoización simple."""
    
    def __init__(self, func: Callable):
        self.func = func
        self.cache = {}
        functools.update_wrapper(self, func)
    
    def __call__(self, *args):
        if args not in self.cache:
            self.cache[args] = self.func(*args)
        return self.cache[args]

# Uso de los decoradores
@medir_tiempo
@reintentar(max_intentos=3, espera=0.5)
def consultar_api_externa(endpoint: str) -> dict:
    """Consulta una API externa con reintentos automáticos."""
    import requests
    response = requests.get(endpoint, timeout=5)
    response.raise_for_status()
    return response.json()

@cache_resultado
def fibonacci(n: int) -> int:
    """Fibonacci con memoización — de O(2^n) a O(n)."""
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Python tiene functools.lru_cache y functools.cache para esto:
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci_profesional(n: int) -> int:
    if n < 2:
        return n
    return fibonacci_profesional(n-1) + fibonacci_profesional(n-2)
```

---

## Capítulo 3.3: Generators e Iterators — Memoria Infinita Finita

```python
# El problema: cargar 1 millón de registros en memoria
# ❌ Carga todo en memoria — puede crashear con archivos grandes:
def leer_todos_los_logs(archivo: str) -> list:
    with open(archivo) as f:
        return f.readlines()  # Si el archivo es de 10GB, esto falla

# ✅ Generator — procesa un elemento a la vez:
def leer_logs_stream(archivo: str):
    """Lee logs línea por línea sin cargar todo en memoria."""
    with open(archivo) as f:
        for linea in f:
            yield linea.strip()  # yield en lugar de return = generator

# Uso — procesa terabytes de datos con memoria constante
for linea in leer_logs_stream("sistema.log"):
    if "ERROR" in linea:
        procesar_error(linea)

# Generators con estado complejo
def paginar_api(url: str, limite: int = 100):
    """Generator que pagina automáticamente una API REST."""
    import requests
    
    pagina = 1
    while True:
        respuesta = requests.get(url, params={"page": pagina, "limit": limite})
        datos = respuesta.json()
        
        if not datos:
            return  # Fin de los datos
        
        yield from datos  # yield from delega a otro iterable
        
        if len(datos) < limite:
            return  # Última página
        
        pagina += 1

# Uso:
for usuario in paginar_api("https://api.ejemplo.com/usuarios"):
    procesar(usuario)  # Sin cargar todos los usuarios en memoria

# Generator expressions — lazy evaluation
# ✅ Eficiente — no carga todo:
suma = sum(x**2 for x in range(1_000_000))

# ❌ Carga todo en memoria:
suma = sum([x**2 for x in range(1_000_000)])
```

---

## Capítulo 3.4: Context Managers y el Protocolo with

```python
from contextlib import contextmanager, asynccontextmanager
import time
import logging

# El with garantiza cleanup aunque haya excepciones
# No es solo para archivos — es un patrón de gestión de recursos

# Creando tu propio context manager con contextmanager
@contextmanager
def cronometro(nombre: str = "operación"):
    """Mide el tiempo de un bloque de código."""
    inicio = time.perf_counter()
    try:
        yield  # El bloque 'with' se ejecuta aquí
    finally:
        fin = time.perf_counter()
        print(f"⏱️ {nombre}: {fin-inicio:.4f}s")

# Uso:
with cronometro("procesamiento de datos"):
    datos = procesar_dataset_grande()

# Context manager para manejo de transacciones de DB
@contextmanager
def transaccion_db(conexion):
    """Garantiza commit o rollback en transacciones."""
    try:
        yield conexion
        conexion.commit()
        print("✅ Transacción committed")
    except Exception as e:
        conexion.rollback()
        print(f"❌ Rollback por: {e}")
        raise

# Context manager como clase (protocolo completo)
class ConexionSegura:
    """Gestiona una conexión con cleanup garantizado."""
    
    def __init__(self, host: str, timeout: int = 30):
        self.host = host
        self.timeout = timeout
        self.conexion = None
    
    def __enter__(self):
        print(f"🔌 Conectando a {self.host}...")
        self.conexion = crear_conexion(self.host, self.timeout)
        return self.conexion
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.conexion:
            self.conexion.cerrar()
            print(f"🔌 Desconectado de {self.host}")
        
        # Retornar True suprime la excepción (raramente deseado)
        return False

with ConexionSegura("db.ejemplo.com") as conn:
    resultados = conn.query("SELECT * FROM usuarios")
```

---

## Capítulo 3.5: Módulos, Paquetes y el Arte de Organizar Código

```python
# Imports — el orden importa (PEP 8)
# 1. Imports de la librería estándar
import os
import sys
import json
from pathlib import Path
from typing import Optional

# 2. Imports de third-party
import requests
import numpy as np
import pandas as pd

# 3. Imports locales
from .utils import validar_email
from .models import Usuario

# Imports relativos vs absolutos
# En paquetes, los imports relativos son más robustos:
from . import utils          # Importa utils del mismo paquete
from ..models import Usuario # Importa del paquete padre

# El anti-pattern más común — NUNCA hagas esto:
from modulo import *  # Contamina el namespace, oculta dependencias

# __all__ — controla qué exporta tu módulo
__all__ = ["FuncionPublica", "ClasePublica"]  # Solo esto es público

# Importación lazy — para módulos pesados
def analizar_imagen(ruta: str):
    """Análisis de imagen — importa PIL solo si se necesita."""
    from PIL import Image  # Import dentro de la función
    return Image.open(ruta).size

# pyproject.toml — la configuración moderna del proyecto 2026
# [project]
# name = "mi-proyecto"
# version = "1.0.0"
# requires-python = ">=3.14"
# dependencies = [
#     "requests>=2.32.0",
#     "pydantic>=2.0.0",
#     "anthropic>=0.40.0"
# ]
# 
# [project.optional-dependencies]
# dev = ["pytest", "ruff", "mypy"]
# ai = ["langchain", "openai", "anthropic"]
```

---

## Capítulo 3.6: Python 3.14 — Las Novedades que Importan en 2026

```python
# 1. T-STRINGS (Template Strings) — PEP 750
# El problema de los f-strings: evalúan inmediatamente, sin control
nombre = "<script>alert('XSS')</script>"
# ❌ Peligroso en HTML:
html = f"<div>{nombre}</div>"  # Inyección XSS

# ✅ T-strings permiten procesamiento personalizado:
from html import escape

def html_safe(template):
    """Procesa t-string escapando HTML automáticamente."""
    parts = []
    for part in template:
        if isinstance(part, str):
            parts.append(part)
        else:
            parts.append(escape(str(part.value)))
    return "".join(parts)

# Sintaxis (Python 3.14):
nombre = "<script>alert('XSS')</script>"
html_seguro = html_safe(t"<div>{nombre}</div>")
# "<div>&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;</div>"

# 2. FREE-THREADING — PEP 779
# El GIL (Global Interpreter Lock) ya no es obligatorio
# Verdadero paralelismo en threads para CPU-bound tasks
import threading

def calcular_intensivo(datos):
    return sum(x**2 for x in datos)

# Antes del GIL removal: los threads no aceleraban trabajo CPU
# En Python 3.14 con free-threading: verdadero paralelismo
threads = [
    threading.Thread(target=calcular_intensivo, args=(chunk,))
    for chunk in chunks_de_datos
]

# 3. UUID7 — NATIVO
from uuid import uuid7
id_nuevo = uuid7()  # Ordenado por tiempo + aleatorio
# Perfecto para IDs de base de datos (mejor que uuid4 para indexación)

# 4. DATE.STRPTIME — Más intuitivo
from datetime import date
fecha = date.strptime("2026-06-11", "%Y-%m-%d")  # Antes: datetime.strptime + .date()

# 5. MATCH STATEMENT mejorado — Pattern matching más potente
def procesar_respuesta_api(respuesta: dict) -> str:
    match respuesta:
        case {"status": "success", "data": {"user": {"name": nombre}}}:
            return f"Bienvenido, {nombre}"
        case {"status": "error", "code": 401}:
            return "No autorizado"
        case {"status": "error", "code": code, "message": msg}:
            return f"Error {code}: {msg}"
        case _:
            return "Respuesta desconocida"
```

---

# PARTE IV: Python para el Mundo Real

## Capítulo 4.1: Archivos, Paths y el Sistema de Archivos

```python
from pathlib import Path  # La forma moderna — olvida os.path

# pathlib.Path — orientado a objetos, multiplataforma
directorio = Path.home() / "proyectos" / "mi-app"  # / como operador
directorio.mkdir(parents=True, exist_ok=True)

# Operaciones comunes
archivo = directorio / "datos.json"
print(archivo.exists())        # Verifica existencia
print(archivo.suffix)          # ".json"
print(archivo.stem)            # "datos"
print(archivo.parent)          # /home/usuario/proyectos/mi-app

# Leer y escribir
texto = archivo.read_text(encoding="utf-8")
archivo.write_text("contenido", encoding="utf-8")

datos = json.loads(archivo.read_bytes())
archivo.write_bytes(json.dumps(datos, indent=2).encode())

# Glob — búsqueda de archivos con patrones
archivos_python = list(Path(".").rglob("*.py"))   # Recursivo
logs_hoy = list(Path("/var/log").glob("*.log"))   # Solo nivel actual

# Procesar archivos grandes eficientemente
def contar_ips_en_log(ruta_log: Path) -> dict:
    """Cuenta ocurrencias de IPs en un log de acceso."""
    from collections import Counter
    
    ips = Counter()
    
    with ruta_log.open(encoding="utf-8") as f:
        for linea in f:          # Lee línea por línea — no carga todo
            if ip := extraer_ip(linea):
                ips[ip] += 1
    
    return dict(ips.most_common(10))  # Top 10 IPs

# CSV con pandas (más sobre pandas en Parte V)
import csv

# Para CSVs simples:
with open("datos.csv", "r", newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for fila in reader:
        print(fila["nombre"], fila["email"])

# Escribir CSV:
campos = ["nombre", "email", "activo"]
with open("salida.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=campos)
    writer.writeheader()
    writer.writerows(usuarios)
```

---

## Capítulo 4.2: APIs REST — Habla con el Mundo

```python
import requests
from dataclasses import dataclass
from typing import Optional
import os

# El patrón profesional para consumir APIs
@dataclass
class ConfigAPI:
    base_url: str
    api_key: str
    timeout: int = 30

class ClienteAPI:
    """Cliente reutilizable para APIs REST con manejo de errores."""
    
    def __init__(self, config: ConfigAPI):
        self.config = config
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {config.api_key}",
            "Content-Type": "application/json",
            "User-Agent": "MiApp/1.0"
        })
    
    def get(self, endpoint: str, params: dict = None) -> dict:
        """GET request con manejo de errores."""
        url = f"{self.config.base_url}/{endpoint.lstrip('/')}"
        
        try:
            response = self.session.get(
                url, 
                params=params,
                timeout=self.config.timeout
            )
            response.raise_for_status()  # Lanza HTTPError en 4xx/5xx
            return response.json()
        
        except requests.Timeout:
            raise TimeoutError(f"API no respondió en {self.config.timeout}s")
        except requests.HTTPError as e:
            if e.response.status_code == 401:
                raise PermissionError("API key inválida o expirada")
            elif e.response.status_code == 429:
                raise RuntimeError("Rate limit excedido — espera antes de reintentar")
            raise

    def post(self, endpoint: str, datos: dict) -> dict:
        url = f"{self.config.base_url}/{endpoint.lstrip('/')}"
        response = self.session.post(url, json=datos, timeout=self.config.timeout)
        response.raise_for_status()
        return response.json()

# Uso — las credenciales SIEMPRE de variables de entorno
config = ConfigAPI(
    base_url="https://api.ejemplo.com/v1",
    api_key=os.environ["API_KEY"]  # Nunca hardcodear
)
cliente = ClienteAPI(config)
usuarios = cliente.get("/usuarios", params={"activo": True, "limite": 50})

# Rate limiting inteligente con backoff exponencial
import time
from functools import wraps

def con_backoff(max_intentos=5, base_espera=1.0):
    """Decorador con backoff exponencial para rate limiting."""
    def decorador(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for intento in range(max_intentos):
                try:
                    return func(*args, **kwargs)
                except RuntimeError as e:
                    if "Rate limit" not in str(e):
                        raise
                    espera = base_espera * (2 ** intento)
                    print(f"Rate limited. Esperando {espera}s...")
                    time.sleep(espera)
            raise RuntimeError("Rate limit persistente después de backoff")
        return wrapper
    return decorador
```

---

## Capítulo 4.3: Bases de Datos con Python

```python
# SQLite para desarrollo y apps pequeñas — incluido en Python estándar
import sqlite3
from contextlib import contextmanager
from pathlib import Path

# SQLAlchemy para proyectos serios — el ORM estándar de Python
from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import DeclarativeBase, Session
from datetime import datetime

class Base(DeclarativeBase):
    pass

class Usuario(Base):
    __tablename__ = "usuarios"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    activo = Column(Boolean, default=True)
    creado = Column(DateTime, default=datetime.now)
    
    def __repr__(self):
        return f"<Usuario {self.email}>"

# Configuración de base de datos desde variables de entorno
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./dev.db")
engine = create_engine(DATABASE_URL, echo=False)

# Crear tablas
Base.metadata.create_all(engine)

# Operaciones CRUD
def crear_usuario(nombre: str, email: str) -> Usuario:
    with Session(engine) as session:
        usuario = Usuario(nombre=nombre, email=email)
        session.add(usuario)
        session.commit()
        session.refresh(usuario)
        return usuario

def obtener_usuarios_activos() -> list[Usuario]:
    with Session(engine) as session:
        return session.query(Usuario).filter(Usuario.activo == True).all()

# Para PostgreSQL en producción:
# DATABASE_URL = "postgresql://usuario:password@host:5432/dbname"
# pip install psycopg2-binary

# Para MongoDB:
# pip install pymongo
from pymongo import MongoClient

mongo = MongoClient(os.environ["MONGODB_URL"])
db = mongo["mi_app"]
usuarios_col = db["usuarios"]

# Insertar
resultado = usuarios_col.insert_one({
    "nombre": "Jafet",
    "email": "jafet@example.com",
    "activo": True
})

# Consultar
for usuario in usuarios_col.find({"activo": True}):
    print(usuario["nombre"])
```

---

## Capítulo 4.4: Testing — Código que Confía en Sí Mismo

> **Principio Zero Trust aplicado al testing:** No asumas que tu código funciona. Demuéstralo.

```python
# pytest — el framework estándar de testing en Python 2026
import pytest
from unittest.mock import Mock, patch, MagicMock

# Test básico
def test_calcular_iva():
    """El nombre debe describir qué testea."""
    resultado = calcular_iva(100.0, 0.16)
    assert resultado == 116.0, f"Esperaba 116.0, obtuve {resultado}"

# Parametrize — testea múltiples casos sin duplicar código
@pytest.mark.parametrize("precio,tasa,esperado", [
    (100.0, 0.16, 116.0),
    (0.0, 0.16, 0.0),
    (50.0, 0.10, 55.0),
    (100.0, 0.0, 100.0),
])
def test_calcular_iva_parametrizado(precio, tasa, esperado):
    assert calcular_iva(precio, tasa) == pytest.approx(esperado)

# Fixtures — setup reutilizable para tests
@pytest.fixture
def usuario_prueba():
    """Crea un usuario de prueba para los tests."""
    return Usuario(
        nombre="Usuario Test",
        email="test@example.com"
    )

@pytest.fixture
def cliente_api_mock():
    """Mock del cliente de API para tests sin llamadas reales."""
    mock = Mock(spec=ClienteAPI)
    mock.get.return_value = {"status": "success", "data": []}
    return mock

def test_procesar_usuario(usuario_prueba):
    resultado = procesar_usuario(usuario_prueba)
    assert resultado["procesado"] == True
    assert resultado["email"] == "test@example.com"

# Mocking — testea código con dependencias externas
def test_consultar_api_con_mock(cliente_api_mock):
    """Testea sin hacer llamadas reales a la API."""
    servicio = ServicioUsuarios(cliente_api_mock)
    usuarios = servicio.obtener_todos()
    
    cliente_api_mock.get.assert_called_once_with("/usuarios")
    assert isinstance(usuarios, list)

# Testing de excepciones
def test_email_invalido_lanza_error():
    with pytest.raises(ValueError, match="Email inválido"):
        Usuario(nombre="Test", email="no-es-un-email")

# Coverage — mide qué porcentaje de tu código tienen tests
# pytest --cov=src --cov-report=html
# Meta: 80%+ en código de producción
```

---

## Capítulo 4.5: Concurrencia y Paralelismo Moderno

```python
import asyncio
import aiohttp
import concurrent.futures
from typing import Coroutine

# ASYNCIO — para I/O concurrente (APIs, bases de datos, archivos)
# La regla: usa async/await cuando esperas operaciones externas

async def obtener_usuario(session: aiohttp.ClientSession, user_id: int) -> dict:
    """Obtiene un usuario de forma asíncrona."""
    async with session.get(f"https://api.ejemplo.com/usuarios/{user_id}") as response:
        return await response.json()

async def obtener_muchos_usuarios(ids: list[int]) -> list[dict]:
    """Obtiene múltiples usuarios concurrentemente."""
    async with aiohttp.ClientSession() as session:
        # Lanza todas las peticiones concurrentemente
        tareas = [obtener_usuario(session, id) for id in ids]
        resultados = await asyncio.gather(*tareas, return_exceptions=True)
        
        # Filtra errores
        return [r for r in resultados if not isinstance(r, Exception)]

# Ejecutar código async desde código sync
usuarios = asyncio.run(obtener_muchos_usuarios([1, 2, 3, 4, 5]))
# Obtiene 5 usuarios en el tiempo de 1 petición secuencial

# ThreadPoolExecutor — para código bloqueante en paralelo
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

def consultar_ip(ip: str) -> dict:
    """Consulta información de una IP (operación bloqueante)."""
    response = requests.get(f"https://ipapi.co/{ip}/json/", timeout=5)
    return {"ip": ip, "data": response.json()}

ips = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "9.9.9.9"]

with ThreadPoolExecutor(max_workers=4) as executor:
    futuros = {executor.submit(consultar_ip, ip): ip for ip in ips}
    
    for futuro in as_completed(futuros):
        ip = futuros[futuro]
        try:
            resultado = futuro.result()
            print(f"{ip}: {resultado['data'].get('country_name')}")
        except Exception as e:
            print(f"{ip}: Error — {e}")

# ProcessPoolExecutor — para CPU-bound tasks (Python 3.14 free-threading)
from concurrent.futures import ProcessPoolExecutor

def analizar_archivo_log(ruta: str) -> dict:
    """Análisis intensivo de un archivo de log."""
    # ... procesamiento CPU-intensivo
    return resultados

archivos = list(Path("/var/log").glob("*.log"))

with ProcessPoolExecutor() as executor:
    resultados = list(executor.map(analizar_archivo_log, archivos))
```

---

# PARTE V: Python + IA — El Diferenciador de 2026

![AI Python](https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80)

## Capítulo 5.1: El Ecosistema de IA en Python

En 2026, Python es literalmente el lenguaje nativo de la inteligencia artificial. Entender su ecosistema es entender el futuro del software.

```
EL MAPA DEL ECOSISTEMA AI/PYTHON 2026:

FUNDAMENTOS MATEMÁTICOS:
├── NumPy     — operaciones de arrays y álgebra lineal
├── SciPy     — computación científica
└── SymPy     — matemáticas simbólicas

DATA MANIPULATION:
├── Pandas    — el Excel programable
├── Polars    — pandas en Rust, 10-100x más rápido para datasets grandes
└── DuckDB    — SQL analítico en Python, sin servidor

VISUALIZACIÓN:
├── Matplotlib — el estándar, máximo control
├── Seaborn   — estadístico, sobre matplotlib
├── Plotly    — interactivo, web-ready
└── Altair    — declarativo, muy elegante

MACHINE LEARNING:
├── scikit-learn — ML clásico, referencia universal
├── XGBoost/LightGBM/CatBoost — gradient boosting (Kaggle kings)
└── PyCaret   — AutoML accesible

DEEP LEARNING:
├── PyTorch   — el estándar de investigación 2026
├── TensorFlow/Keras — Google, producción enterprise
└── JAX       — diferenciación automática, investigación avanzada

LLMs E IA GENERATIVA:
├── anthropic  — SDK oficial de Claude
├── openai    — SDK de GPT
├── LangChain — orquestación de LLMs
├── LlamaIndex — RAG (Retrieval Augmented Generation)
├── instructor — structured output con LLMs
└── PydanticAI — agentes con validación

HERRAMIENTAS:
├── Jupyter   — notebooks interactivos
├── DVC       — versionado de datos y modelos
└── MLflow    — tracking de experimentos
```

---

## Capítulo 5.2: APIs de LLMs desde Python — Claude, GPT, Gemini

```python
import os
import anthropic
from anthropic import Anthropic

# ========================================
# CLAUDE (ANTHROPIC)
# ========================================
client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

# Llamada básica
def preguntar_claude(pregunta: str, sistema: str = None) -> str:
    """Consulta a Claude con manejo de errores."""
    kwargs = {
        "model": "claude-sonnet-4-6",
        "max_tokens": 1024,
        "messages": [{"role": "user", "content": pregunta}]
    }
    if sistema:
        kwargs["system"] = sistema
    
    mensaje = client.messages.create(**kwargs)
    return mensaje.content[0].text

# Streaming — para respuestas largas en tiempo real
def claude_stream(prompt: str):
    """Stream de respuesta de Claude token por token."""
    with client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}]
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)
        print()  # Nueva línea al final

# Prompt caching — 90% descuento en tokens de system prompt
def analizar_con_contexto_grande(documento: str, pregunta: str) -> str:
    """Analiza un documento con prompt caching activado."""
    return client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system=[{
            "type": "text",
            "text": f"Eres un analizador de documentos. Documento:\n\n{documento}",
            "cache_control": {"type": "ephemeral"}  # Cachear el doc grande
        }],
        messages=[{"role": "user", "content": pregunta}]
    ).content[0].text

# Manejo de conversaciones multi-turno
class ConversacionClaude:
    """Mantiene el historial de una conversación con Claude."""
    
    def __init__(self, sistema: str = ""):
        self.client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
        self.historial = []
        self.sistema = sistema
    
    def decir(self, mensaje: str) -> str:
        """Envía un mensaje y obtiene respuesta."""
        self.historial.append({"role": "user", "content": mensaje})
        
        respuesta = self.client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=2048,
            system=self.sistema,
            messages=self.historial
        )
        
        texto = respuesta.content[0].text
        self.historial.append({"role": "assistant", "content": texto})
        return texto

# Outputs estructurados con instructor
import instructor
from pydantic import BaseModel, Field

claude_instructor = instructor.from_anthropic(
    Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
)

class AnalisisSentimiento(BaseModel):
    sentimiento: str = Field(description="positivo, negativo, o neutro")
    confianza: float = Field(ge=0, le=1, description="0-1")
    palabras_clave: list[str]
    resumen: str

def analizar_sentimiento(texto: str) -> AnalisisSentimiento:
    return claude_instructor.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=500,
        response_model=AnalisisSentimiento,
        messages=[{
            "role": "user",
            "content": f"Analiza el sentimiento de: '{texto}'"
        }]
    )

resultado = analizar_sentimiento("Me encanta Python, es increíblemente expresivo")
print(f"Sentimiento: {resultado.sentimiento} ({resultado.confianza:.0%})")
```

---

## Capítulo 5.3: LangChain y Agentes de IA

```python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.tools import DuckDuckGoSearchRun
from langchain.agents import create_react_agent, AgentExecutor

# LCEL — LangChain Expression Language (la forma moderna)
modelo = ChatAnthropic(
    model="claude-sonnet-4-6",
    api_key=os.environ["ANTHROPIC_API_KEY"]
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "Eres un experto en ciberseguridad. Responde en español."),
    ("user", "{pregunta}")
])

# Cadena simple con pipe |
cadena = prompt | modelo | StrOutputParser()
respuesta = cadena.invoke({"pregunta": "¿Qué es un SQL injection?"})

# RAG — Retrieval Augmented Generation
from langchain_community.vectorstores import Chroma
from langchain_anthropic import AnthropicEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader

def crear_rag_desde_pdf(ruta_pdf: str):
    """Crea un sistema RAG que responde preguntas sobre un PDF."""
    
    # 1. Carga el documento
    loader = PyPDFLoader(ruta_pdf)
    documentos = loader.load()
    
    # 2. Divide en chunks
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    chunks = splitter.split_documents(documentos)
    
    # 3. Crea embeddings y vector store
    embeddings = AnthropicEmbeddings()
    vectorstore = Chroma.from_documents(chunks, embeddings)
    
    # 4. Crea el retriever
    retriever = vectorstore.as_retriever(search_kwargs={"k": 4})
    
    # 5. Cadena RAG
    template = """Responde basándote SOLO en el siguiente contexto:
    
{contexto}

Pregunta: {pregunta}
Si no puedes responder con el contexto dado, dilo explícitamente."""
    
    prompt = ChatPromptTemplate.from_template(template)
    
    from langchain_core.runnables import RunnablePassthrough
    
    cadena_rag = (
        {"contexto": retriever, "pregunta": RunnablePassthrough()}
        | prompt
        | modelo
        | StrOutputParser()
    )
    
    return cadena_rag

# Agente con herramientas
def crear_agente_investigacion():
    """Agente que puede buscar en internet para responder preguntas."""
    
    herramientas = [DuckDuckGoSearchRun()]
    
    prompt_agente = ChatPromptTemplate.from_messages([
        ("system", """Eres un investigador experto en ciberseguridad.
Tienes acceso a búsqueda web para encontrar información actualizada.
Responde siempre en español con fuentes verificadas."""),
        ("user", "{input}"),
        ("placeholder", "{agent_scratchpad}")
    ])
    
    agente = create_react_agent(modelo, herramientas, prompt_agente)
    executor = AgentExecutor(agente=agente, herramientas=herramientas, verbose=True)
    
    return executor

agente = crear_agente_investigacion()
resultado = agente.invoke({
    "input": "¿Cuáles son las vulnerabilidades más críticas de 2026 según OWASP?"
})
```

---

## Capítulo 5.4: Data Science Esencial

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# NUMPY — operaciones vectorizadas (mucho más rápido que loops)
datos = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Estadísticas básicas
print(f"Media: {datos.mean():.2f}")
print(f"Mediana: {np.median(datos):.2f}")
print(f"Desviación estándar: {datos.std():.2f}")

# Operaciones vectorizadas — miles de veces más rápido que loops
x = np.random.randn(1_000_000)  # 1 millón de datos
y = x ** 2 + 2 * x + 1         # Aplica a todo el array de una vez

# PANDAS — análisis de datos estructurados
df = pd.read_csv("ventas_2026.csv", parse_dates=["fecha"])

# Exploración inicial — siempre empieza con esto
print(df.head())           # Primeras 5 filas
print(df.info())           # Tipos y valores nulos
print(df.describe())       # Estadísticas por columna
print(df.isnull().sum())   # Cantidad de valores nulos por columna

# Limpieza de datos
df_limpio = (
    df
    .dropna(subset=["email"])          # Elimina filas sin email
    .drop_duplicates(subset=["id"])    # Elimina duplicados
    .assign(
        email=lambda x: x["email"].str.lower(),           # Normaliza email
        fecha=lambda x: pd.to_datetime(x["fecha"]),        # Convierte fecha
        monto=lambda x: pd.to_numeric(x["monto"], errors="coerce")  # Limpia montos
    )
    .query("monto > 0")               # Filtra montos positivos
)

# Análisis por grupo
ventas_por_region = (
    df_limpio
    .groupby("region")
    .agg(
        total_ventas=("monto", "sum"),
        ticket_promedio=("monto", "mean"),
        num_transacciones=("id", "count")
    )
    .sort_values("total_ventas", ascending=False)
    .reset_index()
)

# Visualización profesional
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Barras de ventas por región
axes[0].bar(ventas_por_region["region"], ventas_por_region["total_ventas"])
axes[0].set_title("Ventas por Región")
axes[0].set_xlabel("Región")
axes[0].set_ylabel("Ventas totales ($)")
plt.setp(axes[0].xaxis.get_majorticklabels(), rotation=45)

# Distribución del ticket promedio
axes[1].hist(df_limpio["monto"], bins=50, edgecolor="black")
axes[1].set_title("Distribución del Monto de Venta")
axes[1].set_xlabel("Monto ($)")
axes[1].set_ylabel("Frecuencia")

plt.tight_layout()
plt.savefig("analisis_ventas.png", dpi=150, bbox_inches="tight")
```

---

## Capítulo 5.5: Machine Learning con scikit-learn

```python
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.cluster import KMeans
from sklearn.metrics import classification_report, confusion_matrix
import pandas as pd
import numpy as np

# Pipeline profesional de ML
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

# Preparación de datos
df = pd.read_csv("clientes.csv")

# Features y target
X = df.drop("churn", axis=1)
y = df["churn"]

# Split estratificado
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Pipeline que previene data leakage
numericas = ["edad", "ingreso", "meses_cliente", "num_productos"]
categoricas = ["region", "tipo_cuenta", "canal_adquisicion"]

preprocesador = ColumnTransformer([
    ("num", StandardScaler(), numericas),
    ("cat", OneHotEncoder(drop="first", handle_unknown="ignore"), categoricas)
])

pipeline = Pipeline([
    ("preprocesador", preprocesador),
    ("modelo", RandomForestClassifier(n_estimators=100, random_state=42))
])

# Entrenamiento
pipeline.fit(X_train, y_train)

# Evaluación
y_pred = pipeline.predict(X_test)
print(classification_report(y_test, y_pred, target_names=["No Churn", "Churn"]))

# Cross-validation — evaluación más robusta
scores = cross_val_score(pipeline, X, y, cv=5, scoring="roc_auc")
print(f"ROC-AUC: {scores.mean():.3f} ± {scores.std():.3f}")

# K-Means Clustering — segmentación de clientes
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans

# Features para segmentación RFM
rfm = df.groupby("cliente_id").agg(
    recencia=("fecha_compra", lambda x: (pd.Timestamp.now() - x.max()).days),
    frecuencia=("id_pedido", "count"),
    monto=("total", "sum")
).reset_index()

scaler = StandardScaler()
rfm_scaled = scaler.fit_transform(rfm[["recencia", "frecuencia", "monto"]])

# Método del codo para elegir K
inercias = []
for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(rfm_scaled)
    inercias.append(kmeans.inertia_)

# Entrenar con K óptimo
kmeans_final = KMeans(n_clusters=4, random_state=42, n_init=10)
rfm["segmento"] = kmeans_final.fit_predict(rfm_scaled)

# Interpretar segmentos
descripcion_segmentos = rfm.groupby("segmento").agg({
    "recencia": "mean",
    "frecuencia": "mean",
    "monto": "mean"
}).round(2)
print(descripcion_segmentos)
```

---

# PARTE VI: Python para Ciberseguridad y OSINT

![Cybersecurity Python](https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80)

## Capítulo 6.1: Python para Seguridad — Mentalidad y Ética

> **Principio fundamental:** Las mismas herramientas que un atacante usa para vulnerar sistemas son las que un defensor usa para protegerlos. La diferencia es la autorización y la intención.

Todo el código de seguridad en este capítulo es para:
* ✅ Pruebas en tus propios sistemas
* ✅ Entornos de laboratorio autorizados (TryHackMe, HackTheBox, tu homelab)
* ✅ Contratos de pentesting con alcance definido y firmado
* ❌ Nunca en sistemas sin autorización explícita

```python
# Conceptos fundamentales de seguridad en Python

# 1. Manejo seguro de secretos
import os
from functools import lru_cache

# ❌ NUNCA hardcodear credenciales:
api_key = "sk-proj-abc123..."  # ESTO DESTRUYE TU CARRERA

# ✅ Siempre de variables de entorno:
api_key = os.environ["OPENAI_API_KEY"]  # KeyError si no existe = bueno
api_key = os.getenv("OPENAI_API_KEY", "")  # String vacío si no existe = cuidado

# Para desarrollo local, usa python-dotenv:
from dotenv import load_dotenv
load_dotenv()  # Carga el .env automáticamente

# 2. Hashing de contraseñas — nunca en texto plano
import hashlib
import secrets
import bcrypt  # pip install bcrypt

def hash_password(password: str) -> str:
    """Hash seguro de contraseña con bcrypt."""
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode(), salt).decode()

def verificar_password(password: str, hash_guardado: str) -> bool:
    """Verifica una contraseña contra su hash."""
    return bcrypt.checkpw(password.encode(), hash_guardado.encode())

# 3. Generación de tokens seguros
token_sesion = secrets.token_hex(32)       # 64 caracteres hex
token_url = secrets.token_urlsafe(32)       # URL-safe base64
numero_random = secrets.randbelow(1_000_000)  # Más seguro que random

# 4. Sanitización de inputs
import re
import html

def sanitizar_input(texto: str, max_longitud: int = 1000) -> str:
    """Sanitiza input del usuario para prevenir inyecciones."""
    # Limitar longitud
    texto = texto[:max_longitud]
    
    # Escapar HTML
    texto = html.escape(texto)
    
    # Remover caracteres de control
    texto = re.sub(r'[\x00-\x1f\x7f]', '', texto)
    
    return texto.strip()
```

---

## Capítulo 6.2: Networking y Análisis de Paquetes

```python
import socket
import nmap          # pip install python-nmap
import scapy.all as scapy  # pip install scapy
import ipaddress

# Escaneo de puertos con nmap (requiere nmap instalado en el sistema)
def escanear_objetivo(objetivo: str, puertos: str = "1-1000") -> dict:
    """
    Escanea puertos de un objetivo.
    SOLO para sistemas autorizados.
    """
    nm = nmap.PortScanner()
    nm.scan(objetivo, puertos, arguments="-sS -T4")
    
    resultados = {}
    for host in nm.all_hosts():
        resultados[host] = {
            "estado": nm[host].state(),
            "puertos_abiertos": []
        }
        for protocolo in nm[host].all_protocols():
            for puerto in nm[host][protocolo].keys():
                if nm[host][protocolo][puerto]["state"] == "open":
                    resultados[host]["puertos_abiertos"].append({
                        "puerto": puerto,
                        "protocolo": protocolo,
                        "servicio": nm[host][protocolo][puerto]["name"]
                    })
    
    return resultados

# Análisis de tráfico con Scapy (requiere privilegios root/admin)
def capturar_dns_queries(interfaz: str = "eth0", duracion: int = 60) -> list:
    """
    Captura y analiza queries DNS.
    Útil para detectar exfiltración de datos por DNS.
    """
    queries = []
    
    def analizar_paquete(paquete):
        if paquete.haslayer(scapy.DNS) and paquete.getlayer(scapy.DNS).qr == 0:
            query = {
                "timestamp": float(paquete.time),
                "origen": paquete[scapy.IP].src if paquete.haslayer(scapy.IP) else "N/A",
                "dominio": paquete[scapy.DNS].qd.qname.decode() if paquete[scapy.DNS].qd else "N/A"
            }
            queries.append(query)
    
    scapy.sniff(
        iface=interfaz,
        filter="udp port 53",
        prn=analizar_paquete,
        timeout=duracion
    )
    
    return queries

# Análisis de PCAP existente (sin captura en vivo)
def analizar_pcap(ruta_pcap: str) -> dict:
    """Analiza un archivo PCAP y extrae estadísticas."""
    paquetes = scapy.rdpcap(ruta_pcap)
    
    estadisticas = {
        "total_paquetes": len(paquetes),
        "ips_origen": set(),
        "ips_destino": set(),
        "protocolos": {},
    }
    
    for paquete in paquetes:
        if paquete.haslayer(scapy.IP):
            estadisticas["ips_origen"].add(paquete[scapy.IP].src)
            estadisticas["ips_destino"].add(paquete[scapy.IP].dst)
        
        protocolo = paquete.lastlayer().name
        estadisticas["protocolos"][protocolo] = \
            estadisticas["protocolos"].get(protocolo, 0) + 1
    
    estadisticas["ips_origen"] = list(estadisticas["ips_origen"])
    estadisticas["ips_destino"] = list(estadisticas["ips_destino"])
    
    return estadisticas
```

---

## Capítulo 6.3: OSINT Automatizado con Python

```python
import requests
import json
import time
from typing import Optional

# Framework OSINT modular con Python

class InvestigadorOSINT:
    """
    Framework de investigación OSINT.
    Solo para investigación autorizada, periodismo, y defensa.
    """
    
    def __init__(self, api_keys: dict):
        self.api_keys = api_keys
        self.session = requests.Session()
        self.session.headers["User-Agent"] = "OSINT-Researcher/1.0"
    
    def consultar_shodan(self, ip: str) -> dict:
        """Obtiene información de Shodan sobre una IP."""
        url = f"https://api.shodan.io/shodan/host/{ip}"
        params = {"key": self.api_keys["shodan"]}
        
        response = self.session.get(url, params=params, timeout=10)
        if response.status_code == 404:
            return {"error": "IP no encontrada en Shodan"}
        response.raise_for_status()
        return response.json()
    
    def consultar_virustotal(self, indicador: str, tipo: str = "ip") -> dict:
        """Consulta VirusTotal para IPs, dominios, o hashes."""
        endpoints = {
            "ip": f"https://www.virustotal.com/api/v3/ip_addresses/{indicador}",
            "domain": f"https://www.virustotal.com/api/v3/domains/{indicador}",
            "hash": f"https://www.virustotal.com/api/v3/files/{indicador}"
        }
        
        headers = {"x-apikey": self.api_keys["virustotal"]}
        response = self.session.get(endpoints[tipo], headers=headers, timeout=10)
        response.raise_for_status()
        
        datos = response.json()
        stats = datos.get("data", {}).get("attributes", {}).get("last_analysis_stats", {})
        
        return {
            "malicioso": stats.get("malicious", 0),
            "sospechoso": stats.get("suspicious", 0),
            "inofensivo": stats.get("harmless", 0),
            "reputacion": datos.get("data", {}).get("attributes", {}).get("reputation", 0)
        }
    
    def obtener_historial_dns(self, dominio: str) -> dict:
        """Obtiene historial DNS de SecurityTrails."""
        headers = {"APIKEY": self.api_keys["securitytrails"]}
        url = f"https://api.securitytrails.com/v1/history/{dominio}/dns/a"
        
        response = self.session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        return response.json()
    
    def enriquecer_ip(self, ip: str) -> dict:
        """Enriquecimiento completo de una IP desde múltiples fuentes."""
        resultado = {"ip": ip, "fuentes": {}}
        
        # Shodan
        try:
            resultado["fuentes"]["shodan"] = self.consultar_shodan(ip)
            time.sleep(1)  # Rate limiting
        except Exception as e:
            resultado["fuentes"]["shodan"] = {"error": str(e)}
        
        # VirusTotal
        try:
            resultado["fuentes"]["virustotal"] = self.consultar_virustotal(ip, "ip")
            time.sleep(0.5)
        except Exception as e:
            resultado["fuentes"]["virustotal"] = {"error": str(e)}
        
        # Geolocalización (API pública)
        try:
            geo = self.session.get(
                f"https://ipapi.co/{ip}/json/",
                timeout=5
            ).json()
            resultado["fuentes"]["geo"] = {
                "pais": geo.get("country_name"),
                "ciudad": geo.get("city"),
                "isp": geo.get("org"),
                "asn": geo.get("asn")
            }
        except Exception as e:
            resultado["fuentes"]["geo"] = {"error": str(e)}
        
        return resultado

# Uso
investigador = InvestigadorOSINT({
    "shodan": os.environ["SHODAN_API_KEY"],
    "virustotal": os.environ["VIRUSTOTAL_API_KEY"],
    "securitytrails": os.environ["SECURITYTRAILS_API_KEY"]
})

perfil_ip = investigador.enriquecer_ip("8.8.8.8")
print(json.dumps(perfil_ip, indent=2))
```

---

## Capítulo 6.4: Python para Blue Team — Detección y Análisis

```python
import re
import json
from pathlib import Path
from datetime import datetime
from collections import Counter, defaultdict

# Analizador de logs con detección de anomalías

class AnalizadorLogs:
    """
    Analiza logs del sistema para detectar actividad sospechosa.
    """
    
    # Patrones de amenazas comunes
    PATRONES = {
        "brute_force": re.compile(r"Failed password for .+ from (\d+\.\d+\.\d+\.\d+)"),
        "sql_injection": re.compile(r"(UNION|SELECT|DROP|INSERT|DELETE|UPDATE|WHERE).*(\bOR\b|\bAND\b)", re.IGNORECASE),
        "xss": re.compile(r"<script|javascript:|onerror=|onload=", re.IGNORECASE),
        "path_traversal": re.compile(r"\.\./|\.\.\\|%2e%2e", re.IGNORECASE),
        "command_injection": re.compile(r"[;&|`$]\s*(ls|cat|whoami|id|uname|wget|curl|bash|sh)\b", re.IGNORECASE)
    }
    
    def __init__(self):
        self.alertas = []
        self.estadisticas = defaultdict(Counter)
    
    def analizar_linea(self, linea: str, numero: int = 0) -> list:
        """Analiza una línea de log en busca de amenazas."""
        alertas_encontradas = []
        
        for tipo_amenaza, patron in self.PATRONES.items():
            if match := patron.search(linea):
                alerta = {
                    "tipo": tipo_amenaza,
                    "linea_numero": numero,
                    "linea": linea.strip(),
                    "match": match.group(0),
                    "timestamp": datetime.now().isoformat(),
                    "severidad": self._calcular_severidad(tipo_amenaza)
                }
                alertas_encontradas.append(alerta)
                self.estadisticas["tipo"][tipo_amenaza] += 1
        
        return alertas_encontradas
    
    def analizar_archivo(self, ruta: str) -> dict:
        """Analiza un archivo de log completo."""
        ruta_path = Path(ruta)
        
        if not ruta_path.exists():
            raise FileNotFoundError(f"Log no encontrado: {ruta}")
        
        todas_alertas = []
        
        with ruta_path.open(encoding="utf-8", errors="replace") as f:
            for numero, linea in enumerate(f, 1):
                alertas = self.analizar_linea(linea, numero)
                todas_alertas.extend(alertas)
        
        return {
            "archivo": str(ruta_path),
            "total_lineas": numero,
            "total_alertas": len(todas_alertas),
            "alertas_por_tipo": dict(self.estadisticas["tipo"]),
            "alertas_criticas": [a for a in todas_alertas if a["severidad"] == "ALTA"],
            "todas_alertas": todas_alertas
        }
    
    def _calcular_severidad(self, tipo: str) -> str:
        severidades = {
            "command_injection": "ALTA",
            "sql_injection": "ALTA",
            "brute_force": "MEDIA",
            "path_traversal": "MEDIA",
            "xss": "MEDIA"
        }
        return severidades.get(tipo, "BAJA")
    
    def detectar_brute_force(self, ruta_auth_log: str, umbral: int = 5) -> list:
        """Detecta ataques de fuerza bruta en auth.log."""
        intentos_por_ip = Counter()
        patron_fallo = re.compile(r"Failed password.*from (\d+\.\d+\.\d+\.\d+)")
        
        with open(ruta_auth_log, encoding="utf-8", errors="replace") as f:
            for linea in f:
                if match := patron_fallo.search(linea):
                    intentos_por_ip[match.group(1)] += 1
        
        atacantes = [
            {"ip": ip, "intentos": count, "severidad": "ALTA" if count > 20 else "MEDIA"}
            for ip, count in intentos_por_ip.items()
            if count >= umbral
        ]
        
        return sorted(atacantes, key=lambda x: x["intentos"], reverse=True)

# Exportar alertas a formato SIEM
def exportar_siem(alertas: list, formato: str = "json") -> str:
    """Exporta alertas en formato compatible con SIEMs."""
    if formato == "json":
        return json.dumps(alertas, indent=2, ensure_ascii=False)
    elif formato == "sigma":
        # Formato Sigma para reglas de detección
        return generar_regla_sigma(alertas)

# Uso
analizador = AnalizadorLogs()
resultados = analizador.analizar_archivo("/var/log/apache2/access.log")
atacantes = analizador.detectar_brute_force("/var/log/auth.log", umbral=10)

print(f"Alertas encontradas: {resultados['total_alertas']}")
print(f"IPs atacantes detectadas: {len(atacantes)}")
for atacante in atacantes[:5]:
    print(f"  {atacante['ip']}: {atacante['intentos']} intentos")
```

---

# PARTE VII: Python en Producción

## Capítulo 7.1: Entornos Virtuales y Gestión de Dependencias

```bash
# uv — el nuevo estándar para gestión de proyectos Python 2026
# 100x más rápido que pip, reemplaza pip + venv + pip-tools

# Instalar uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Crear nuevo proyecto
uv init mi-api
cd mi-api

# Añadir dependencias
uv add fastapi uvicorn anthropic pydantic
uv add --dev pytest ruff mypy  # Solo para desarrollo

# Crear entorno virtual y ejecutar
uv run python main.py
uv run pytest

# Sincronizar dependencias del equipo
uv sync  # Instala exactamente lo que está en uv.lock

# pyproject.toml generado por uv:
# [project]
# name = "mi-api"
# version = "0.1.0"
# requires-python = ">=3.14"
# dependencies = [
#     "fastapi>=0.115.0",
#     "anthropic>=0.40.0",
# ]
```

---

## Capítulo 7.2: Docker + Python

```dockerfile
# Dockerfile optimizado para Python 2026
# Multi-stage build — imagen final sin dependencias de compilación

# Etapa 1: Build
FROM python:3.14-slim AS builder

# Instala uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

WORKDIR /app
COPY pyproject.toml uv.lock ./

# Instala dependencias (sin el proyecto)
RUN uv sync --frozen --no-install-project

# Etapa 2: Runtime
FROM python:3.14-slim AS runtime

# Usuario no-root — principio de mínimo privilegio
RUN useradd --system --no-create-home appuser

WORKDIR /app

# Copia el entorno virtual del builder
COPY --from=builder /app/.venv .venv

# Copia el código de la aplicación
COPY src/ src/

# Cambia al usuario no-root
USER appuser

# Variables de entorno
ENV PYTHONPATH=/app/src
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD python -c "import requests; requests.get('http://localhost:8000/health')"

CMD ["/app/.venv/bin/uvicorn", "mi_app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# docker-compose.yml para desarrollo
version: '3.9'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mi_app
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}  # Del .env local
    volumes:
      - ./src:/app/src  # Hot reload en desarrollo
    depends_on:
      db:
        condition: service_healthy
  
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mi_app
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

## Capítulo 7.3: FastAPI — APIs Modernas en Python

```python
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Annotated
import os

app = FastAPI(
    title="Mi API",
    description="API construida con FastAPI y Python 3.14",
    version="1.0.0"
)

# CORS — configuración segura
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://mi-frontend.com"],  # No usar ["*"] en producción
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Authorization", "Content-Type"],
)

# Modelos Pydantic — validación automática
class CrearUsuario(BaseModel):
    nombre: str = Field(min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(min_length=8)

class UsuarioResponse(BaseModel):
    id: int
    nombre: str
    email: str
    activo: bool

    model_config = {"from_attributes": True}  # Para SQLAlchemy

# Dependency injection — el patrón central de FastAPI
def obtener_db():
    """Inyecta una sesión de base de datos."""
    with Session(engine) as session:
        yield session

def usuario_actual(token: str = Depends(oauth2_scheme)):
    """Verifica el token y retorna el usuario autenticado."""
    payload = verificar_jwt(token)
    usuario = obtener_usuario_por_id(payload["sub"])
    if not usuario:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido"
        )
    return usuario

# Endpoints
@app.post("/usuarios", response_model=UsuarioResponse, status_code=201)
async def crear_usuario(
    datos: CrearUsuario,
    db: Annotated[Session, Depends(obtener_db)]
):
    """Crea un nuevo usuario con validación automática."""
    # Verificar email único
    if db.query(Usuario).filter(Usuario.email == datos.email).first():
        raise HTTPException(
            status_code=409,
            detail="Email ya registrado"
        )
    
    usuario = Usuario(
        nombre=datos.nombre,
        email=datos.email,
        password_hash=hash_password(datos.password)
    )
    db.add(usuario)
    db.commit()
    db.refresh(usuario)
    
    return usuario

@app.get("/usuarios/yo", response_model=UsuarioResponse)
async def mi_perfil(
    usuario: Annotated[Usuario, Depends(usuario_actual)]
):
    """Retorna el perfil del usuario autenticado."""
    return usuario

@app.get("/health")
async def health_check():
    """Endpoint de salud para Docker/Kubernetes."""
    return {"status": "healthy", "version": "1.0.0"}

# Para ejecutar:
# uvicorn mi_app.main:app --reload --host 0.0.0.0 --port 8000
```

---

## Capítulo 7.4: El Portafolio que Consigue Empleo

Tu portafolio en Python 2026 debe demostrar tres cosas: que resuelves problemas reales, que escribes código mantenible, y que usas las herramientas del ecosistema moderno.

### Los 5 Proyectos que Abren Puertas

**Proyecto 1 — Para cualquier rol:** CLI Tool de OSINT personal
```python
# Una herramienta CLI que hace algo útil:
# - Enriquece una IP desde múltiples fuentes
# - Genera un reporte en JSON/HTML
# Tecnologías: typer, rich, httpx, pydantic
```

**Proyecto 2 — Para Data Science / ML:**
```python
# Pipeline de ML completo con:
# - EDA automatizado con pandas-profiling
# - Múltiples modelos comparados
# - API FastAPI que sirve predicciones
# - Dashboard con Streamlit o Plotly Dash
```

**Proyecto 3 — Para desarrollo web:**
```python
# API REST con:
# - FastAPI + SQLAlchemy + PostgreSQL
# - JWT authentication
# - Tests con pytest (>80% coverage)
# - Docker + docker-compose
# - CI/CD con GitHub Actions
```

**Proyecto 4 — Para IA / LLMs:**
```python
# Asistente inteligente que:
# - Conecta con la API de Claude o GPT
# - Tiene memoria de conversación
# - Puede analizar documentos (RAG)
# - Tiene interfaz web con Streamlit o Gradio
```

**Proyecto 5 — Para seguridad:**
```python
# Dashboard de seguridad que:
# - Analiza logs de Apache/Nginx
# - Detecta anomalías automáticamente
# - Genera alertas y reportes
# - Visualiza en tiempo real con FastAPI + WebSockets
```

### La Checklist del Proyecto Profesional

```
✅ README.md con:
   - Descripción clara del problema que resuelve
   - Demo GIF o screenshot
   - Instrucciones de instalación (con Docker)
   - Casos de uso concretos

✅ Código con:
   - Type hints en todas las funciones
   - Docstrings descriptivos
   - Tests (pytest)
   - Manejo de errores apropiado
   - .env.example (sin credenciales reales)

✅ DevOps:
   - Dockerfile optimizado
   - GitHub Actions para CI
   - pyproject.toml moderno (con uv)
   - Ruff para linting (no pylint/flake8)

✅ Seguridad:
   - Sin credenciales hardcodeadas (verificar con gitleaks)
   - Dependencias sin vulnerabilidades conocidas (safety check)
   - Input validation con Pydantic
```

---

# 🏁 EPÍLOGO: El Programador Aumentado

Llegaste al final de este libro. Cubrimos desde `print("Hola, mundo")` hasta agentes de IA autónomos, desde variables básicas hasta arquitecturas de microservicios, desde loops simples hasta análisis de tráfico de red.

Pero quiero dejarte con algo que ningún libro de programación suele decir:

## Lo que Python en 2026 Realmente Significa

Python no es solo un lenguaje. Es el idioma común entre los humanos y la nueva capa de inteligencia que estamos construyendo sobre el mundo. Cuando escribes código Python que integra un LLM, no estás escribiendo un programa — estás **definiendo el comportamiento de un sistema inteligente**.

Con ese poder viene responsabilidad:

* 🔐 **El código inseguro no es solo un bug — es una vulnerabilidad** que alguien puede explotar
* 🤖 **El código de IA mal diseñado no es solo ineficiente** — puede amplificar sesgos y tomar decisiones que afectan vidas reales
* 🌐 **El código sin tests no es solo frágil** — es una deuda cognitiva que eventualmente pagarás

## Los Secretos que Este Libro No Pudo Enseñarte

Hay conocimiento que solo viene con la práctica:

* 🧠 La intuición para saber cuándo un problema requiere un diccionario vs un árbol vs una base de datos
* 🔍 El instinto de seguridad que te hace preguntar "¿qué pasa si alguien envía este input malicioso?"
* 🏗️ La arquitectura que divide el código en módulos que pueden evolucionar independientemente
* 🤝 La colaboración — código que otros pueden entender, modificar, y mejorar

Ese conocimiento no viene de libros. Viene de **construir cosas reales, romperlas, y reconstruirlas mejor**.

## Tu Próximo Paso

Elige uno de los proyectos del Capítulo 7.4. Construye uno completo, con todos los criterios de la checklist. Ponlo en GitHub. Escribe el README.

No esperes a saber más. No esperes a que el proyecto sea perfecto. **El código que funciona imperfectamente hoy vale infinitamente más que el código perfecto que no existe.**

> **"La diferencia entre un programador y alguien que usa IA para programar no es la herramienta. Es la comprensión de por qué el código hace lo que hace, y la capacidad de dirigirlo hacia donde necesitas ir."**

Python te da el lenguaje. La IA te da el copiloto. La comprensión profunda es lo que hace que el viaje valga la pena.

Ahora ve a construir algo. 🐍🚀

---

## 📚 Recursos del Libro

### Documentación Oficial
* 🌐 [**Python 3.14 Docs**](https://docs.python.org/3.14/) — La fuente primaria
* 📖 [**PEP Index**](https://peps.python.org/) — Todas las propuestas de mejora de Python
* 🎓 [**Real Python**](https://realpython.com/) — Tutoriales de alta calidad

### Práctica
* 🎮 [**Exercism.io — Python Track**](https://exercism.org/tracks/python) — Ejercicios con mentores reales
* 🎮 [**LeetCode**](https://leetcode.com/) — Para entrevistas técnicas
* 📊 [**Kaggle**](https://www.kaggle.com/) — Data Science con datasets reales

### Comunidad
* 💬 [**r/Python**](https://www.reddit.com/r/Python/) — Novedades y discusión
* 💬 [**Python Discord**](https://discord.gg/python) — Ayuda en tiempo real
* 🎧 [**Talk Python to Me**](https://talkpython.fm/) — El podcast de Python

### Libros Complementarios
* 📚 [**Fluent Python (2nd Ed) — Luciano Ramalho**](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/) — El libro de Python avanzado más importante
* 📚 [**Python Cookbook — David Beazley**](https://www.oreilly.com/library/view/python-cookbook-3rd/9781449357337/) — Recetas para problemas comunes
* 📚 [**Architecture Patterns with Python**](https://www.cosmicpython.com/) — Gratis online, patrones de producción

---

*Escrito por **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*Python 3.14 · Junio 2026 · Este libro es un documento vivo que se actualiza con el lenguaje.*

</div>

---
---

<div class="lang-en">

# 🐍 Augmented Python: The Book the Other 9 Million Didn't Write

**By Jafet Brito** · Security Researcher · *Published June 11, 2026*

---

> *"Python isn't a programming language. It's the language humanity uses to talk to machines in 2026."*

---

## ⚠️ Why This Book Is Different

There are 9 million Python tutorials on the internet. This is not one more.

**What makes this book different:**

* 🤖 **AI as permanent copilot** — every chapter includes how to use Claude, Gemini, or GitHub Copilot to accelerate that specific topic
* 🔐 **Zero Trust mindset from day one** — security is not a chapter at the end, it's a philosophy running through all the code
* 🎯 **Real projects, not toy exercises** — each part ends with something you can put in your portfolio
* 📅 **Python 3.14 + 2026 updates** — t-strings, free-threading, JIT compiler, and what actually matters
* 🌐 **The bridge to LLMs** — Python as the gateway to the generative AI ecosystem
* ⚗️ **The "secrets" basic tutorials never mention** — production patterns, anti-patterns, and decisions that separate amateur from professional code

---

## 🗺️ Book Map

```
📖 AUGMENTED PYTHON — COMPLETE STRUCTURE

PART 0: Before the Code — The Mindset
  └─ Ch 0.1: Why Python won
  └─ Ch 0.2: Setting up your environment like a professional
  └─ Ch 0.3: Your first AI copilot

PART I: The Fundamentals (No Shortcuts)
PART II: Data Structures — The Building Blocks of Reality
PART III: Intermediate Python — Where Everything Changes
PART IV: Python for the Real World
PART V: Python + AI — The 2026 Differentiator
PART VI: Python for Cybersecurity and OSINT
PART VII: Python in Production
```

---

## Ch 0.1: Why Python Won

Python didn't win because it's the "best" language — it's not the fastest, not the most statically typed, not the most memory efficient. Python won because of the **philosophy of readability**.

Python has a document called **PEP 20 — The Zen of Python**. Type `import this` in any Python interpreter to see it. The most important principles:

> *"Beautiful is better than ugly."*
> *"Explicit is better than implicit."*
> *"Readability counts."*

**Python 3.14 — The Performance Leap (October 7, 2025):**

* 🚀 **Free-Threading (PEP 779)** — GIL removal, true parallelism in threads
* ⚡ **Experimental JIT Compiler** — performance acceleration for CPU-intensive loops
* 🧵 **T-strings (PEP 750)** — f-string evolution with customizable processing
* 📝 **Deferred annotations** — improved startup time and runtime performance
* 🎨 **Colored REPL with multi-line** — the interactive experience Python always deserved
* 🆔 **UUID v7** — native in the `uuid` module, time-ordered UUIDs

---

## Ch 0.2: Set Up Your Environment Like a Professional

```bash
# Install pyenv (manages multiple Python versions)
curl https://pyenv.run | bash

# Install Python 3.14
pyenv install 3.14.0
pyenv global 3.14.0

# Install uv — the modern package manager (100x faster than pip)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create your first professional project
uv init my-project
cd my-project
uv add requests anthropic pydantic
uv add --dev pytest ruff mypy
```

> 🔐 **Zero Trust from day 1:** The `.env` file contains your credentials and API keys. **Never** commit it to git. Always create a `.gitignore` that excludes it before writing your first line of code.

---

## Ch 0.3: Your First AI Copilot

**Mode 1 — The Tutor (for understanding concepts):**
```
"I'm a Python beginner. Explain what a function is
like a chef making reusable recipes. Then give me
an example of a function that calculates price with tax,
and explain each line. Finally, ask me 3 questions
to verify I understood."
```

**Mode 2 — The Pair Programmer (for writing code):**
```
"Write a Python function that:
- Receives a list of emails
- Validates each has correct format
- Returns a tuple: (valid_emails, invalid_emails)
- Includes modern Python 3.14 type hints
- Includes docstring with examples
- Is testable with pytest"
```

**Mode 3 — The Debugger (for fixing errors):**
```
"This Python code gives me the following error.
Instead of giving me the solution directly,
explain WHAT is causing the error and WHY,
then ask me questions to guide me to find the solution myself."
```

---

## PART I: The Fundamentals

### The First Truth: Everything is an Object

```python
# Everything in Python is an object
x = 42
print(type(x))      # <class 'int'>
print(id(x))        # Memory address
print(dir(x))       # All methods an int has

# Python caches integers -5 to 256 as singletons
a = 256
b = 256
print(a is b)    # True — same object in memory

a = 257
b = 257
print(a is b)    # False — different objects

# Always use == for value comparison, is only for identity (like None)

# The float trap that destroys financial applications:
print(0.1 + 0.2)         # 0.30000000000000004 ⚠️
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.2 ✅

# Type hints — professional Python in 2026
def calculate_tax(price: float, rate: float = 0.16) -> float:
    """
    Calculates price with tax included.
    
    Args:
        price: Base price without tax
        rate: Tax rate (default 16%)
    
    Returns:
        Total price with tax
    """
    return price * (1 + rate)
```

---

### Functions — The Art of Not Repeating Yourself

```python
# Professional function with all modern elements
def process_payment(
    amount: float,
    currency: str = "USD",
    *,                      # Everything after this is keyword-only
    description: str = "",
    validate: bool = True
) -> dict:
    if validate and amount <= 0:
        raise ValueError(f"Amount must be positive, received: {amount}")
    
    return {
        "status": "success",
        "amount": amount,
        "currency": currency,
        "description": description
    }

# Decorators — the pattern nobody explains well
import functools
import time

def retry(max_attempts: int = 3, wait: float = 1.0):
    """Decorator that retries a function if it fails."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            last_error = None
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_error = e
                    if attempt < max_attempts - 1:
                        time.sleep(wait)
            raise last_error
        return wrapper
    return decorator

@retry(max_attempts=3, wait=0.5)
def call_external_api(endpoint: str) -> dict:
    import requests
    return requests.get(endpoint, timeout=5).json()
```

---

### Python 3.14 Key Features

```python
# 1. T-STRINGS — PEP 750
# Problem: f-strings evaluate immediately, no control
name = "<script>alert('XSS')</script>"
# ❌ Dangerous in HTML:
html = f"<div>{name}</div>"  # XSS injection

# ✅ T-strings allow custom processing:
from html import escape

def html_safe(template):
    parts = []
    for part in template:
        if isinstance(part, str):
            parts.append(part)
        else:
            parts.append(escape(str(part.value)))
    return "".join(parts)

safe_html = html_safe(t"<div>{name}</div>")
# "<div>&lt;script&gt;alert(&#x27;XSS&#x27;)&lt;/script&gt;</div>"

# 2. UUID7 — native time-ordered UUIDs
from uuid import uuid7
new_id = uuid7()  # Ordered by time + random — better for DB indexing

# 3. Pattern matching — even more powerful
def process_api_response(response: dict) -> str:
    match response:
        case {"status": "success", "data": {"user": {"name": name}}}:
            return f"Welcome, {name}"
        case {"status": "error", "code": 401}:
            return "Unauthorized"
        case {"status": "error", "code": code, "message": msg}:
            return f"Error {code}: {msg}"
        case _:
            return "Unknown response"
```

---

## PART V: Python + AI

### Claude API from Python

```python
import os
import anthropic
from anthropic import Anthropic
import instructor
from pydantic import BaseModel, Field

client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

# Basic call
def ask_claude(question: str, system: str = None) -> str:
    kwargs = {
        "model": "claude-sonnet-4-6",
        "max_tokens": 1024,
        "messages": [{"role": "user", "content": question}]
    }
    if system:
        kwargs["system"] = system
    return client.messages.create(**kwargs).content[0].text

# Streaming
def claude_stream(prompt: str):
    with client.messages.stream(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}]
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)

# Prompt caching — 90% discount on cached tokens
def analyze_with_large_context(document: str, question: str) -> str:
    return client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        system=[{
            "type": "text",
            "text": f"You are a document analyzer. Document:\n\n{document}",
            "cache_control": {"type": "ephemeral"}
        }],
        messages=[{"role": "user", "content": question}]
    ).content[0].text

# Structured outputs with instructor
claude_instructor = instructor.from_anthropic(
    Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
)

class SentimentAnalysis(BaseModel):
    sentiment: str = Field(description="positive, negative, or neutral")
    confidence: float = Field(ge=0, le=1)
    keywords: list[str]
    summary: str

def analyze_sentiment(text: str) -> SentimentAnalysis:
    return claude_instructor.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=500,
        response_model=SentimentAnalysis,
        messages=[{"role": "user", "content": f"Analyze sentiment of: '{text}'"}]
    )
```

---

## PART VI: Python for Cybersecurity

### Zero Trust in Code

```python
# Secrets management — NEVER hardcode
import os
from dotenv import load_dotenv

load_dotenv()  # Loads .env automatically

api_key = os.environ["API_KEY"]  # KeyError if missing = intentional fail-fast

# Secure password hashing
import bcrypt
import secrets

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode(), salt).decode()

def verify_password(password: str, stored_hash: str) -> bool:
    return bcrypt.checkpw(password.encode(), stored_hash.encode())

# Secure token generation
session_token = secrets.token_hex(32)

# Log analysis for threat detection
import re
from collections import Counter

class LogAnalyzer:
    PATTERNS = {
        "brute_force": re.compile(r"Failed password for .+ from (\d+\.\d+\.\d+\.\d+)"),
        "sql_injection": re.compile(r"(UNION|SELECT|DROP).*(\bOR\b|\bAND\b)", re.IGNORECASE),
        "xss": re.compile(r"<script|javascript:|onerror=", re.IGNORECASE),
        "path_traversal": re.compile(r"\.\./|%2e%2e", re.IGNORECASE)
    }
    
    def analyze_line(self, line: str, line_num: int = 0) -> list:
        alerts = []
        for threat_type, pattern in self.PATTERNS.items():
            if match := pattern.search(line):
                alerts.append({
                    "type": threat_type,
                    "line": line_num,
                    "match": match.group(0),
                    "severity": "HIGH" if threat_type in ["sql_injection", "xss"] else "MEDIUM"
                })
        return alerts
```

---

## PART VII: Python in Production

### FastAPI — Modern APIs

```python
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel, EmailStr, Field
from typing import Annotated

app = FastAPI(title="My API", version="1.0.0")

class CreateUser(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    password: str = Field(min_length=8)

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    active: bool
    model_config = {"from_attributes": True}

@app.post("/users", response_model=UserResponse, status_code=201)
async def create_user(
    data: CreateUser,
    db: Annotated[Session, Depends(get_db)]
):
    if db.query(User).filter(User.email == data.email).first():
        raise HTTPException(status_code=409, detail="Email already registered")
    
    user = User(
        name=data.name,
        email=data.email,
        password_hash=hash_password(data.password)
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}
```

---

## 🏁 Epilogue: The Augmented Programmer

Python is not just a language. It's the common language between humans and the new intelligence layer we're building over the world.

The knowledge this book could not teach you — the intuition for knowing when to use a dictionary vs a tree vs a database, the security instinct that makes you ask "what if someone sends this malicious input?", the architecture that divides code into modules that can evolve independently — comes only from practice.

Choose one of the Chapter 7.4 projects. Build one completely. Put it on GitHub.

> **"The difference between a programmer and someone who uses AI to program isn't the tool. It's the understanding of why the code does what it does, and the ability to direct it toward where you need to go."**

Python gives you the language. AI gives you the copilot. Deep understanding is what makes the journey worth it.

Now go build something. 🐍🚀

---

### 📚 Book Resources

* 🌐 [**Python 3.14 Official Docs**](https://docs.python.org/3.14/)
* 🎓 [**Real Python**](https://realpython.com/)
* 🎮 [**Exercism.io — Python Track**](https://exercism.org/tracks/python)
* 📊 [**Kaggle**](https://www.kaggle.com/)
* 📚 [**Fluent Python (2nd Ed)**](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/)
* 📚 [**Architecture Patterns with Python (free)**](https://www.cosmicpython.com/)

---

*Written by **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*Python 3.14 · June 2026 · This book is a living document that updates with the language.*

</div>
