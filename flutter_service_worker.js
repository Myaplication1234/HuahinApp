'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "61d67cbf6453f0104740ef560e369082",
"assets/AssetManifest.bin.json": "f4f6766938e1a4a97debbf63aec7ff09",
"assets/AssetManifest.json": "51fca563ae6d1cfe1b407b2be3f6dd69",
"assets/assets/fonts/Sarabun-Bold.ttf": "6173018c235bfd6b90a727faf1201a15",
"assets/assets/fonts/Sarabun-Italic.ttf": "31417f51e2d8a042e2b5be840f045a0d",
"assets/assets/fonts/Sarabun-Regular.ttf": "56c5f9d4ecfb8c7ccf8a105e0c8de9f7",
"assets/assets/images/1.png": "4ac41043563413da75332834b0063114",
"assets/assets/images/2.png": "b737271dba9e992674cd72958493436a",
"assets/assets/images/3.png": "54b1af618a7743d2db8627ddb76d9ff6",
"assets/assets/images/4.png": "b9c15bec15bc06c029811b3951ab4b2f",
"assets/assets/images/5.png": "c8354b91e29e377d001b7dc1511041b8",
"assets/assets/images/6.png": "7da91bb35698065fd4fa012529b81ac0",
"assets/assets/images/anantara.png": "46f5211c1c2ccbdbbc8bf2703a833da3",
"assets/assets/images/bangkokhospital.png": "d3c35b876e7b4b81084313008f688bc5",
"assets/assets/images/Banner.png": "1e9ee9b3c970470a1302e961bdae0c75",
"assets/assets/images/bbg1.png": "74748da0e4103f12cce1488472345716",
"assets/assets/images/bbg2.png": "17f70842fb2c6b0d1f81217f657a595e",
"assets/assets/images/bbg3.png": "a0f9b9cf9c7aff6fc3495c4456539a3e",
"assets/assets/images/bbg4.png": "03cd005d52e354a981845bc17eb35b0f",
"assets/assets/images/bg.png": "efbd5147cb82f3fe0e219a3e70ac9cc9",
"assets/assets/images/bg1.png": "20dc51876de5ec77b73e2cdfb85df616",
"assets/assets/images/bg2.png": "05b77341e3a96112d76ea2c19942707d",
"assets/assets/images/default_image.png": "6a28bdc68fd651319de23efac2182789",
"assets/assets/images/food1.png": "ac806b6076822a93da50174b243950fb",
"assets/assets/images/food2.png": "f1b4717bc493affcb6dd646a1e1c94b5",
"assets/assets/images/food3.png": "ee35f2b00236598bdda590683d839c98",
"assets/assets/images/food4.png": "72e95f33340f7547819bffb568114ee5",
"assets/assets/images/food5.png": "d47f6e1ca6db40dcf98ee86848f9f971",
"assets/assets/images/huahinhospital.png": "23aace343291fd8f2ab6a45bd69b61c9",
"assets/assets/images/hyatt.png": "b499f8945d08985a1f3bf5ea171f9d83",
"assets/assets/images/icon.png": "afe8d842b9aff3c06472becf67be822a",
"assets/assets/images/intercontinental.png": "2574a79734cbfb47d8c95b8afdb29ed5",
"assets/assets/images/marriott.png": "80bb01924a8fb105291d6b96725240af",
"assets/assets/images/p1.png": "2fed0e05498a7b1123c4416dd2f0edf9",
"assets/assets/images/p2.png": "303ac7e17ad2c6d4d4f9e275888f35f7",
"assets/assets/images/p3.png": "10a5d2c66c348822aea3c5979e7c3fc8",
"assets/assets/images/p4.png": "6e2d0dbb03ecea89e45f6ec7c92281eb",
"assets/assets/images/p5.png": "dc0fa0a375bd02df6000d745693615da",
"assets/assets/images/p6.png": "8d53d91396cfa4aadc319a751cd7030c",
"assets/assets/images/sanpaulohospital.png": "1ead7b85acf63d1027ac810419283089",
"assets/assets/images/seasonpalace.png": "23f414f41cb2d72b70cc5adf97fdc822",
"assets/FontManifest.json": "1ced2e6dd4cc17036a97d22125870f9f",
"assets/fonts/MaterialIcons-Regular.otf": "59f51d717a19a19824319c8c5e79cf85",
"assets/NOTICES": "f1b1ab90443cc73e0d5da9549ee94cef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "2611b7dd34ebf5d3bcdf23fddb93dfdd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"/": "acfffd1a083ede0eda1ab3d5f3f26ff8",
"main.dart.js": "3b25373742498cb3c5d10779b29c29e5",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
