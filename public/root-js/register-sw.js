const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("[SW] Installing...");
      } else if (registration.waiting) {
        console.log("[SW] Activating...");
      } else if (registration.active) {
        console.log("[SW] Active");
      }
    } catch (error) {
      console.error(`[SW] Registration failed with ${error}`);
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await registerServiceWorker();
});
