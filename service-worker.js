/* =====================================================
   Corizen PWA - Service Worker
   Purpose: Offline support & caching
===================================================== */

const CACHE_NAME = "corizen-pwa-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/notes.html",
  "/cart.html",
  "/profile.html",
  "/css/style.css",
  "/js/app.js",
  "/manifest.json",
  "/images/logo.png",
  "/images/notebook.png",
  "/images/pen.png"
];

/* --------------------
   INSTALL
-------------------- */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* --------------------
   ACTIVATE
-------------------- */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/* --------------------
   FETCH
-------------------- */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
