const version = 1;

const staticCache = `static-cache_v${version}`;
const imageCache = `image-cache_v${version}`;

const assets = [
  "/",
  "/index.html",
  "/main.js",
  "/register-sw.js",
  "/assets/manifest.json",
];

const iosImageAssets = [
  "/assets/ios/16.png",
  "/assets/ios/20.png",
  "/assets/ios/29.png",
  "/assets/ios/32.png",
  "/assets/ios/40.png",
  "/assets/ios/50.png",
  "/assets/ios/57.png",
  "/assets/ios/58.png",
  "/assets/ios/60.png",
  "/assets/ios/64.png",
  "/assets/ios/72.png",
  "/assets/ios/76.png",
  "/assets/ios/80.png",
  "/assets/ios/87.png",
  "/assets/ios/100.png",
  "/assets/ios/114.png",
  "/assets/ios/120.png",
  "/assets/ios/128.png",
  "/assets/ios/144.png",
  "/assets/ios/152.png",
  "/assets/ios/167.png",
  "/assets/ios/180.png",
  "/assets/ios/192.png",
  "/assets/ios/256.png",
  "/assets/ios/512.png",
  "/assets/ios/1024.png",
];

const androidImageAssets = [
  "/assets/android/android-launchericon-48-48.png",
  "/assets/android/android-launchericon-72-72.png",
  "/assets/android/android-launchericon-96-96.png",
  "/assets/android/android-launchericon-144-144.png",
  "/assets/android/android-launchericon-192-192.png",
  "/assets/android/android-launchericon-512-512.png",
];

const windowsImageAssets = [
  "/assets/windows11/LargeTile.scale-100.png",
  "/assets/windows11/LargeTile.scale-125.png",
  "/assets/windows11/LargeTile.scale-150.png",
  "/assets/windows11/LargeTile.scale-200.png",
  "/assets/windows11/LargeTile.scale-400.png",
  "/assets/windows11/SmallTile.scale-100.png",
  "/assets/windows11/SmallTile.scale-125.png",
  "/assets/windows11/SmallTile.scale-150.png",
  "/assets/windows11/SmallTile.scale-200.png",
  "/assets/windows11/SmallTile.scale-400.png",
  "/assets/windows11/SplashScreen.scale-100.png",
  "/assets/windows11/SplashScreen.scale-125.png",
  "/assets/windows11/SplashScreen.scale-150.png",
  "/assets/windows11/SplashScreen.scale-200.png",
  "/assets/windows11/SplashScreen.scale-400.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
  "/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
  "/assets/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
  "/assets/windows11/Square44x44Logo.scale-100.png",
  "/assets/windows11/Square44x44Logo.scale-125.png",
  "/assets/windows11/Square44x44Logo.scale-150.png",
  "/assets/windows11/Square44x44Logo.scale-200.png",
  "/assets/windows11/Square44x44Logo.scale-400.png",
  "/assets/windows11/Square44x44Logo.targetsize-16.png",
  "/assets/windows11/Square44x44Logo.targetsize-20.png",
  "/assets/windows11/Square44x44Logo.targetsize-24.png",
  "/assets/windows11/Square44x44Logo.targetsize-30.png",
  "/assets/windows11/Square44x44Logo.targetsize-32.png",
  "/assets/windows11/Square44x44Logo.targetsize-36.png",
  "/assets/windows11/Square44x44Logo.targetsize-40.png",
  "/assets/windows11/Square44x44Logo.targetsize-44.png",
  "/assets/windows11/Square44x44Logo.targetsize-48.png",
  "/assets/windows11/Square44x44Logo.targetsize-60.png",
  "/assets/windows11/Square44x44Logo.targetsize-64.png",
  "/assets/windows11/Square44x44Logo.targetsize-72.png",
  "/assets/windows11/Square44x44Logo.targetsize-80.png",
  "/assets/windows11/Square44x44Logo.targetsize-96.png",
  "/assets/windows11/Square44x44Logo.targetsize-256.png",
  "/assets/windows11/Square150x150Logo.scale-100.png", 
  "/assets/windows11/Square150x150Logo.scale-125.png",
  "/assets/windows11/Square150x150Logo.scale-150.png",
  "/assets/windows11/Square150x150Logo.scale-200.png",
  "/assets/windows11/Square150x150Logo.scale-400.png",
  "/assets/windows11/StoreLogo.scale-100.png", 
  "/assets/windows11/StoreLogo.scale-125.png",
  "/assets/windows11/StoreLogo.scale-150.png",
  "/assets/windows11/StoreLogo.scale-200.png",
  "/assets/windows11/StoreLogo.scale-400.png",
  "/assets/windows11/Wide310x150Logo.scale-100.png",
  "/assets/windows11/Wide310x150Logo.scale-125.png",
  "/assets/windows11/Wide310x150Logo.scale-150.png",
  "/assets/windows11/Wide310x150Logo.scale-200.png",
  "/assets/windows11/Wide310x150Logo.scale-400.png",
];

const imageAssets = [
  ...iosImageAssets,
  ...androidImageAssets,
  ...windowsImageAssets,
];

async function precache() {
  const cache = await caches.open(staticCache);
  return cache.addAll(assets);
}

async function precacheImages() {
  const cache = await caches.open(imageCache);
  return cache.addAll(imageAssets);
}

async function clearStaleCaches() {
  const keys = await caches.keys();
  console.log(keys);
  return Promise.all(
    keys
      .filter(key => key !== staticCache)
      .filter(key => key !== imageCache)
      .map(key => caches.delete(key))
  );
}

self.addEventListener("install", (e) => {
  console.log("[SW] Installed");

  e.waitUntil(Promise.all([
    precache(),
    precacheImages(),
  ]));
});

self.addEventListener("activate", (e) => {
  console.log("[SW] Activated");

  // Clear stale caches
  e.waitUntil(clearStaleCaches());
});

self.addEventListener("fetch", (e) => {

});
