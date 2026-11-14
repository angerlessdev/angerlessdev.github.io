# angerlessdev.github.io

Sitio personal de Angel Cancho. HTML, CSS y JavaScript sin dependencias ni build, publicado con GitHub Pages. No hace
ningún pedido a otros dominios: la fuente va alojada aquí y no hay cookies ni rastreadores.

## Páginas

- `index.html`: inicio, para negocios. Servicios con precio, trabajos, cómo trabajo, sobre mí y contacto por WhatsApp.
- `experiencia/`: para quien contrata. Trayectoria con fechas, sistemas en producción, código abierto, formación,
  herramientas y el CV en PDF (`cv/`).
- `casos/pex/` y `casos/avix/`: un caso por sistema, con la misma plantilla: el encargo, las decisiones, un diagrama y
  las cifras. Son sistemas internos: sin capturas, datos de red ni código.
- `404.html`.
- `demo-dental/`: «Dental Morro», landing de muestra para consultorios dentales (datos ficticios, `noindex`). Se genera
  desde un proyecto aparte: no se edita aquí. `demo-dental-v2/` solo redirige ahí.

## Cómo está hecho

- `styles.css`: una sola hoja para todas las páginas. Identidad de señalización vial: azul de señal, amarillo de línea
  de carril, asfalto y la letra Overpass (`fonts/`, con su licencia). El diseño está en Figma.
- `main.js`: solo la barra de WhatsApp del celular en el inicio. Sin él la página funciona igual.
- `img/`: capturas de los trabajos y la foto, en WebP; `img/og.png` es la imagen para compartir.
- La cabecera y el pie se repiten en las cinco páginas: si cambias uno, cámbialo en todas.
- Las rutas son absolutas (`/styles.css`): para verlo en local hay que servir la carpeta, por ejemplo con
  `python -m http.server`.
