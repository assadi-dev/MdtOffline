const CACHE_NAME = "MDT-Offline-static-v1";

const app_shell_files = [
  "./manifest.json",
  "./index.php",
  "./build/",
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
  console.log("Service Worker activé !");
  self.clients.claim();
});

//Supprimer les caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return new Promise.add(
        keys.filter((key) => key != CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {});
