const CACHE_NAME = 'chatdz-cache-v1';
const urlsToCache = [
  '/ChatDZ/welcom.html',
  '/ChatDZ/chat.html',
  '/ChatDZ/icon-192.png',
  '/ChatDZ/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});
