# Asker Symfoniorkester – sitio estático para GitHub Pages

Página simple, liviana y responsive para **Asker Symfoniorkester**. El sitio se puede abrir como una página estática en **GitHub Pages** y también se puede probar localmente con el servidor Python incluido.

## Despliegue en GitHub Pages

Este repositorio ya incluye todo lo necesario para publicar desde GitHub Pages:

- `index.html` en la raíz del repositorio.
- `.nojekyll` para que GitHub Pages sirva los archivos tal como están.
- `static/styles.css`, `static/favicon.svg` y `static/images/` con las imágenes en color.
- Carpetas de compatibilidad (`konsert/`, `konserter/`, `bli-med/`, `kontakt/`) que redirigen a las secciones de la página principal.

Para desplegar:

1. En GitHub, entra a **Settings → Pages**.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona la rama que contiene estos archivos y la carpeta **/ (root)**.
4. Guarda los cambios.

## Actualizar el HTML estático

La fuente editable sigue estando en Python para no repetir contenido a mano. Después de cambiar textos en `data.py`, estructura en `views.py` o estilos en `static/styles.css`, genera de nuevo los archivos estáticos:

```bash
python3 build_static.py
```

Ese comando actualiza:

- `index.html`
- `.nojekyll`
- redirecciones estáticas en `konsert/`, `konserter/`, `bli-med/` y `kontakt/`

## Probar localmente

### Opción 1: abrir como sitio estático

Puedes abrir `index.html` directamente en el navegador o servir la carpeta con Python:

```bash
python3 -m http.server 8000
```

Luego abre `http://127.0.0.1:8000/`.

### Opción 2: servidor de desarrollo incluido

```bash
python3 app.py
```

Luego abre `http://127.0.0.1:5000/`.

## Estructura

```text
index.html             # Página estática lista para GitHub Pages
.nojekyll              # Evita procesamiento Jekyll en GitHub Pages
app.py                 # Servidor local de desarrollo
build_static.py        # Generador de archivos estáticos
views.py               # Plantillas HTML generadas por Python
data.py                # Contenido editable
requirements.txt       # Sin dependencias externas
static/styles.css      # Estilos coloridos y responsive
static/favicon.svg     # Ícono
static/images/         # Imágenes de la orquesta en color
konsert/               # Redirección estática a #concert
konserter/             # Redirección estática a #concert
bli-med/               # Redirección estática a #unirse
kontakt/               # Redirección estática a #contacto
```

## Diseño y contenido

La página empieza en la sección de la orquesta, usa todas las imágenes cuyo nombre contiene `orchestra` en un carrusel a color, incluye una sección breve de historia, una sola sección **Concert**, videos embebidos de YouTube y las secciones de unirse/contacto en el mismo scroll.
