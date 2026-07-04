self.addEventListener('install', event => {
  event.waitUntil(caches.open('brn-v0.1').then(cache => cache.addAll([
    './',
    './index.html'
  ])));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
