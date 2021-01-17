// REGISTER SERVICE WORKER

if ("serviceWorker" in navigator) {
  registerServiceWorker();
} else {
  console.log("ServiceWorker belum didukung browser");
}

function registerServiceWorker() {
  navigator.serviceWorker.register("service-worker.js")
    .then(function(registration) {
      console.log(`SW registered: ${registration}`);
    })
    .catch(function(regError) {
      console.log(`registrationError: ${regError}`);
    });
}
