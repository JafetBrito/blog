---
title: "🐱 Git con Oliver: De Script Kitty a Hacker Cat — La Guía Completa"
title_en: "🐱 Git with Oliver: From Script Kitty to Hacker Cat — The Complete Guide"
description: "La guía de Git más divertida del internet: Oliver the Hacker Cat salva a Script Kitty del despido en cada capítulo mientras aprende Git desde cero hasta GitHub Actions, rebase, cherry-pick y CI/CD. Porque Git es un viaje en el tiempo — y alguien tiene que saber conducir."
description_en: "The most fun Git guide on the internet: Oliver the Hacker Cat saves Script Kitty from getting fired in every chapter while learning Git from zero to GitHub Actions, rebase, cherry-pick and CI/CD. Because Git is time travel — and someone has to know how to drive."
pubDate: 2026-06-11
tags: ["Git", "GitHub", "Control de Versiones", "Tutorial", "DevOps", "CI/CD", "Programacion", "Humor", "OliverTheHackerCat"]
author: "Jafet Brito"
heroImage: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80"
draft: false
---

<div class="lang-es">

# 🐱 Git con Oliver: De Script Kitty a Hacker Cat

**Por Jafet Brito** · Security Researcher · *Publicado el 11 de junio de 2026*

---

> *"Git no es control de versiones. Git es una máquina del tiempo con teclado."*
> — Oliver the Hacker Cat, Senior Dev, Startup Felina S.A.

> *"Yo solo quería guardar el archivo..."*
> — Script Kitty, minutos antes de borrar el repositorio de producción

---

## 🏢 El Universo: Startup Felina S.A.

Bienvenido a **Startup Felina S.A.**, la startup de tecnología más caótica del universo conocido. Aquí trabajan dos personajes que van a enseñarte todo lo que necesitas saber sobre Git:

**🐱 Oliver** — El Senior Developer. Cinco años de experiencia, café negro sin azúcar, y una paciencia infinita que solo un gato puede tener. Oliver sabe Git tan bien que a veces sueña con ramas y commits. Su frase favorita: *"Hay un comando para eso."*

**😱 Script Kitty** — El Junior Developer. Acaba de graduarse, tiene mucho entusiasmo, cero miedo, y la habilidad sobrenatural de encontrar la forma más catastrófica de hacer cualquier cosa. Cada vez que abre la terminal, en algún lugar del mundo, un servidor tiembla.

Cada capítulo es una crisis nueva. Oliver llega justo a tiempo. Y tú aprenderás Git viendo cómo se salva el mundo, un commit a la vez.

---

## 🗺️ Mapa de la Aventura

```
EPISODIO 0:  ¿Qué diablos es Git? (La revelación)
EPISODIO 1:  El Primer Commit — "Guardé el archivo mal"
EPISODIO 2:  Branches — "Edité en main por accidente"
EPISODIO 3:  Merge — "¡Tengo conflictos en TODO!"
EPISODIO 4:  Push & Pull — "Subí mi contraseña a GitHub"
EPISODIO 5:  Stash — "Perdí mi trabajo sin hacer commit"
EPISODIO 6:  Log & Diff — "¿Quién rompió esto?"
EPISODIO 7:  Reset & Revert — "Borré el repo de producción"
EPISODIO 8:  Rebase — "El historial parece un árbol de Navidad"
EPISODIO 9:  Cherry-Pick — "Solo quiero ESE commit"
EPISODIO 10: Tags & Releases — "¿Cuál versión está en producción?"
EPISODIO 11: Hooks — "Subí código con 47 errores de linting"
EPISODIO 12: GitHub — PRs, Issues y Code Review
EPISODIO 13: GitHub Actions — CI/CD desde cero
EPISODIO 14: El Flujo Profesional — GitFlow y Trunk-Based
BONUS:       Los Alias de Oliver — Trabaja como un pro
```

---

# 🎬 EPISODIO 0: ¿Qué Diablos es Git?

![Office cat working](https://images.unsplash.com/photo-1596854407944-bf87f6fdd049?w=800&q=80)

*Lunes, 9:03 AM. Script Kitty llega corriendo a la oficina.*

---

**Script Kitty:** 😱 *"¡OLIVER! ¡Trabajé todo el fin de semana en el nuevo feature y ahora no puedo encontrar la versión que funcionaba! ¡Sobreescribí todo!"*

**Oliver:** 🐱 *"¿Tienes Git?"*

**Script Kitty:** 😶 *"¿Qué es Git?"*

*Oliver bebe su café negro. Lentamente. Con los ojos cerrados.*

**Oliver:** 🐱 *"Siéntate. Hoy no vas a tocar nada."*

---

### La Analogía que Cambia Todo

Imagina que tu proyecto de código es una novela que estás escribiendo.

**Sin Git:** Tienes un archivo llamado `novela_final.docx`. Luego `novela_final_ESTE.docx`. Luego `novela_final_ESTE_v2_BUENO.docx`. Luego `novela_final_ESTE_v2_BUENO_copia_de_seguridad_de_verdad.docx`.

*Todos hemos estado ahí. Es horrible.*

**Con Git:** Tienes UN archivo. Pero Git recuerda **cada versión que alguna vez existió**, quién la escribió, cuándo, y por qué. Puedes volver a cualquier punto de la historia. Puedes trabajar en múltiples versiones paralelas. Puedes combinarlas.

Git es literalmente **una máquina del tiempo para tu código.**

### Los Conceptos Fundamentales

```
Tu proyecto de código
         │
         ▼
┌─────────────────────────────────────────────────────┐
│                  REPOSITORIO GIT                     │
│                                                      │
│  Working Directory  →  Staging Area  →  Repository  │
│  (tus archivos)        (preparados)    (guardado)    │
│                                                      │
│  git add ──────────────────────►                    │
│                    git commit ──────────────────►   │
│                                                      │
│  ◄──────────────── git checkout ────────────────    │
└─────────────────────────────────────────────────────┘
```

* **Working Directory:** Tu carpeta normal. Donde editas archivos.
* **Staging Area (Index):** La "sala de espera" antes de guardar. Decides qué cambios van al próximo guardado.
* **Repository (.git):** La base de datos de Git. Todos los commits, toda la historia.

### Instalación y Configuración Inicial

```bash
# Instalar Git
# macOS:
brew install git

# Ubuntu/Debian:
sudo apt install git

# Windows: Descarga desde https://git-scm.com

# Verificar instalación
git --version  # git version 2.47.0

# CONFIGURACIÓN OBLIGATORIA — hazlo ahora, antes de cualquier otra cosa
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Editor por defecto (VS Code es la opción más amigable)
git config --global core.editor "code --wait"

# Rama principal se llama 'main' (no 'master') — estándar actual
git config --global init.defaultBranch main

# Verificar tu configuración
git config --list
```

> 💡 **¿Por qué el email importa?** Cada commit lleva tu nombre y email como firma. Esto es parte de la historia permanente del repositorio. En proyectos profesionales, se usa para saber quién hizo qué.

**Oliver:** 🐱 *"Con esto ya tienes Git configurado. En el siguiente episodio, vamos a ver cómo Script Kitty casi borra su primer proyecto."*

**Script Kitty:** 😤 *"¡Yo NO iba a borrar nada!"*

**Oliver:** 🐱 *"...ya veremos."*

---

# 🎬 EPISODIO 1: El Primer Commit — "Guardé el Archivo Mal"

*Martes, 10:47 AM.*

---

**Script Kitty:** 😤 *"Oliver, ya inicialicé mi repositorio. Escribí `git init` y todo bien. Pero ahora hice cambios y quiero guardarlos. Escribí `git save` y me dice que no existe ese comando."*

**Oliver:** 🐱 *"Git no tiene `save`. Tiene `commit`. Y antes del commit, tienes `add`. Son dos pasos. Ven, te explico."*

**Script Kitty:** 😤 *"¿DOS pasos? ¿Por qué no uno solo?"*

**Oliver:** 🐱 *"Porque eres un artista. No todo lo que tienes en tu lienzo va al museo al mismo tiempo."*

---

### El Ciclo Fundamental de Git

```bash
# PASO 1: Inicializar un repositorio nuevo
mkdir mi-proyecto
cd mi-proyecto
git init
# Initialized empty Git repository in /mi-proyecto/.git/

# PASO 2: Ver el estado — el comando que más usarás en tu vida
git status
# On branch main
# No commits yet
# nothing to commit (create/copy files and track)

# PASO 3: Crea algunos archivos
echo "# Mi Proyecto Increíble" > README.md
echo "print('Hola, mundo')" > main.py

# PASO 4: Ver el estado después de crear archivos
git status
# Untracked files:
#   README.md
#   main.py
# nothing added to commit but untracked files present

# PASO 5: Agregar archivos al staging area
git add README.md          # Agrega un archivo específico
git add main.py            # Agrega otro
git add .                  # Agrega TODOS los archivos nuevos/modificados

# PASO 6: Ver el estado después del add
git status
# Changes to be committed:
#   new file: README.md
#   new file: main.py

# PASO 7: EL COMMIT — guardar en la historia para siempre
git commit -m "feat: inicializar proyecto con README y main"

# El output:
# [main (root-commit) a3f7d89] feat: inicializar proyecto con README y main
#  2 files changed, 2 insertions(+)
#  create mode 100644 README.md
#  create mode 100644 main.py
```

### Los Mensajes de Commit — El Arte de No Odiarste en 6 Meses

El mensaje de commit más común en el mundo es `"cambios"`. También es el más inútil.

```bash
# ❌ Mensajes que Script Kitty escribiría:
git commit -m "cambios"
git commit -m "arreglé cosas"
git commit -m "no sé que puse aqui"
git commit -m "aaaaaaaaa"
git commit -m "commit final FINAL este si ULTIMO"

# ✅ El estándar Conventional Commits (lo que usan las empresas):
# Formato: tipo(scope): descripción en imperativo

git commit -m "feat: agregar login con Google OAuth"
git commit -m "fix: corregir cálculo de IVA en checkout"
git commit -m "docs: actualizar README con instrucciones de instalación"
git commit -m "refactor: extraer lógica de validación a utils.py"
git commit -m "test: agregar tests para módulo de pagos"
git commit -m "chore: actualizar dependencias a versiones seguras"
```

### Tipos de Conventional Commits

| Tipo | Cuándo usarlo |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Solo documentación |
| `style` | Formato, espacios (sin cambio de lógica) |
| `refactor` | Reestructuración sin fix ni feature |
| `test` | Añadir o corregir tests |
| `chore` | Tareas de mantenimiento, dependencias |
| `perf` | Mejora de rendimiento |
| `ci` | Cambios en CI/CD |

### El .gitignore — Lo Que Git Debe Olvidar

```bash
# Crea el .gitignore ANTES de tu primer commit
touch .gitignore
```

```gitignore
# .gitignore — archivos que Git NUNCA debe guardar

# Variables de entorno y secretos — CRÍTICO
.env
.env.local
.env.*.local
*.key
*.pem
secrets.json

# Dependencias — se reinstalan con el package manager
node_modules/
venv/
.venv/
__pycache__/
*.pyc

# Archivos del sistema operativo
.DS_Store          # macOS
Thumbs.db          # Windows
.Spotlight-V100    # macOS

# Archivos del editor
.vscode/
.idea/
*.swp              # Vim

# Archivos de build
dist/
build/
*.egg-info/
.pytest_cache/
coverage/
```

> 🔐 **El error de Script Kitty #1 más común:** Subir el archivo `.env` con contraseñas y API keys a GitHub. Una vez que está en el historial, **NO SE PUEDE BORRAR FÁCILMENTE**. El daño está hecho — tienes que rotar todas las credenciales. Siempre crea el `.gitignore` primero.

### Comandos Esenciales del Episodio 1

```bash
git init                    # Inicializa repo en la carpeta actual
git status                  # El estado del repo (¡úsalo constantemente!)
git add archivo.py          # Agrega un archivo al staging
git add .                   # Agrega todo
git add -p                  # Modo interactivo — agrega por hunks
git commit -m "mensaje"     # Commit con mensaje en línea
git commit                  # Abre el editor para mensaje largo
git log                     # Ver historial de commits
git log --oneline           # Historial compacto
```

---

*Al final del día...*

**Script Kitty:** 😊 *"¡Oliver! ¡Hice mi primer commit y no pasó nada malo!"*

**Oliver:** 🐱 *"Espera al episodio 7."*

---

# 🎬 EPISODIO 2: Branches — "Edité en Main por Accidente"

*Miércoles, 2:15 PM. Script Kitty está pálido.*

---

**Script Kitty:** 😰 *"Oliver... El jefe quiere el nuevo feature para mañana, pero yo ya rompí el código que funciona editando en main y ahora nada compila y el demo es en 3 horas y—"*

**Oliver:** 🐱 *[Con calma sobrehumana]* *"¿Cuándo hiciste tu último commit?"*

**Script Kitty:** 😰 *"Ayer."*

**Oliver:** 🐱 *"Bien. Esto tiene solución. Y cuando terminemos, nunca más vas a trabajar directamente en main."*

---

### ¿Qué es una Branch (Rama)?

Imagina que tu proyecto es una línea del tiempo. `main` es la línea principal — la historia oficial del proyecto.

Una branch es una **línea del tiempo paralela** donde puedes hacer experimentos sin afectar la realidad principal. Si el experimento sale bien, lo combinas (merge). Si sale mal, simplemente eliminas la branch y nada pasó.

```
main:     A ── B ── C ──────────────────── G
                    │                     ↑
feature:            └── D ── E ── F ──────┘
                    (trabajas aquí sin tocar main)
```

### Comandos de Branches

```bash
# Ver todas las branches
git branch
# * main    ← el asterisco indica dónde estás

# Crear una branch nueva
git branch feature/login-google

# Cambiar a una branch
git checkout feature/login-google
# Switched to branch 'feature/login-google'

# El shortcut moderno: crear Y cambiar en un solo comando
git checkout -b feature/login-google
# ó con la sintaxis nueva:
git switch -c feature/login-google

# Ver en qué branch estás (también en git status)
git branch
#   main
# * feature/login-google

# Hacer cambios y commits en la nueva branch
# (estos cambios NO afectan a main)
echo "login con google aquí" >> auth.py
git add auth.py
git commit -m "feat: agregar OAuth con Google"

# Ver diferencia entre branches
git log main..feature/login-google --oneline
# abc1234 feat: agregar OAuth con Google

# Volver a main (intacto, como si nada hubiera pasado)
git checkout main

# Eliminar una branch (cuando ya no la necesitas)
git branch -d feature/login-google     # Solo si ya fue merged
git branch -D feature/login-google     # Fuerza el borrado
```

### La Convención de Nombres de Branches

```bash
# Prefijos comunes en equipos profesionales:
feature/nombre-del-feature    # Nueva funcionalidad
fix/descripcion-del-bug        # Corrección de bug
hotfix/urgente                 # Fix urgente en producción
release/1.2.0                  # Preparación de release
docs/actualizar-readme         # Solo documentación
refactor/limpiar-auth          # Refactorización

# Ejemplos reales:
git checkout -b feature/carrito-de-compras
git checkout -b fix/calculo-iva-incorrecto
git checkout -b hotfix/vulnerabilidad-sql-injection
```

### La Regla de Oro de las Branches

> **NUNCA trabajes directamente en `main` (o `master`).** 
> `main` es producción. `main` es lo sagrado. `main` es lo que ven los usuarios.
> Siempre crea una branch, trabaja ahí, y haz merge cuando esté listo.

```bash
# El flujo correcto — siempre, sin excepciones:
git checkout main
git pull                              # Sincroniza con el remoto
git checkout -b feature/mi-nuevo-feature
# ... trabaja, agrega, commiteas ...
git checkout main
git merge feature/mi-nuevo-feature   # Combina cuando esté listo
```

---

*3 horas después...*

**Script Kitty:** 😮 *"Oliver... el demo salió perfecto. Trabajé en la branch, main no se tocó, y pude hacer el demo desde main. ¿CÓMO SABÍAS?"*

**Oliver:** 🐱 *"Porque yo también fui Script Kitty una vez."*

*Script Kitty mira a Oliver con ojos de admiración.*

**Script Kitty:** 😍 *"¿En serio?"*

**Oliver:** 🐱 *"No. Siempre fui así de bueno. Ve a casa."*

---

# 🎬 EPISODIO 3: Merge — "¡Tengo Conflictos en TODO!"

*Jueves, 11:23 AM. Script Kitty y otro dev, Pixel Paws, trabajaron en el mismo archivo.*

---

**Script Kitty:** 😤 *"OLIVER. Git me está diciendo que tengo 'CONFLICT' en TODOS lados. El texto está lleno de `<<<<<<<` y `=======` y `>>>>>>>` y no entiendo NADA. ¿Qué hice?"*

**Oliver:** 🐱 *"Encontraste tu primer conflicto de merge. Felicidades. Es un rito de iniciación."*

**Script Kitty:** 😤 *"¿FELICIDADES? ¡NADA COMPILA!"*

**Oliver:** 🐱 *"Es solo Git diciéndote: 'oye, dos personas editaron la misma línea, ¿cuál versión gana?' Resuelves tú, no Git."*

---

### ¿Qué es un Merge?

Merge es combinar los cambios de dos branches en una sola. Normalmente funciona mágicamente — Git detecta qué cambió en cada branch y lo combina solo.

El problema surge cuando **dos personas editaron exactamente la misma línea** de un archivo. Git no sabe cuál versión es la correcta. Eso es un **conflicto de merge**.

```bash
# Escenario del desastre de Script Kitty:
# main tiene: "precio = 100"
# feature/script-kitty tiene: "precio = 90" (descuento)
# feature/pixel-paws tiene: "precio = 110" (ajuste inflación)
# → CONFLICTO: ¿90 o 110?

# Hacer merge
git checkout main
git merge feature/script-kitty
# Auto-merging precios.py
# CONFLICT (content): Merge conflict in precios.py
# Automatic merge failed; fix conflicts and then commit the result.
```

### Anatomía de un Conflicto

```python
# Esto es lo que verás en el archivo con conflicto:

<<<<<<< HEAD
precio = 110  # Esta es TU versión (la del branch actual)
=======
precio = 90   # Esta es la versión del branch que estás mergeando
>>>>>>> feature/script-kitty

# La solución:
# 1. Decide cuál versión es la correcta (o combínalas)
# 2. Elimina TODOS los marcadores (<<<<<<<, =======, >>>>>>>)
# 3. Deja solo el código correcto
# 4. git add el archivo resuelto
# 5. git commit para completar el merge
```

### Resolver Conflictos Paso a Paso

```bash
# PASO 1: Ver qué archivos tienen conflictos
git status
# Both modified: precios.py
# Both modified: config.py

# PASO 2: Abrir cada archivo y resolver manualmente
# (O usa VS Code que tiene interfaz visual para conflictos)
code precios.py

# PASO 3: Después de resolver CADA archivo
git add precios.py
git add config.py

# PASO 4: Completar el merge
git commit
# Git genera automáticamente el mensaje: "Merge branch 'feature/script-kitty'"

# ALTERNATIVA: Si te arrepentiste y quieres cancelar el merge
git merge --abort
```

### Merge Strategies — No Todos los Merges son Iguales

```bash
# Fast-forward merge: cuando no hay divergencia
# (solo avanza el puntero, sin commit de merge)
git merge feature/mi-branch
#      A ── B ── C (main)
#                 ↘
#                  D ── E (feature)
# Resultado: main avanza a E sin crear un commit de merge

# Merge commit: cuando hay divergencia (--no-ff fuerza el commit)
git merge --no-ff feature/mi-branch
# Crea un commit de merge explícito en el historial
# Recomendado para features significativos

# Squash merge: todos los commits del feature se combinan en uno
git merge --squash feature/mi-branch
git commit -m "feat: [squash] agregar sistema de pagos completo"
# Limpia el historial — todos los "WIP" y "arreglé typo" desaparecen
```

> 💡 **El consejo de Oliver:** En equipos profesionales, se usa `--no-ff` para features grandes (así sabes exactamente cuándo llegó cada feature) y `--squash` para features con historial sucio de WIP commits.

---

*Media hora después...*

**Script Kitty:** 😊 *"¡Lo resolví! ¡Todo compiló! ¡Los conflictos desaparecieron!"*

**Oliver:** 🐱 *"Bien. Ahora, ¿decidiste el precio correcto, verdad? ¿No pusiste cualquier número al azar para que desapareciera el error?"*

**Script Kitty:** 😶 *"...defíneme 'cualquier número al azar'."*

**Oliver:** 🐱 *"Pixel Paws, ven a revisar los precios de Script Kitty."*

---

# 🎬 EPISODIO 4: Push & Pull — "Subí Mi Contraseña a GitHub"

*Viernes, 9:01 AM. Hay un email urgente del CTO.*

---

**Script Kitty:** 😱 *"OLIVER. EL CTO ME MANDÓ UN EMAIL. Dice que mi API key de producción apareció en GitHub. La de AWS. La que cuesta dinero si la usan. Me van a DESPEDIR."*

**Oliver:** 🐱 *[Teclea rápido]* *"¿Cuánto hace que la subiste?"*

**Script Kitty:** 😱 *"Ayer en la noche. Pero el commit ya está en GitHub—"*

**Oliver:** 🐱 *"Primero: rota la key AHORA. Ve a AWS y deshabilítala. Eso es lo más urgente. El daño del código lo resolvemos después."*

---

> ⚠️ **AVISO DE EMERGENCIA REAL:** Si alguna vez subes credenciales a un repositorio público, incluso por 1 segundo, **asume que ya fueron comprometidas**. Los bots escanean GitHub en tiempo real buscando exactamente esto. Rota las credenciales primero. Limpia el historial después.

### GitHub — El Repositorio Remoto

Git es local. GitHub es donde vive tu código en la nube, compartido con tu equipo.

```
Tu computadora          GitHub/GitLab/Bitbucket
(repositorio local)     (repositorio remoto)
       │                         │
       │ ──── git push ─────────►│
       │                         │
       │ ◄─── git pull ──────────│
       │                         │
       │ ◄─── git clone ─────────│ (primera vez)
```

### Conectar tu Repo Local con GitHub

```bash
# OPCIÓN A: Empezar desde GitHub (recomendado)
# 1. Crea el repo en github.com
# 2. Clónalo localmente:
git clone https://github.com/usuario/mi-repo.git
cd mi-repo
# Ya está conectado automáticamente

# OPCIÓN B: Tienes un repo local y quieres subirlo a GitHub
# 1. Crea el repo en github.com (sin README, sin .gitignore)
# 2. Conecta tu repo local:
git remote add origin https://github.com/usuario/mi-repo.git
git branch -M main
git push -u origin main

# Ver los remotos configurados
git remote -v
# origin  https://github.com/usuario/mi-repo.git (fetch)
# origin  https://github.com/usuario/mi-repo.git (push)
```

### Push y Pull — Sincronización Diaria

```bash
# PUSH: sube tus commits al remoto
git push                          # Push al branch actual
git push origin main              # Push explícito a main en origin
git push origin feature/mi-cosa  # Push de una branch específica
git push -u origin feature/nueva  # Push y configura tracking

# PULL: descarga y aplica cambios del remoto
git pull                          # Fetch + merge (el default)
git pull --rebase                 # Fetch + rebase (historial más limpio)

# FETCH: descarga sin aplicar (para ver qué hay antes de aplicar)
git fetch
git fetch origin
git log origin/main --oneline     # Ver qué hay en el remoto
git diff main origin/main         # Ver la diferencia antes de aplicar
```

### El Error de Script Kitty — Cómo Limpiar Credenciales del Historial

```bash
# SITUACIÓN: Subiste el .env con credenciales a GitHub
# PASO 1: Rota todas las credenciales PRIMERO (esto es lo más urgente)

# PASO 2: Agrega .env al .gitignore (si no estaba)
echo ".env" >> .gitignore
git add .gitignore
git commit -m "chore: agregar .env a gitignore"

# PASO 3: Eliminar el archivo del historial con git filter-repo
# (instala con: pip install git-filter-repo)
git filter-repo --path .env --invert-paths

# PASO 4: Force push para sobreescribir el historial en GitHub
git push --force-with-lease origin main

# ALTERNATIVA rápida para un commit reciente:
# Si el commit con credenciales fue el ÚLTIMO:
git reset --soft HEAD~1           # Deshace el commit pero mantiene los cambios
# Elimina el .env, agrega al .gitignore, vuelve a commitear sin .env
git push --force-with-lease

# ⚠️ IMPORTANTE: force push reescribe la historia
# Si otros ya clonaron el repo, necesitarán hacer git pull --rebase
```

### SSH vs HTTPS — Autenticación en GitHub

```bash
# HTTPS — requiere token de acceso personal (PAT)
# Genera uno en: GitHub → Settings → Developer settings → Personal access tokens
git clone https://github.com/usuario/repo.git
# Te pedirá usuario y token (NO tu contraseña de GitHub)

# SSH — más seguro, no pide contraseña cada vez (recomendado)
# Genera tu par de llaves SSH:
ssh-keygen -t ed25519 -C "tu@email.com"
# Copia la llave pública a GitHub:
cat ~/.ssh/id_ed25519.pub
# Ve a GitHub → Settings → SSH keys → New SSH key → pega la llave

# Clona con SSH:
git clone git@github.com:usuario/repo.git

# Verificar que funciona:
ssh -T git@github.com
# Hi username! You've successfully authenticated.
```

---

*Dos horas después. La crisis está controlada.*

**Script Kitty:** 😮‍💨 *"La key está rotada, el historial está limpio, y el CTO ya no me va a despedir. Oliver... ¿cómo sabías qué hacer?"*

**Oliver:** 🐱 *"Porque yo también subí credenciales a GitHub una vez."*

**Script Kitty:** 😱 *"¿EN SERIO?"*

**Oliver:** 🐱 *"No. Pero me pareció que te haría sentir mejor. ¿Lo sintió?"*

**Script Kitty:** 😐 *"No."*

---

# 🎬 EPISODIO 5: Stash — "Perdí Mi Trabajo Sin Hacer Commit"

*Lunes, 3:44 PM.*

---

**Script Kitty:** 😩 *"Oliver. Estaba trabajando en el feature de búsqueda. Llevaba 2 horas. El jefe me dijo que había un BUG URGENTE en producción y que tenía que arreglarlo YA. Cambié de branch para hacer el hotfix y Git me dijo que tenía 'uncommitted changes' y que no podía cambiar. Así que hice `git checkout -f` para forzar y... perdí todas mis 2 horas de trabajo."*

**Oliver:** 🐱 *[Pausa larga]* *"El `-f` fuerza el checkout y descarta todos los cambios. Para eso existe el stash."*

**Script Kitty:** 😩 *"¿PARA QUÉ EXISTE EL QUÉ?"*

---

### Git Stash — El Cajón del Caos

Stash es como un cajón donde guardas temporalmente cambios que no están listos para un commit. Guardas, cambias de branch, haces lo urgente, vuelves, y recuperas tus cambios.

```bash
# LA SITUACIÓN: tienes cambios sin commitear y necesitas cambiar de branch
git status
# modified: busqueda.py
# modified: resultados.py

# ❌ Lo que hizo Script Kitty (NUNCA hagas esto):
git checkout -f hotfix/bug-critico   # DESTRUYE tus cambios

# ✅ Lo que debió hacer:
git stash                           # Guarda los cambios en el cajón
git checkout -b hotfix/bug-critico  # Ahora sí puede cambiar
# ... arregla el bug ...
git commit -m "fix: corregir bug crítico en pagos"
git push
git checkout feature/busqueda       # Vuelve a tu feature
git stash pop                       # Recupera tus cambios del cajón
```

### Comandos de Stash

```bash
# Guardar cambios en el stash
git stash                            # Guarda modified y staged
git stash push -m "WIP: búsqueda con filtros"  # Con mensaje descriptivo
git stash -u                         # Incluye también archivos untracked (nuevos)

# Ver qué hay en el stash
git stash list
# stash@{0}: WIP on feature/busqueda: abc1234 feat: agregar filtros
# stash@{1}: WIP on main: def5678 fix: corregir typo

# Recuperar el último stash (y eliminarlo del cajón)
git stash pop

# Recuperar un stash específico (sin eliminarlo)
git stash apply stash@{1}

# Ver el contenido de un stash sin aplicarlo
git stash show stash@{0} -p

# Eliminar un stash sin aplicarlo
git stash drop stash@{0}

# Vaciar TODO el stash
git stash clear

# Crear una branch desde el stash (muy útil)
git stash branch feature/nueva-desde-stash stash@{0}
```

> 💡 **El consejo de Oliver:** Usa mensajes descriptivos en cada stash (`git stash push -m "descripción"`). El stash@{0} del futuro te lo agradecerá. Un stash sin nombre a las 2 AM es un misterio que nadie quiere resolver.

---

*Fin del día...*

**Script Kitty:** 😌 *"Oliver, con el stash recuperé mis 2 horas de trabajo."*

**Oliver:** 🐱 *"¿Y el hotfix?"*

**Script Kitty:** 😊 *"También listo. Mergeado y en producción."*

**Oliver:** 🐱 *"Bien. Ahora, ¿commiteas más seguido?"*

**Script Kitty:** 😊 *"¡Sí! Cada 20 minutos como me dijiste."*

**Oliver:** 🐱 *"Cada 30 está bien. Cada 20 eres un neurótico."*

---

# 🎬 EPISODIO 6: Log & Diff — "¿Quién Rompió Esto?"

*Martes, 10:00 AM. El build de producción está fallando.*

---

**Script Kitty:** 😤 *"Oliver, algo rompió la API de pagos. Funcionaba ayer. ¿Cómo sé QUÉ cambió y QUIÉN lo cambió?"*

**Oliver:** 🐱 *"Git tiene toda la historia. Solo hay que saber cómo leerla."*

**Script Kitty:** 😤 *"Escribí `git log` y me salieron 500 líneas que no entiendo."*

**Oliver:** 🐱 *"Eso es porque no le estás haciendo las preguntas correctas. Git log es un investigador. Dale el caso."*

---

### Git Log — Leer la Historia

```bash
# Log básico (demasiado verbose)
git log

# Log compacto — el más útil en el día a día
git log --oneline
# a3f7d89 feat: agregar checkout con tarjeta
# b2e6c78 fix: corregir validación de email
# c1d5b67 feat: sistema de carrito de compras

# Log con grafo de branches — para ver cómo divergen/convergen
git log --oneline --graph --all
# * a3f7d89 (HEAD -> main) feat: agregar checkout
# *   m7n8p90 Merge branch 'feature/carrito'
# |\
# | * q1r2s3t feat: agregar botón de eliminar
# | * u4v5w6x feat: crear modelo del carrito
# |/
# * x7y8z9a fix: corregir validación email

# Filtros poderosos de git log:
git log --author="Script Kitty"          # Commits de una persona
git log --since="2 days ago"             # Últimos 2 días
git log --since="2026-06-01"             # Desde fecha específica
git log --grep="pagos"                   # Commits que mencionan "pagos"
git log -- pagos.py                      # Commits que tocaron un archivo
git log -n 10                            # Últimos 10 commits
git log --stat                           # Con estadísticas de archivos tocados

# El comando para encontrar quién rompió algo:
git log --oneline --since="yesterday" -- api/pagos.py
# Muestra solo commits de ayer que tocaron el archivo de pagos
```

### Git Diff — Ver Exactamente Qué Cambió

```bash
# Diferencia entre working directory y staging (cambios no añadidos)
git diff

# Diferencia entre staging y último commit (cambios añadidos pero no commiteados)
git diff --staged

# Diferencia entre dos commits
git diff abc1234 def5678

# Diferencia entre dos branches
git diff main feature/nueva-cosa

# Diferencia de un archivo específico
git diff HEAD~1 HEAD -- pagos.py
# (HEAD~1 es el commit anterior al actual)

# Quién cambió cada línea de un archivo (¡el detective de Git!)
git blame pagos.py
# abc1234 (Script Kitty 2026-06-10) precio = calcular_total()
# def5678 (Pixel Paws  2026-06-11) precio = calcular_total_con_iva()

# Blame de un rango de líneas específico
git blame -L 45,60 pagos.py
```

### Git Bisect — Encontrar el Commit que Rompió Todo

Esta es la herramienta más poderosa para debugging que la mayoría de devs nunca usa:

```bash
# Git bisect hace búsqueda binaria en el historial
# para encontrar el commit exacto que introdujo un bug

git bisect start
git bisect bad                    # El commit actual está roto
git bisect good v1.0.0           # Esta versión funcionaba bien

# Git automáticamente va al commit del medio:
# "Bisecting: 43 revisions left to test after this"

# Prueba si el bug existe en ese commit:
# Si está roto:
git bisect bad
# Si funciona:
git bisect good

# Git sigue dividiendo hasta encontrar el commit culpable:
# "abc1234 is the first bad commit"
# commit abc1234
# Author: Script Kitty <kitty@startup.com>
# Date: Mon Jun 10 14:23:11 2026
#     feat: refactorizar cálculo de precios

git bisect reset                  # Vuelve al estado original
```

---

*30 minutos después...*

**Script Kitty:** 😮 *"Oliver... `git bisect` encontró exactamente el commit donde rompí la API. Fue cuando cambié el multiplicador del IVA de 1.16 a 0.16."*

**Oliver:** 🐱 *"IVA del -84%. Eso sí que es un descuento."*

**Script Kitty:** 😳 *"...¿Cuánto dinero perdimos?"*

**Oliver:** 🐱 *"El deploy de producción estaba pausado para revisión. Nadie vio ese cambio."*

**Script Kitty:** 😮‍💨 *"Git me salvó la vida."*

**Oliver:** 🐱 *"Git te mostró el crimen. Tú cometiste el crimen."*

---

# 🎬 EPISODIO 7: Reset & Revert — "Borré el Repo de Producción"

*Miércoles, 11:47 PM. Oliver recibe un mensaje de texto.*

---

**Script Kitty:** 😱💬 *"oliver estas despierto"*
**Script Kitty:** 😱💬 *"oliver POR FAVOR"*
**Script Kitty:** 😱💬 *"hice git push --force en main"*
**Script Kitty:** 😱💬 *"y sobreescribí los commits de los últimos 3 días del equipo"*
**Script Kitty:** 😱💬 *"pixel paws y whisker dev están muy enojados"*

*Oliver respira profundo. Abre la laptop.*

**Oliver:** 🐱💬 *"¿Cuándo lo hiciste?"*
**Script Kitty:** 😱💬 *"hace 20 minutos"*
**Oliver:** 🐱💬 *"Bien. Aún se puede recuperar. No toques nada más."*

---

### Git Reset — Deshacer Commits (Con Cuidado)

```bash
# Los tres modos de git reset:

# --soft: deshace el commit pero MANTIENE los cambios en staging
git reset --soft HEAD~1
# Útil para: "quiero reescribir este mensaje de commit"
# o: "quiero combinar los últimos 2 commits en uno"

# --mixed (el default): deshace el commit y saca los cambios del staging
git reset HEAD~1         # Equivalente a git reset --mixed HEAD~1
# Útil para: "quiero reorganizar qué cambios van en qué commit"

# --hard: deshace el commit Y DESCARTA todos los cambios
git reset --hard HEAD~1
# ⚠️ PELIGROSO: los cambios se pierden definitivamente (en teoría)
# Útil para: "quiero borrar completamente el último commit y sus cambios"

# Deshacer N commits:
git reset --soft HEAD~3   # Deshace los últimos 3 commits

# Reset a un commit específico:
git reset --hard abc1234  # Vuelve exactamente a ese estado
```

### Git Reflog — El Salvavidas de Oliver

```bash
# SITUACIÓN: Script Kitty hizo git push --force y sobreescribió main
# SOLUCIÓN: git reflog

# El reflog es el registro de TODOS los movimientos del HEAD
# Incluso commits "perdidos" aparecen aquí durante 90 días
git reflog
# a3f7d89 HEAD@{0}: reset: moving to HEAD~5
# b2e6c78 HEAD@{1}: commit: feat: agregar pagos
# c1d5b67 HEAD@{2}: commit: feat: carrito de compras
# d0e4f56 HEAD@{3}: commit: fix: validación
# e9f3a45 HEAD@{4}: commit: feat: usuario premium
# f8e2b34 HEAD@{5}: commit: feat: login inicial

# Los commits "perdidos" siguen en el reflog:
git checkout b2e6c78     # Recupera el commit perdido
# o:
git reset --hard b2e6c78  # Vuelve el HEAD a ese commit

# Para recuperar el main de Oliver:
# 1. En la computadora de Pixel Paws (que no hizo push --force):
git log --oneline  # Encuentra el último commit correcto

# 2. Oliver desde su computadora (que no fue afectada):
git push --force-with-lease origin main
# Empuja la versión correcta de vuelta a GitHub
```

### Git Revert — La Forma Segura de Deshacer

```bash
# La diferencia entre reset y revert:

# git reset: REESCRIBE la historia (elimina commits)
# → Peligroso en repos compartidos
# → Use case: arreglar tu historial local antes de push

# git revert: CREA UN NUEVO COMMIT que deshace los cambios
# → Seguro en repos compartidos
# → La historia permanece intacta
# → Recomendado para deshacer cambios que ya están en main/producción

# Revertir el último commit
git revert HEAD
# Crea: "Revert 'feat: agregar sistema de pagos'"

# Revertir un commit específico (no necesariamente el último)
git revert abc1234

# Revertir múltiples commits
git revert HEAD~3..HEAD

# Revertir sin abrir el editor de mensajes
git revert HEAD --no-edit
```

> 🔐 **La regla de Oliver:** En repos compartidos, **nunca** hagas `git reset --hard` + `git push --force` en branches públicas como `main`. Usa `git revert`. El force push reescribe la historia y rompe el trabajo de todos los demás.

---

*1:15 AM. El repo está recuperado.*

**Script Kitty:** 😭💬 *"oliver. lo recuperaste todo. eres un dios"*
**Oliver:** 🐱💬 *"No soy un dios. Soy un Senior Dev. La diferencia es que yo sí duermo."*
**Oliver:** 🐱💬 *"Mañana configuramos branch protection rules en GitHub. Nadie hace force push en main jamás."*
**Script Kitty:** 😭💬 *"gracias oliver"*
**Oliver:** 🐱💬 *"Compra el café mañana."*

---

# 🎬 EPISODIO 8: Rebase — "El Historial Parece un Árbol de Navidad"

*Jueves, 2:00 PM.*

---

**Script Kitty:** 😤 *"Oliver, Pixel Paws me dijo que mi historial de commits es 'un árbol de Navidad' y que 'parece que lo hizo un gato borracho'. ¿QUÉ SIGNIFICA ESO?"*

**Oliver:** 🐱 *[Mira el historial]* *"...tiene razón."*

```bash
# El historial de Script Kitty:
git log --oneline --graph
# * a1b2c3d WIP
# * d4e5f6g arreglé
# * g7h8i9j WIP otra vez
# * j0k1l2m AHORA SÍ FUNCIONA
# * m3n4o5p revert de lo anterior
# * p6q7r8s revert del revert
# * s9t0u1v esto tampoco funciona
# * v2w3x4y ya sé qué era
# * y5z6a7b feat: agregar búsqueda
```

**Script Kitty:** 😳 *"...¿Cómo lo limpio?"*

**Oliver:** 🐱 *"Interactive rebase."*

---

### Git Rebase — Reescribir la Historia

Rebase mueve o combina commits. Es la herramienta para mantener un historial limpio y lineal.

```bash
# Rebase interactivo — el más poderoso
# "Quiero editar los últimos 8 commits"
git rebase -i HEAD~8

# Esto abre el editor con algo así:
# pick a1b2c3d WIP
# pick d4e5f6g arreglé
# pick g7h8i9j WIP otra vez
# pick j0k1l2m AHORA SÍ FUNCIONA
# pick m3n4o5p revert de lo anterior
# pick p6q7r8s revert del revert
# pick s9t0u1v esto tampoco funciona
# pick v2w3x4y ya sé qué era
# pick y5z6a7b feat: agregar búsqueda

# Comandos disponibles:
# pick   = usa el commit tal como está
# reword = usa el commit pero cambia el mensaje
# edit   = usa el commit pero pausa para modificar archivos
# squash = combina con el commit anterior (conserva los mensajes)
# fixup  = combina con el anterior (descarta el mensaje)
# drop   = elimina el commit completamente

# Lo que haría Oliver con el historial de Script Kitty:
# squash a1b2c3d WIP
# squash d4e5f6g arreglé
# squash g7h8i9j WIP otra vez
# squash j0k1l2m AHORA SÍ FUNCIONA
# squash m3n4o5p revert de lo anterior
# squash p6q7r8s revert del revert
# squash s9t0u1v esto tampoco funciona
# squash v2w3x4y ya sé qué era
# pick   y5z6a7b feat: agregar búsqueda
# → Combina todos en UN solo commit limpio

# Rebase para actualizar tu branch con main:
git checkout feature/mi-branch
git rebase main
# Mueve tus commits "encima" de main (historial lineal)
# vs git merge que crea un commit de merge
```

### Rebase vs Merge — El Gran Debate

```
ANTES (main avanzó mientras trabajabas en feature):

main:    A ── B ── C ── D
                    \
feature:             E ── F ── G (tu trabajo)

MERGE:
main:    A ── B ── C ── D ─────────── H (merge commit)
                    \               /
feature:             E ── F ── G ──

REBASE:
main:    A ── B ── C ── D ── E' ── F' ── G'
(historia lineal, sin merge commit, más limpia)
```

> **La regla de oro del rebase:** Nunca hagas rebase de commits que ya están en un repositorio compartido (que otros ya tienen). El rebase reescribe los commits — si otros ya los tienen, sus historias divergen y el caos reina. Rebase es para limpiar tu trabajo **local** antes de push.

---

*20 minutos después...*

**Script Kitty:** 😊 *"Oliver... el historial ahora tiene UN solo commit que dice 'feat: agregar búsqueda con filtros'. Limpio. Profesional."*

**Oliver:** 🐱 *"Así es como debía verse desde el principio."*

**Script Kitty:** 😊 *"¿Y Pixel Paws ya no va a decir que soy un gato borracho?"*

**Oliver:** 🐱 *"Sobre tu código. Sobre otras cosas no puedo prometerte nada."*

---

# 🎬 EPISODIO 9: Cherry-Pick — "Solo Quiero ESE Commit"

*Viernes, 4:33 PM.*

---

**Script Kitty:** 🤔 *"Oliver, tengo un dilema filosófico."*

**Oliver:** 🐱 *"No tengo tiempo para filosofía son las 4:30."*

**Script Kitty:** 🤔 *"En mi branch de `feature/mega-dashboard` hay 47 commits. Pero uno de ellos arregla un bug crítico que TAMBIÉN afecta a `main`. No quiero hacer merge de todo el feature, solo quiero ese UN commit."*

**Oliver:** 🐱 *"Eso no es filosofía. Eso es cherry-pick."*

---

### Git Cherry-Pick — Robar un Commit Específico

```bash
# SITUACIÓN: tienes un commit en otra branch que necesitas en main

# Paso 1: Encuentra el hash del commit que quieres
git log feature/mega-dashboard --oneline
# abc1234 fix: corregir cálculo de descuentos ← ESTE
# def5678 feat: agregar gráfica de barras
# ghi9012 WIP: dashboard en progreso

# Paso 2: Aplica ese commit específico en tu branch actual
git checkout main
git cherry-pick abc1234
# [main xyz9876] fix: corregir cálculo de descuentos

# Cherry-pick múltiples commits
git cherry-pick abc1234 def5678

# Cherry-pick de un rango (excluyendo el primero)
git cherry-pick abc1234..ghi9012

# Cherry-pick sin commitear automáticamente (para revisar antes)
git cherry-pick abc1234 --no-commit
git status  # Ves los cambios antes de commitear
git commit -m "cherry-pick: fix del cálculo de descuentos"

# Si hay conflictos durante el cherry-pick:
# Resuelve los conflictos, luego:
git cherry-pick --continue
# O cancela:
git cherry-pick --abort
```

---

*5 minutos después...*

**Script Kitty:** 😊 *"El fix está en main y el mega-dashboard sigue en su branch sin merge."*

**Oliver:** 🐱 *"Exacto."*

**Script Kitty:** 😊 *"Git es increíble."*

**Oliver:** 🐱 *"Git es una herramienta. Tú eres el que aprendió a usarla."*

**Script Kitty:** 😊 *"...¿me acabas de dar un cumplido, Oliver?"*

**Oliver:** 🐱 *"No. Ve a casa."*

---

# 🎬 EPISODIO 10: Tags & Releases

*La startup lanzó su primera versión pública.*

---

**Script Kitty:** 🥳 *"¡OLIVER! ¡V1.0.0 EN PRODUCCIÓN! ¿Cómo marco este momento histórico en Git?"*

**Oliver:** 🐱 *"Con un tag."*

```bash
# Tags — marcadores permanentes en la historia

# Tag simple (lightweight)
git tag v1.0.0

# Tag anotado (recomendado — incluye metadata)
git tag -a v1.0.0 -m "Release v1.0.0 - Primera versión pública"

# Tag en un commit específico (no el actual)
git tag -a v0.9.0 abc1234 -m "Beta release"

# Ver todos los tags
git tag
git tag -l "v1.*"   # Filtrar por patrón

# Ver detalles de un tag anotado
git show v1.0.0

# Subir tags a GitHub (no se suben con git push normal)
git push origin v1.0.0        # Un tag específico
git push origin --tags         # Todos los tags

# Eliminar un tag
git tag -d v1.0.0             # Local
git push origin :refs/tags/v1.0.0  # Remoto

# Volver al estado de un tag específico
git checkout v0.9.0
```

### Semantic Versioning (SemVer) — El Estándar

```
v MAJOR . MINOR . PATCH
v  1   .   2   .   3

MAJOR: cambios que rompen compatibilidad (breaking changes)
MINOR: nuevas funcionalidades compatibles hacia atrás
PATCH: correcciones de bugs

Ejemplos:
v1.0.0 → v1.0.1  (fix de bug)
v1.0.1 → v1.1.0  (nueva feature)
v1.1.0 → v2.0.0  (cambio que rompe la API)

Pre-releases:
v2.0.0-alpha.1    (alpha, todavía en desarrollo)
v2.0.0-beta.3     (beta, casi lista)
v2.0.0-rc.1       (release candidate, casi casi)
```

---

# 🎬 EPISODIO 11: Hooks — "Subí Código con 47 Errores de Linting"

*Lunes, 9:15 AM. Hay 47 comentarios de Code Review.*

---

**Script Kitty:** 😤 *"Oliver, Pixel Paws me dejó 47 comentarios en el PR y todos son del estilo 'falta un punto y coma', 'esta variable no tiene tipo', 'hay un console.log aquí'. ¡COSAS DE LINTING! ¡No debí haber subido eso!"*

**Oliver:** 🐱 *"Exacto. No debiste. Para eso existen los Git Hooks."*

---

### Git Hooks — Automatización en Cada Acción de Git

Los hooks son scripts que Git ejecuta automáticamente en momentos específicos: antes de un commit, antes de un push, después de un merge, etc.

```bash
# Los hooks viven en .git/hooks/
ls .git/hooks/
# applypatch-msg.sample
# commit-msg.sample
# pre-commit.sample       ← El más usado
# pre-push.sample         ← El segundo más usado
# prepare-commit-msg.sample

# Para activar un hook, copia el .sample y quítale el .sample:
cp .git/hooks/pre-commit.sample .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### El Hook Que Habría Salvado a Script Kitty

```bash
# .git/hooks/pre-commit
#!/bin/bash

echo "🔍 Ejecutando linting antes del commit..."

# Ejecuta ruff (linter de Python ultrarrápido)
if ! ruff check .; then
    echo "❌ Errores de linting encontrados. Arréglelos antes de commitear."
    exit 1  # Exit code 1 = cancela el commit
fi

# Ejecuta type checking
if ! mypy src/ --ignore-missing-imports; then
    echo "❌ Errores de tipos encontrados."
    exit 1
fi

echo "✅ Linting pasado. Procediendo con el commit."
exit 0  # Exit code 0 = permite el commit
```

### Pre-commit — El Estándar de la Industria

```bash
# En lugar de mantener hooks manualmente, usa pre-commit:
pip install pre-commit

# Crea .pre-commit-config.yaml en la raíz del proyecto:
```

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.4.4
    hooks:
      - id: ruff            # Linting
      - id: ruff-format     # Formateo automático

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.10.0
    hooks:
      - id: mypy
        args: [--ignore-missing-imports]

  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace    # Elimina espacios al final
      - id: end-of-file-fixer      # Asegura línea final
      - id: check-json             # Valida JSON
      - id: check-yaml             # Valida YAML
      - id: detect-private-key     # ¡DETECTA KEYS PRIVADAS! 🔐
      - id: no-commit-to-branch
        args: ['--branch', 'main']  # Previene commits directo a main
```

```bash
# Instala los hooks
pre-commit install
# pre-commit installed at .git/hooks/pre-commit

# Ahora cada git commit ejecuta todos los checks automáticamente
# Y si algo falla, el commit se cancela

# Ejecutar manualmente en todos los archivos:
pre-commit run --all-files
```

> 🔐 **Zero Trust en hooks:** El hook `detect-private-key` de pre-commit escanea cada commit buscando patrones que parecen claves privadas. Si Script Kitty lo hubiera tenido instalado, el Episodio 4 nunca habría pasado.

---

*Al final del día, Script Kitty tiene 0 comentarios de linting en su siguiente PR.*

**Script Kitty:** 😎 *"Oliver... pre-commit es magia."*

**Oliver:** 🐱 *"Es automatización. La magia es para los que no saben qué están haciendo."*

**Script Kitty:** 😎 *"Y Pixel Paws solo tiene UN comentario ahora."*

**Oliver:** 🐱 *"¿Cuál?"*

**Script Kitty:** 😌 *"Que el nombre de mi función es confuso."*

**Oliver:** 🐱 *"...Pixel Paws tiene razón."*

---

# 🎬 EPISODIO 12: GitHub — PRs, Issues y Code Review

![GitHub collaboration](https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80)

*El equipo creció. Ahora hay 5 devs.*

---

**Script Kitty:** 🤔 *"Oliver, ahora somos 5 personas. Todos commiteamos en main directamente y es un caos total. ¿Cómo trabajamos en equipo de verdad?"*

**Oliver:** 🐱 *"Pull Requests. Branch protection. Code review. La santísima trinidad del trabajo en equipo."*

---

### Branch Protection Rules — La Ley Suprema

```
En GitHub → Settings → Branches → Add rule:

Branch name pattern: main

✅ Require a pull request before merging
✅ Require approvals: 1 (mínimo)
✅ Require status checks to pass before merging
✅ Require branches to be up to date before merging
✅ Restrict who can push to matching branches
❌ Allow force pushes   ← DESACTIVADO (recuerda el Episodio 7)
❌ Allow deletions      ← DESACTIVADO
```

Con estas reglas, **nadie puede hacer push directo a main**. Todo debe pasar por un Pull Request con al menos una aprobación.

### El Flujo Completo de un PR

```bash
# 1. Crea tu branch
git checkout main
git pull
git checkout -b feature/sistema-de-notificaciones

# 2. Desarrolla tu feature
# ... código, commits, más código ...
git add .
git commit -m "feat: implementar notificaciones push"

# 3. Sube tu branch a GitHub
git push -u origin feature/sistema-de-notificaciones

# 4. GitHub muestra automáticamente un botón "Compare & pull request"
# O crea el PR desde la interfaz web

# 5. El PR incluye:
# - Título descriptivo: "feat: Sistema de notificaciones push para mobile"
# - Descripción con:
#   - Qué hace este PR
#   - Por qué se necesita
#   - Cómo probarlo
#   - Screenshots si hay UI
#   - Checklist de cosas a revisar

# 6. El equipo hace code review
# 7. Se corrigen los comentarios
# 8. Se aprueba
# 9. Se hace merge
```

### La Plantilla de PR Perfecta

```markdown
## ¿Qué hace este PR?
Implementa el sistema de notificaciones push para la app móvil.
Los usuarios ahora reciben alertas cuando su pedido cambia de estado.

## ¿Por qué?
Issue #234 - Los usuarios se quejaban de no saber el estado de sus pedidos.

## Cambios principales
- Nuevo modelo `Notification` en models.py
- Endpoint POST /api/notifications/subscribe
- Servicio de envío de push con Firebase FCM
- Tests unitarios con 95% de cobertura

## Cómo probarlo
1. `git checkout feature/notificaciones`
2. `pip install -r requirements.txt`
3. Configura `FIREBASE_KEY` en `.env`
4. `pytest tests/test_notifications.py -v`

## Screenshots
[captura de pantalla de la notificación en el móvil]

## Checklist
- [x] Tests agregados
- [x] Documentación actualizada
- [x] No hay credenciales hardcodeadas
- [x] Funciona en staging
```

### Code Review — Cómo Dar y Recibir Feedback

```markdown
# Como reviewer, comenta específicamente:

# ❌ Comentario malo:
"Este código está mal"

# ✅ Comentario bueno:
"Esta función hace dos cosas: valida el email Y guarda en DB.
Sugiero separar en validate_email() y save_user() para mejor
testabilidad. Ver principio de responsabilidad única (SRP)."

# Para aprobar:
# "LGTM (Looks Good To Me) ✅ - muy buen trabajo con el manejo de errores"

# Para bloquear:
# "Request changes - hay una race condition en la línea 47 cuando
# dos usuarios crean cuenta simultáneamente con el mismo email"
```

### Issues — El Tracking de Trabajo

```markdown
# Título: [TIPO] Descripción concisa del problema o feature

# Para bugs:
[BUG] El precio con IVA se muestra como negativo en Safari

**Descripción:** Al aplicar descuento en Safari 17+, el precio final
muestra valores negativos.

**Pasos para reproducir:**
1. Abre el carrito en Safari
2. Aplica el cupón "DESC20"
3. El precio muestra -$23.00 en lugar de $92.00

**Comportamiento esperado:** Precio positivo con descuento aplicado
**Comportamiento actual:** Precio negativo
**Entorno:** Safari 17.4, macOS Ventura, iPhone 15

**Posible causa:** parseFloat() se comporta diferente en WebKit con números
formateados con la coma como separador decimal.

# Para features:
[FEATURE] Agregar exportación de pedidos a CSV

**Como** administrador de la tienda
**Quiero** exportar la lista de pedidos a CSV
**Para** poder analizar ventas en Excel sin acceso a la base de datos

**Criterios de aceptación:**
- [ ] Botón "Exportar CSV" en el panel de admin
- [ ] El CSV incluye: id, fecha, cliente, productos, total
- [ ] Funciona con filtros de fecha aplicados
- [ ] Descarga automáticamente en el navegador
```

---

# 🎬 EPISODIO 13: GitHub Actions — CI/CD Desde Cero

*El mismo día del lanzamiento de v2.0.0...*

---

**Script Kitty:** 😱 *"OLIVER. Subí código que rompe los tests a main. Los tests no están corriendo automáticamente. El build de producción está fallando."*

**Oliver:** 🐱 *"Eso es porque no tienes CI/CD. Hoy lo configuramos."*

**Script Kitty:** 🤔 *"¿CI/CD? ¿Es una enfermedad?"*

**Oliver:** 🐱 *"Continous Integration / Continuous Deployment. Cada vez que haces push, una máquina en la nube corre tus tests automáticamente. Si fallan, el deploy se cancela."*

**Script Kitty:** 🤔 *"¿Una máquina que corre mis tests por mí?"*

**Oliver:** 🐱 *"Y que despliega a producción automáticamente si todo pasa."*

**Script Kitty:** 😍 *"QUIERO ESO."*

---

### GitHub Actions — El Motor de CI/CD de GitHub

```yaml
# .github/workflows/ci.yml
# Este archivo define el pipeline de CI/CD

name: CI/CD Pipeline

on:                           # Cuándo se ejecuta
  push:
    branches: [ main ]        # En cada push a main
  pull_request:
    branches: [ main ]        # En cada PR hacia main

jobs:
  test:                       # Job 1: Ejecutar tests
    runs-on: ubuntu-latest    # Máquina virtual en la nube
    
    steps:
      - name: 📥 Checkout del código
        uses: actions/checkout@v4

      - name: 🐍 Configurar Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.14'
          cache: 'pip'        # Cachea dependencias para velocidad

      - name: 📦 Instalar dependencias
        run: |
          pip install uv
          uv sync

      - name: 🔍 Linting con Ruff
        run: uv run ruff check .

      - name: 🔒 Type checking con mypy
        run: uv run mypy src/ --ignore-missing-imports

      - name: 🧪 Ejecutar tests
        run: uv run pytest tests/ -v --cov=src --cov-report=xml
        env:
          DATABASE_URL: sqlite:///./test.db
          SECRET_KEY: test-secret-key-only-for-ci

      - name: 📊 Subir cobertura a Codecov
        uses: codecov/codecov-action@v4
        with:
          file: coverage.xml

  security:                   # Job 2: Escaneo de seguridad
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: 🔐 Escanear dependencias vulnerables
        run: |
          pip install safety
          safety check
      
      - name: 🕵️ Escanear secrets en el código
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
          base: main

  deploy:                     # Job 3: Deploy a producción
    runs-on: ubuntu-latest
    needs: [test, security]   # Solo si test Y security pasaron
    if: github.ref == 'refs/heads/main'  # Solo en push a main
    
    steps:
      - uses: actions/checkout@v4
      
      - name: 🐳 Build Docker image
        run: docker build -t mi-app:${{ github.sha }} .
      
      - name: 🚀 Deploy a producción
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}  # Secret de GitHub
        run: |
          echo "Deployando versión ${{ github.sha }}..."
          # Tu comando de deploy aquí (kubectl, docker push, etc.)
```

### Los Secretos en GitHub Actions

```bash
# Las variables sensibles NO van en el yml
# Van en: GitHub repo → Settings → Secrets and variables → Actions

# Agregar un secret:
# Name: DATABASE_URL
# Value: postgresql://user:password@host:5432/db

# En el yml, se referencian así:
# ${{ secrets.DATABASE_URL }}
# GitHub las inyecta como variables de entorno
# Nunca aparecen en los logs (se ven como ***)
```

### Workflows Comunes para el Equipo

```yaml
# Notificación a Slack cuando el deploy falla:
- name: 🔔 Notificar a Slack si el deploy falla
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "❌ Deploy fallido en ${{ github.repository }}",
        "blocks": [{
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Deploy fallido* en `${{ github.ref }}` por @${{ github.actor }}"
          }
        }]
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

---

*Una semana después. El pipeline está funcionando.*

**Script Kitty:** 😎 *"Oliver. Esta semana el pipeline rechazó 3 de mis PRs automáticamente."*

**Oliver:** 🐱 *"¿Mal?"*

**Script Kitty:** 😎 *"¡Bien! Porque los tests fallaban por razones reales. Los arreglé antes del merge. Ningún bug llegó a producción."*

**Oliver:** 🐱 *"...Eso es exactamente para qué sirve el CI/CD."*

**Script Kitty:** 😎 *"¿Estás orgulloso de mí?"*

**Oliver:** 🐱 *"Los gatos no sentimos orgullo."*

**Script Kitty:** 😎 *"Tu cola está moviéndose."*

**Oliver:** 🐱 *"El aire acondicionado."*

---

# 🎬 EPISODIO 14: El Flujo Profesional — GitFlow y Trunk-Based

*Mes 6. Startup Felina ahora tiene 15 devs.*

---

**Oliver:** 🐱 *"Script Kitty. Eres el tech lead del equipo nuevo. Necesitas definir cómo van a usar Git los 5 devs que entran la próxima semana."*

**Script Kitty:** 😯 *"Yo... ¿soy el Oliver de ellos?"*

**Oliver:** 🐱 *"Dios nos ampare. Pero sí."*

---

### Los Dos Flujos Dominantes en 2026

#### Trunk-Based Development (Recomendado para startups)

```
main (trunk): A ── B ── C ── D ── E ── F ── G
               │         │         │
            deploy     deploy    deploy
            (cada       (cada     (cada
            commit)     commit)   commit)

Reglas:
- Branches de muy corta vida (máximo 1-2 días)
- Features grandes → Feature Flags en el código
- Deploy continuo a producción
- Requiere: tests sólidos, CI/CD maduro
```

```bash
# Feature flag en código (permite deployar sin activar el feature):
ENABLE_NEW_CHECKOUT = os.getenv("ENABLE_NEW_CHECKOUT", "false") == "true"

if ENABLE_NEW_CHECKOUT:
    return nuevo_checkout()
else:
    return checkout_actual()

# En producción, activas el feature con una variable de entorno
# Sin nuevo deploy — solo cambias la config
```

#### GitFlow (Para software con versiones definidas)

```
hotfix:  ────────────────────── H ──────
               ↑                ↑
main:    ── 1.0.0 ──────── 1.0.1 ── 2.0.0
               ↑                         ↑
release:       └── R1 ──────────────────►┘
               ↑
develop: ── A ── B ── C ── D ── E ── F ──
               ↑       ↑
feature:       └─ F1 ──┘   └─ F2 ──┘
```

```bash
# GitFlow con git-flow extension:
brew install git-flow

# Inicializar:
git flow init

# Branches en GitFlow:
# main/master  — solo releases estables
# develop      — integración continua del trabajo
# feature/*    — nuevas funcionalidades
# release/*    — preparación de releases
# hotfix/*     — fixes urgentes en producción

# Crear un feature:
git flow feature start sistema-de-busqueda
# Equivale a: git checkout -b feature/sistema-de-busqueda develop

# Terminar un feature (merge a develop):
git flow feature finish sistema-de-busqueda

# Crear un release:
git flow release start 1.2.0
# ... bump de versiones, changelog, últimos fixes ...
git flow release finish 1.2.0
# Merge a main Y develop, crea el tag v1.2.0 automáticamente

# Hotfix urgente:
git flow hotfix start fix-vulnerabilidad-critica
# ... arreglalo ...
git flow hotfix finish fix-vulnerabilidad-critica
# Merge a main Y develop, crea tag
```

### ¿Cuál Elegir?

| Criterio | Trunk-Based | GitFlow |
|---|---|---|
| **Tamaño del equipo** | Cualquiera | Mediano-grande |
| **Tipo de software** | Web/SaaS/APIs | Apps con versiones |
| **Frecuencia de release** | Continua | Programada |
| **Requiere** | CI/CD sólido | Disciplina de branching |
| **Ejemplos** | Google, Facebook | Proyectos open source, apps |

> 💡 **La recomendación de Oliver para startups:** Trunk-Based Development + Feature Flags. Deploy continuo, historial limpio, equipos pequeños pueden moverse rápido. Solo migra a GitFlow si tienes múltiples versiones soportadas simultáneamente.

---

# 🎁 BONUS: Los Alias de Oliver — Trabaja Como un Pro

*Script Kitty encuentra la terminal de Oliver. Los comandos son diferentes.*

---

**Script Kitty:** 🤔 *"Oliver, ¿por qué tus comandos son más cortos que los míos?"*

**Oliver:** 🐱 *"Alias. Atajos. Años de pereza productiva."*

---

```bash
# Agrega esto a tu ~/.gitconfig o ejecútalos uno por uno:

[alias]
    # Navegación y estado
    s = status
    st = status --short --branch
    l = log --oneline --graph --all --decorate
    ll = log --oneline -20

    # Branches
    br = branch
    bra = branch -a
    co = checkout
    sw = switch
    new = checkout -b

    # Cambios
    d = diff
    ds = diff --staged
    a = add
    aa = add .
    ap = add -p          # Interactive staging (el más poderoso)

    # Commits
    c = commit
    cm = commit -m
    ca = commit --amend  # Modificar el último commit
    can = commit --amend --no-edit  # Amend sin cambiar el mensaje

    # Push/Pull
    p = push
    pf = push --force-with-lease  # El force push seguro
    pl = pull
    plr = pull --rebase

    # Utilidades
    undo = reset --soft HEAD~1    # Deshace el último commit (mantiene cambios)
    unstage = reset HEAD          # Saca archivos del staging
    discard = checkout --          # Descarta cambios en un archivo
    aliases = config --get-regexp alias  # Lista todos los alias

    # El alias definitivo: historial visual bonito
    graph = log --oneline --graph --all --decorate --color

    # Ver los últimos N commits de un archivo:
    file-log = log --follow --oneline

    # Limpiar branches locales ya mergeadas:
    cleanup = "!git branch --merged main | grep -v main | xargs git branch -d"
```

### Los Comandos que Todo Dev Senior Tiene Memorizados

```bash
# Modificar el último commit (sin crear uno nuevo)
git commit --amend -m "feat: mensaje corregido"

# Agregar más cambios al último commit (sin crear uno nuevo)
git add archivo-olvidado.py
git commit --amend --no-edit

# Ver qué está en staging de forma visual
git diff --staged --stat

# Buscar en el historial de commits
git log --all --grep="bug de pagos"

# Ver todos los cambios de un archivo a lo largo del tiempo
git log --follow -p -- archivo.py

# Encontrar el commit donde se introdujo una línea específica
git log -S "texto_que_buscas" --source --all

# Descartar TODOS los cambios locales (¡cuidado!)
git checkout .
# ó en versiones modernas:
git restore .

# Ver solo los archivos que cambiaron entre dos branches
git diff --name-only main feature/mi-branch

# Guardar el stash con un mensaje Y incluyendo archivos nuevos
git stash push -u -m "WIP: nueva feature de búsqueda"

# Aplicar el último stash sin eliminarlo del stack
git stash apply

# Pull que nunca crea commits de merge
git pull --rebase --autostash

# El comando que salva vidas: ver TODOS los movimientos del HEAD
git reflog
```

---

# 🏁 EPÍLOGO: De Script Kitty a Oliver

*Un año después. Startup Felina tiene 50 empleados. Script Kitty es Senior Dev.*

---

**Script Kitty Nuevo Junior:** 😱 *"SCRIPT KITTY! Hice `git push --force` en main y sobreescribí los commits de—"*

**Script Kitty:** 🐱 *[Con calma sobrehumana]* *"¿Cuándo lo hiciste?"*

**Script Kitty Nuevo Junior:** 😱 *"Hace 10 minutos."*

**Script Kitty:** 🐱 *"Bien. Tenemos el reflog. Puedo recuperarlo. No toques nada más."*

*Script Kitty abre la laptop. En el fondo, Oliver observa con una taza de café y una sonrisa diminuta que intenta ocultar.*

**Oliver:** 🐱 *[En voz baja]* *"Bien hecho, Script Kitty."*

**Script Kitty:** 🐱 *[Sin voltear]* *"Lo aprendí de alguien."*

---

### Lo Que Git Realmente Te Enseña

Git no es solo un conjunto de comandos. Es una forma de pensar sobre el trabajo:

* 📸 **Cada commit es una fotografía** — haz fotos frecuentes, con buenos títulos
* 🌿 **Cada branch es un experimento** — experimenta sin miedo, los errores son reversibles
* 🤝 **El code review es respeto** — alguien más va a leer tu código, escríbelo para ellos
* 🕰️ **La historia importa** — un historial limpio es documentación gratis
* 🔐 **Zero Trust hasta en el repo** — trata cada secreto como si ya estuviera comprometido

### El Cheatsheet Final de Oliver

```bash
# === CONFIGURACIÓN ===
git config --global user.name "Nombre"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main

# === INICIAR ===
git init                    # Nuevo repo
git clone URL               # Clonar repo existente

# === EL DÍA A DÍA ===
git status                  # ¿Qué está pasando?
git add .                   # Agregar todo al staging
git add -p                  # Agregar interactivamente (el mejor)
git commit -m "mensaje"     # Guardar con mensaje
git push                    # Subir al remoto
git pull --rebase           # Bajar del remoto (limpio)

# === BRANCHES ===
git checkout -b nombre      # Crear y cambiar branch
git checkout main           # Cambiar a main
git merge nombre            # Merge branch al actual
git branch -d nombre        # Eliminar branch

# === DESHACER ===
git stash                   # Guardar temporalmente
git stash pop               # Recuperar del cajón
git reset --soft HEAD~1     # Deshacer commit (mantiene cambios)
git revert abc1234          # Revertir un commit (seguro)
git reflog                  # VER TODOS LOS MOVIMIENTOS (salvavidas)

# === INVESTIGAR ===
git log --oneline --graph   # Historial visual
git blame archivo.py        # ¿Quién escribió cada línea?
git diff main feature/x     # ¿Qué cambió entre branches?
git bisect start            # Búsqueda binaria del bug

# === LOS AVANZADOS ===
git rebase -i HEAD~5        # Limpiar historial interactivamente
git cherry-pick abc1234     # Robar un commit específico
git push --force-with-lease # Force push seguro (con verificación)
```

---

*Oliver cierra su laptop. Son las 6:00 PM. Fin del día.*

**Script Kitty:** 🐱 *"Oliver. Gracias. Por todo."*

**Oliver:** 🐱 *"El día que no necesites que te salve, sabrás que aprendiste."*

**Script Kitty:** 🐱 *"¿Y hoy?"*

**Oliver:** 🐱 *"Hoy solo tuve que intervenir una vez."*

**Script Kitty:** 🐱 *"Era un error de un Junior—"*

**Oliver:** 🐱 *"Era tu error de hace un año. Tú lo sabías resolver."*

*Script Kitty sonríe.*

**Script Kitty:** 🐱 *"...Sí. Lo sabía."*

---

## 📚 Recursos Adicionales

* 🌐 [**Pro Git Book (gratis)**](https://git-scm.com/book/en/v2) — El libro oficial, completo y gratuito
* 🎮 [**Learn Git Branching**](https://learngitbranching.js.org/) — Aprende branches de forma visual e interactiva
* 🎮 [**Oh My Git!**](https://ohmygit.org/) — Juego que enseña Git (en serio)
* 📖 [**Conventional Commits**](https://www.conventionalcommits.org/) — El estándar de mensajes de commit
* 🔧 [**pre-commit hooks**](https://pre-commit.com/) — Automatiza el linting antes de commitear
* 📋 [**GitHub Skills**](https://skills.github.com/) — Cursos interactivos oficiales de GitHub
* 🐙 [**GitHub Actions Marketplace**](https://github.com/marketplace?type=actions) — Miles de actions pre-construidas

---

*Escrito por **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*Con la colaboración narrativa de Oliver 🐱 y Script Kitty 😱, residentes de Startup Felina S.A.*

</div>

---
---

<div class="lang-en">

# 🐱 Git with Oliver: From Script Kitty to Hacker Cat

**By Jafet Brito** · Security Researcher · *Published June 11, 2026*

---

> *"Git isn't version control. Git is a time machine with a keyboard."*
> — Oliver the Hacker Cat, Senior Dev, Felina Startup Inc.

> *"I just wanted to save the file..."*
> — Script Kitty, minutes before deleting the production repository

---

## 🏢 The Universe: Felina Startup Inc.

Welcome to **Felina Startup Inc.**, the most chaotic tech startup in the known universe. Two characters will teach you everything you need to know about Git:

**🐱 Oliver** — The Senior Developer. Five years of experience, black coffee no sugar, and infinite patience only a cat can have. His favorite phrase: *"There's a command for that."*

**😱 Script Kitty** — The Junior Developer. Just graduated, lots of enthusiasm, zero fear, and the supernatural ability to find the most catastrophic way to do anything. Every time they open the terminal, somewhere in the world, a server trembles.

Each episode is a new crisis. Oliver arrives just in time. And you'll learn Git watching the world get saved, one commit at a time.

---

## 🗺️ Adventure Map

```
EPISODE 0:  What the heck is Git? (The revelation)
EPISODE 1:  The First Commit — "I saved the file wrong"
EPISODE 2:  Branches — "I edited main by accident"
EPISODE 3:  Merge — "I have conflicts in EVERYTHING!"
EPISODE 4:  Push & Pull — "I pushed my password to GitHub"
EPISODE 5:  Stash — "I lost my work without committing"
EPISODE 6:  Log & Diff — "Who broke this?"
EPISODE 7:  Reset & Revert — "I deleted the production repo"
EPISODE 8:  Rebase — "The history looks like a Christmas tree"
EPISODE 9:  Cherry-Pick — "I only want THAT commit"
EPISODE 10: Tags & Releases — "Which version is in production?"
EPISODE 11: Hooks — "I pushed code with 47 linting errors"
EPISODE 12: GitHub — PRs, Issues and Code Review
EPISODE 13: GitHub Actions — CI/CD from scratch
EPISODE 14: Professional Workflow — GitFlow and Trunk-Based
BONUS:      Oliver's Aliases — Work like a pro
```

---

## 🎬 EPISODE 0: What the Heck Is Git?

*Monday, 9:03 AM. Script Kitty runs into the office.*

---

**Script Kitty:** 😱 *"OLIVER! I worked all weekend on the new feature and now I can't find the version that worked! I overwrote everything!"*

**Oliver:** 🐱 *"Do you have Git?"*

**Script Kitty:** 😶 *"What's Git?"*

*Oliver drinks his black coffee. Slowly. Eyes closed.*

**Oliver:** 🐱 *"Sit down. You're not touching anything today."*

---

### The Analogy That Changes Everything

Imagine your code project is a novel you're writing.

**Without Git:** You have a file called `novel_final.docx`. Then `novel_final_THIS.docx`. Then `novel_final_THIS_v2_GOOD.docx`. Then `novel_final_THIS_v2_GOOD_backup_for_real.docx`.

*We've all been there. It's horrible.*

**With Git:** You have ONE file. But Git remembers **every version that ever existed**, who wrote it, when, and why. You can go back to any point in history. You can work on multiple parallel versions. You can combine them.

Git is literally **a time machine for your code.**

### Core Concepts

```
Your code project
         │
         ▼
┌─────────────────────────────────────────────────────┐
│                    GIT REPOSITORY                    │
│                                                      │
│  Working Directory  →  Staging Area  →  Repository  │
│  (your files)          (prepared)      (saved)       │
│                                                      │
│  git add ──────────────────────►                    │
│                    git commit ──────────────────►   │
│                                                      │
│  ◄──────────────── git checkout ────────────────    │
└─────────────────────────────────────────────────────┘
```

### Setup

```bash
# Install and configure Git
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
```

---

## 🎬 EPISODE 1: The First Commit

```bash
# Initialize repo
git init

# Check status (use this CONSTANTLY)
git status

# Stage changes
git add README.md
git add .           # All files

# Commit
git commit -m "feat: initialize project with README and main"

# View history
git log --oneline
```

### Good Commit Messages (Conventional Commits)

```bash
# ❌ Script Kitty's commits:
git commit -m "changes"
git commit -m "fixed stuff"
git commit -m "aaaaaaaaa"

# ✅ Oliver's commits:
git commit -m "feat: add Google OAuth login"
git commit -m "fix: correct tax calculation in checkout"
git commit -m "docs: update README with setup instructions"
git commit -m "test: add payment module tests"
```

### The .gitignore — What Git Must Forget

```gitignore
# Environment variables and secrets — CRITICAL
.env
*.key
secrets.json

# Dependencies
node_modules/
venv/
__pycache__/

# OS files
.DS_Store
Thumbs.db

# Build files
dist/
build/
```

> 🔐 **Script Kitty's most common error #1:** Pushing `.env` with passwords and API keys to GitHub. Once it's in history, **it cannot be easily deleted**. Always create `.gitignore` first.

---

## 🎬 EPISODE 2: Branches

```bash
# Create and switch to a new branch
git checkout -b feature/login-google
# or modern syntax:
git switch -c feature/login-google

# Work on your feature (doesn't affect main)
git commit -m "feat: add OAuth with Google"

# Return to main (untouched)
git checkout main

# The Golden Rule:
# NEVER work directly on main
# Always create a branch, work there, merge when ready
```

---

## 🎬 EPISODE 3: Merge & Conflicts

```bash
# Merge a branch into main
git checkout main
git merge feature/my-branch

# When there's a conflict, the file looks like:
# <<<<<<< HEAD
# price = 110    ← your version
# =======
# price = 90     ← branch version
# >>>>>>> feature/script-kitty

# Resolution steps:
# 1. Decide which version is correct
# 2. Delete ALL markers (<<<<<<, =======, >>>>>>>)
# 3. Leave only the correct code
# 4. git add resolved-file.py
# 5. git commit

# Abort a merge if you regret it:
git merge --abort
```

---

## 🎬 EPISODE 4: Push & Pull

```bash
# Connect local repo to GitHub
git remote add origin https://github.com/user/repo.git
git push -u origin main

# Daily sync
git push                    # Upload commits to remote
git pull --rebase           # Download changes (clean history)
git fetch                   # Download without applying

# If you pushed credentials to GitHub:
# STEP 1: Rotate all credentials IMMEDIATELY
# STEP 2: Remove from history
git filter-repo --path .env --invert-paths
git push --force-with-lease origin main
```

---

## 🎬 EPISODE 5: Stash

```bash
# Save work temporarily without committing
git stash
git stash push -m "WIP: search feature with filters"  # With message
git stash -u                # Include untracked files too

# View stash
git stash list

# Recover
git stash pop               # Recover and remove from stash
git stash apply stash@{1}   # Recover specific stash
git stash drop stash@{0}    # Delete without applying
```

---

## 🎬 EPISODE 6: Log & Diff

```bash
# Investigation commands
git log --oneline --graph --all   # Visual history
git log --author="Script Kitty"   # Filter by author
git log --since="yesterday" -- pagos.py  # Recent changes to a file

# See what changed
git diff                          # Unstaged changes
git diff --staged                 # Staged changes
git blame file.py                 # Who wrote each line

# Find which commit introduced a bug (binary search)
git bisect start
git bisect bad                    # Current is broken
git bisect good v1.0.0            # This version worked
# Keep marking good/bad until Git finds the culprit
git bisect reset
```

---

## 🎬 EPISODE 7: Reset & Revert

```bash
# RESET — rewrite history (dangerous in shared repos)
git reset --soft HEAD~1    # Undo commit, keep changes in staging
git reset HEAD~1           # Undo commit, unstage changes
git reset --hard HEAD~1    # Undo commit AND discard changes

# REVERT — create a new "undo" commit (safe for shared repos)
git revert HEAD            # Safely undo last commit
git revert abc1234         # Undo specific commit

# REFLOG — the ultimate lifesaver
git reflog                 # See ALL HEAD movements
# Find lost commit hash, then:
git reset --hard abc1234   # Go back to it
```

> 🔐 **Oliver's rule:** In shared repos, **never** do `git reset --hard` + `git push --force` on public branches like `main`. Use `git revert`. Force push rewrites history and breaks everyone else's work.

---

## 🎬 EPISODE 8: Rebase

```bash
# Clean up your commits before pushing
git rebase -i HEAD~8

# In the editor, you can:
# pick   = keep commit as-is
# reword = keep commit, change message
# squash = combine with previous commit
# fixup  = combine with previous (discard message)
# drop   = delete commit completely

# Update your branch with main (linear history)
git checkout feature/my-branch
git rebase main

# Golden rule: Never rebase commits already pushed to shared repos
```

---

## 🎬 EPISODE 9: Cherry-Pick

```bash
# Get specific commit hash
git log feature/mega-dashboard --oneline
# abc1234 fix: correct discount calculation ← THIS ONE

# Apply just that commit to current branch
git checkout main
git cherry-pick abc1234

# If conflicts:
git cherry-pick --continue    # After resolving
git cherry-pick --abort       # Cancel
```

---

## 🎬 EPISODE 11: Git Hooks with pre-commit

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.4.4
    hooks:
      - id: ruff
      - id: ruff-format

  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: detect-private-key      # Detects private keys 🔐
      - id: no-commit-to-branch
        args: ['--branch', 'main']  # Prevents direct commits to main
```

```bash
pip install pre-commit
pre-commit install
# Now every git commit runs all checks automatically
```

---

## 🎬 EPISODE 13: GitHub Actions CI/CD

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.14'
      - run: pip install uv && uv sync
      - run: uv run ruff check .
      - run: uv run pytest tests/ -v --cov=src
  
  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
        run: ./deploy.sh
```

---

## 🎁 BONUS: Oliver's Aliases

```bash
# Add to ~/.gitconfig
[alias]
    s    = status
    st   = status --short --branch
    l    = log --oneline --graph --all --decorate
    co   = checkout
    new  = checkout -b
    cm   = commit -m
    ca   = commit --amend
    can  = commit --amend --no-edit
    p    = push
    pf   = push --force-with-lease
    pl   = pull --rebase
    undo = reset --soft HEAD~1
    ap   = add -p
    cleanup = "!git branch --merged main | grep -v main | xargs git branch -d"
```

---

## 🏁 The Final Cheatsheet

```bash
# SETUP
git config --global user.name "Name"
git config --global user.email "email@example.com"

# DAILY WORKFLOW
git status                  # What's happening?
git add -p                  # Interactive staging (the best)
git commit -m "message"     # Save with message
git push                    # Upload to remote
git pull --rebase           # Download from remote (clean)

# BRANCHES
git checkout -b name        # Create and switch branch
git merge name              # Merge branch to current

# UNDO
git stash                   # Save temporarily
git stash pop               # Recover from drawer
git reset --soft HEAD~1     # Undo commit (keep changes)
git revert abc1234          # Revert commit (safe)
git reflog                  # SEE ALL HEAD MOVEMENTS (lifesaver)

# INVESTIGATE
git log --oneline --graph   # Visual history
git blame file.py           # Who wrote each line?
git bisect start            # Binary search for bug

# ADVANCED
git rebase -i HEAD~5        # Clean history interactively
git cherry-pick abc1234     # Steal specific commit
git push --force-with-lease # Safe force push
```

---

## 🏁 Epilogue

*One year later. Script Kitty is Senior Dev.*

**New Junior:** 😱 *"SCRIPT KITTY! I did git push --force on main and—"*

**Script Kitty:** 🐱 *[Calm as can be]* *"When did you do it?"*

**New Junior:** 😱 *"10 minutes ago."*

**Script Kitty:** 🐱 *"Good. We have the reflog. I can recover it. Don't touch anything else."*

*In the background, Oliver watches with coffee in hand and the tiniest smile he's trying to hide.*

**Oliver:** 🐱 *[Quietly]* *"Well done, Script Kitty."*

**Script Kitty:** 🐱 *[Without turning]* *"I learned from someone."*

---

*Written by **Jafet Brito** · Security Researcher · Zero Trust Mindset*
*With narrative collaboration from Oliver 🐱 and Script Kitty 😱, residents of Felina Startup Inc.*

</div>
