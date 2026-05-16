# Asker Symfoniorkester – Python website

Página web simple, liviana y responsive para **Asker Symfoniorkester**. Está hecha solo con Python estándar para que sea fácil de abrir y correr en PyCharm sin instalar paquetes.

## Estructura

```text
app.py                 # Servidor local y rutas
views.py               # HTML de las páginas
data.py                # Contenido editable
requirements.txt       # Sin dependencias externas
static/styles.css      # Estilos blanco/negro
static/favicon.svg     # Ícono
static/images/         # Imagen usada por la página
```

## Correr en PyCharm

1. Abre la carpeta del proyecto.
2. Usa Python 3.10 o superior.
3. Ejecuta `app.py`.
4. Abre `http://127.0.0.1:5000`.

## Correr por terminal

```bash
python app.py
```

## Editar contenido

Cambia textos, concierto, contacto e imagen principal en `data.py`.

## Diseño

El sitio deja solo las secciones relevantes: inicio, concierto, unirse y contacto. Usa una sola imagen principal para cargar más rápido, diseño blanco y negro, y reglas responsive simples.
