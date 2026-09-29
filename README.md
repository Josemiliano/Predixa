# Predixa México — sitio

Sitio estático de una sola página. No necesita build ni dependencias.

## Publicar en GitHub Pages

1. Crea un repo (por ejemplo `predixa-site`) y sube `index.html`, `styles.css` y este README.
2. En el repo: Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, carpeta `/ (root)` → Save.
3. En un minuto queda en `https://<usuario>.github.io/predixa-site/`.
4. Si compran dominio, agréguenlo en esa misma pantalla de Pages y GitHub crea el archivo `CNAME`.

## Activar la lista de espera

La lista usa Google Apps Script y guarda cada registro en una hoja de cálculo privada de Google.

1. Inicia sesión en [script.google.com](https://script.google.com) con `predixamx@gmail.com`, crea un proyecto y pega el contenido de `google-apps-script/Code.gs`.
2. Selecciona **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: **Yo**. Quién tiene acceso: **Cualquier persona**.
3. Autoriza Google Sheets, implementa y copia la URL que termina en `/exec`.
4. En `index.html`, reemplaza `TU_URL_DE_APPS_SCRIPT` por esa URL.
5. Envía una prueba desde el sitio. La primera inscripción crea en Google Drive la hoja **Predixa - Lista de espera**.

Si cambias `Code.gs` después, crea una versión nueva desde **Administrar implementaciones** para publicar el cambio.

## Pendientes antes de lanzar

- **Correo de contacto:** `soporte@predixa.mx` (se reenvía a predixamx@gmail.com).
- **Precios de ejemplo:** el sitio usa contratos de $1 a $10 pesos que pagan $10.
