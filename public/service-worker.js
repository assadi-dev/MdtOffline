const CACHE_NAME = "MDT-Offline-static-v1";

const app_shell_files = [
  "./index.php",
  "./build/",
  "./.htaccess",
  "./logo192.png",
  "./logo512.png",
  "./favicon.ico",
];

self.addEventListener("install", (event) => {
  console.log("new Service Worker installé !");
  //A l'installation ajoute les fichiers en cache, puis active le Service Worker

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(app_shell_files))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", () => {
  //console.log("Service Worker activé !");
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

//Supprimer les caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key != CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});
