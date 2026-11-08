# Caja de herramientas

Utilidades pequeñas, cada una en su propia página HTML. No necesitan instalación ni servidor: abre `index.html` en el navegador.

## Qué incluye

- **Dos idiomas**: botón arriba a la derecha (🇨🇴 ES / 🇺🇸 EN). Se recuerda la elección. Con `?lang=en` al final de la dirección se abre en inglés.
- **Botón de contacto** abajo a la izquierda, con enlace a tu agenda (`https://calendar.app.google/X4EQs1zwXps7g9Vu8`).
- **Funciona sin internet**: después de la primera visita (con conexión) el navegador guarda las páginas y las librerías. Se puede instalar como aplicación en el celular (menú del navegador → «Agregar a la pantalla de inicio»).
- Pensada para celular: botones grandes, teclado propio en la calculadora, zoom y mover en el convertidor de imagen.

## Carpetas

Cada herramienta está en su propia carpeta y su página se llama `index.html`, así GitHub abre `tu-sitio/calculadora/` sin escribir el nombre del archivo.

| Carpeta | Contiene |
| --- | --- |
| `index.html` (raíz) | Página principal con un botón por herramienta y un espacio para agregar enlaces |
| `calculadora/` | Calculadora científica |
| `notas/` | Notas con contador de palabras y dibujo |
| `calendario/` | Calendario, semana, día del año, festivos y días entre fechas |
| `whatsapp/` | Enlace directo de WhatsApp |
| `qr/` | Generador de QR (`libs/qr.min.js`) |
| `paletas/` | Paletas de color |
| `imagen/` | Convertidor de JPG a PNG |
| `comprimidor/` | Comprimidor de archivos (`libs/jszip.min.js`, `libs/pdf-lib.min.js`) |
| `cronometro/` | Cronómetro, temporizador y Pomodoro |
| `contrasena/` | Contraseña segura |
| `dado/` | Lanza un dado |
| `correo/` | Enlace de correo |
| `icons/`, `manifest.webmanifest`, `sw.js` | Icono, instalación como aplicación y modo sin internet |

## Cómo publicarlo en GitHub Pages

1. Sube todos los archivos a la raíz de un repositorio.
2. En el repositorio, entra a **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`.
4. Espera un minuto. La página queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Sube todas las carpetas tal como vienen, sin moverlas: los botones y los enlaces de «volver» usan rutas relativas. El modo sin internet necesita que la página se abra con `https://` (GitHub Pages ya lo hace).

Si cambias algo y no lo ves, abre la página con conexión y recárgala dos veces: la primera actualiza el guardado y la segunda lo muestra. Si haces cambios grandes, cambia el número de `VERSION` al inicio de `sw.js`.

## Cómo agregar una herramienta nueva

1. Prepara la herramienta.
2. Crea una carpeta con el nombre de la herramienta (por ejemplo `convertidor/`) y pon dentro su `index.html`. Abre el `index.html` de la raíz y busca la lista `TOOLS` al inicio del script.
3. Copia una línea y cambia sus datos:

```js
{ g: 'Escritura y diseño', n: 'Mi herramienta', d: 'Para qué sirve', h: 'convertidor/index.html' },
```

`g` es el grupo en el que aparece, `n` el nombre del botón, `d` la descripción y `h` el archivo o enlace.

También puedes pegar un enlace desde la propia página principal, en **Agregar un enlace**. Esos botones se guardan solo en el navegador donde los agregas.

## Paleta de colores

Los colores están al inicio de cada archivo, en el bloque `:root`:

```css
--black:        #0A0A0A;
--black-soft:   #111214;
--white:        #FFFFFF;
--off-white:    #F5F6F7;
--blue:         #1A365D;
--blue-light:   #2C5282;
--gray-line:    rgba(255,255,255,0.08);
--gray-line-dk: rgba(0,0,0,0.08);
--text-muted-d: rgba(255,255,255,0.6);
--text-muted-l: rgba(10,10,10,0.6);
```

Cada página sigue el tema claro u oscuro del dispositivo.

## Librerías

Todo funciona sin conexión salvo las tipografías, que vienen de Google Fonts (si no cargan se usan las del sistema).

- `comprimidor/libs/jszip.min.js` (JSZip, licencia MIT): DOCX, XLSX, PPTX y EPUB.
- `comprimidor/libs/pdf-lib.min.js` (pdf-lib, licencia MIT): PDF.
- `qr/libs/qr.min.js` (basado en QRCode de Kazuhiko Arase, licencia MIT): códigos QR.

## Traducciones

Los textos de las páginas están en español. El inglés se aplica al abrir la página con un diccionario que va dentro de cada archivo, en la línea `U.addDict({...})` del script. Si cambias un texto en español, cambia también su pareja en ese diccionario; si no, se queda en español.
