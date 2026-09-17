# Predixa México — sitio

Sitio estático de una sola página. No necesita build ni dependencias.

## Publicar en GitHub Pages

1. Crea un repo (por ejemplo `predixa-site`) y sube `index.html`, `styles.css` y este README.
2. En el repo: Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, carpeta `/ (root)` → Save.
3. En un minuto queda en `https://<usuario>.github.io/predixa-site/`.
4. Si compran dominio, agréguenlo en esa misma pantalla de Pages y GitHub crea el archivo `CNAME`.

## Pendientes antes de lanzar

- **Correos de la lista de espera:** el formulario apunta a Formspree. Creen una cuenta gratis en formspree.io,
  copien el ID del formulario y reemplacen `TU_ID_AQUI` en `index.html`. Hasta entonces el botón solo muestra
  el mensaje de gracias y no guarda nada.
- **Correo de contacto:** `hola@predixa.mx` en el pie de página es un placeholder.
- **Precios de ejemplo:** el sitio usa contratos de $1 a $10 pesos que pagan $10. Ver nota en el chat.

## Editar

Todo el texto vive en `index.html`; los colores y tipografía están al inicio de `styles.css` en `:root`.
La tipografía (Archivo) se carga de Google Fonts; si prefieren no depender de eso, descárguenla y cambien el `<link>`.
