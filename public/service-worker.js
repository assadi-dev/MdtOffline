const CACHE_NAME = "MDT-Offline-static-v1";

const app_shell_files = [
  "../public/manifest.json",
  "../public/index.php",
  "../public/build",
];

if ("serviceWorker" in navigator) {
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
}
