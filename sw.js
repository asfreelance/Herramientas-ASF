/* Modo sin conexión: guarda las páginas para abrirlas sin internet después de la primera visita. */
const VERSION = 'asf-herramientas-v7';
const CORE = ["./", "aviso/", "calculadora/", "calendario/", "comprimidor/", "contrasena/", "correo/", "cronometro/", "dado/", "imagen/", "notas/", "paletas/", "qr/", "whatsapp/", "aviso/index.html", "calculadora/index.html", "calendario/index.html", "comprimidor/index.html", "contrasena/index.html", "correo/index.html", "cronometro/index.html", "dado/index.html", "imagen/index.html", "index.html", "notas/index.html", "paletas/index.html", "qr/index.html", "whatsapp/index.html", "manifest.webmanifest", "comprimidor/libs/jszip.min.js", "comprimidor/libs/pdf-lib.min.js", "qr/libs/qr.min.js", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isFont = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !isFont) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (isPage) {
    e.respondWith(fetch(req).then((res) => { const c = res.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match(url.pathname.endsWith('/') ? url.pathname + 'index.html' : url.pathname + '/index.html', { ignoreSearch: true })).then((hit) => hit || caches.match(new URL('index.html', self.registration.scope).href))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => {
    const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) { const c = res.clone(); caches.open(VERSION).then((ch) => ch.put(req, c)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
