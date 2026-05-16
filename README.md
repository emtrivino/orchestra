# Asker Symfoniorkester – Python website

Sitio web simple para **Asker Symfoniorkester**, ahora hecho en Python. No usa Node, Django ni Flask porque la página es pequeña y así queda más fácil de abrir, entender y ejecutar desde PyCharm sin instalar dependencias externas.

## Estructura del proyecto

```text
app.py                 # Servidor local y rutas principales
views.py               # HTML generado por Python para cada página
data.py                # Textos, conciertos, contacto y listas editables
requirements.txt       # No requiere paquetes externos
static/
  styles.css           # Diseño blanco y negro
  favicon.svg          # Ícono del sitio
  images/              # Fotos usadas por la página
```

## Cómo correrlo en PyCharm

1. Abre esta carpeta como proyecto en PyCharm.
2. Crea o selecciona un intérprete de Python 3.10+.
3. Ejecuta `app.py`.
4. Abre la URL que muestra el servidor, normalmente:

```text
http://127.0.0.1:5000
```

## Cómo correrlo por terminal

```bash
python app.py
```

Si quieres usar un entorno virtual, también funciona:

```bash
python -m venv .venv
source .venv/bin/activate
python app.py
```

## Cómo editar el contenido

La mayoría de los cambios se hacen en `data.py`:

- `CONCERTS`: concierto principal, programa, solistas y link de boletos.
- `ABOUT_SECTIONS`: textos de la página “Om oss”.
- `BOARD`: contactos del comité.
- `NEWS`: avisos de actualidad.
- `FRONT_IMAGES`: imágenes de la portada.

## Diseño

La página usa tonos blancos y negros, con blanco como color predominante. El CSS está concentrado en `static/styles.css` para que sea fácil de modificar.
