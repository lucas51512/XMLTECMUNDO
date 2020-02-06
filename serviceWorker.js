const cacheName = 'v2';

const cacheAssets = [
  "css/main.css",
  "index.html",
  "js/main.js"
];

self.addEventListener('install', function(event) {
  console.log('Service Worker: Installed');

  event.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
      console.log("Service worker: Caching Files");
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', function(event) {
  console.log("Service Worker: Activated");

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache =>{
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

self.addEventListener("fetch", event => {
  console.log('Service Worker: Fetching');
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    }
  ));
});
