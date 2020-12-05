'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fc66af48c8eaf1195595322f6ce0ae2e",
"assets/assets/fonts/Rubik-Bold.ttf": "9a6fb6f5cd3aa4ab1adaaab1f693f266",
"assets/assets/fonts/Rubik-Italic.ttf": "9a5eb2e5a64a12fe3cf7b6436690296a",
"assets/assets/fonts/Rubik-Regular.ttf": "b3d0902b533ff4c4f1698a2f96ddabab",
"assets/assets/images/common/artstore_app_icon_border.png": "c9c1d36c7a2cb7a1f2dc73a727c4c385",
"assets/assets/images/common/aboutme_app_icon.png": "ab8b6d727c0889fa9582d79110891f4b",
"assets/assets/images/common/signup_app_icon.png": "5eba83e96493128dd1a54b2d0aa1c9f1",
"assets/assets/images/common/daypepper_app_icon.png": "d9eb75dbc300d0d643737f5d648cde80",
"assets/assets/images/common/questionnaires_app_icon.png": "d888658966246fa2bbf32f626af50b85",
"assets/assets/images/common/weather_app_icon.png": "0f0b3de213fb7a9eb0396eb30fc293bc",
"assets/assets/images/common/artstore_app_icon.png": "1dd44b4ddc816ab153dd1249c0d913cd",
"assets/assets/images/common/quiz_app_icon.png": "02ac55eca5af2cf5c88e6ed7bd9ac136",
"assets/assets/images/common/todo_app_icon.png": "917d96818d14d96628efff4afc4e1424",
"assets/assets/images/drawer/dash.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/images/portfolio/todo/01.gif": "af66d1dca8a305558524d12908799251",
"assets/assets/images/portfolio/todo/03.png": "e5d98f3b1d0cb7a88799c1b5c0e8a07f",
"assets/assets/images/portfolio/todo/02.png": "410d27e26e2ff3671d42c140b175d649",
"assets/assets/images/portfolio/signup/01.gif": "53556239b6dbe388bef6a4a81f982cc0",
"assets/assets/images/portfolio/signup/03.png": "d8fdea4bdd4bb72b101b6448a5401568",
"assets/assets/images/portfolio/signup/02.png": "ec900c7e958fe5ba736e40115b420bdd",
"assets/assets/images/portfolio/quiz/01.gif": "4e764d6e07dc758a78c0675a88a28cdc",
"assets/assets/images/portfolio/quiz/03.png": "dd71896554eafd8565e3e471e3ad5b0f",
"assets/assets/images/portfolio/quiz/02.png": "2e6f3adda12b5be96b43cf23fa19aef5",
"assets/assets/images/portfolio/aboutme/03.png": "e66f0d1f6ac6f9678b77a6d469817431",
"assets/assets/images/portfolio/aboutme/01.png": "20a3422f1f7cd7f128c2d47cf2279c9c",
"assets/assets/images/portfolio/aboutme/02.png": "b90b7489a0e56f0d9ba8e259f44c5589",
"assets/assets/images/portfolio/artstore/01.gif": "dd2d0f6cf167f4745c7e483ed4e18cca",
"assets/assets/images/portfolio/artstore/03.png": "162c90933ffe84e34f95605099203376",
"assets/assets/images/portfolio/artstore/02.png": "b1257374f1997870bf3774addaf7b974",
"assets/assets/images/portfolio/questionnaires/01.gif": "d2dac467513d45fa8812ae40defa64f6",
"assets/assets/images/portfolio/questionnaires/03.png": "787c417a2e035fc6615397c3642576c8",
"assets/assets/images/portfolio/questionnaires/02.png": "aa059683f74aabda0defde87ef4b29cf",
"assets/assets/images/portfolio/weather/01.gif": "ed8b89ddf32a90f35830dc72f3150e6a",
"assets/assets/images/portfolio/weather/03.png": "e6ddb1ffa88c2b765ab4eb1a204216b8",
"assets/assets/images/portfolio/weather/02.png": "863827b82030b30b4191fbd83c021b7f",
"assets/assets/images/home_screen/avatar.png": "e7694d6e0594bd088459a0d5aa289ef6",
"assets/assets/images/home_screen/linkedin.png": "434576ce19509ab9720b4b1c415be2be",
"assets/assets/images/home_screen/github_black.png": "1da01259fd064169a068b99bfef552a7",
"assets/assets/images/home_screen/github.png": "22e72ed062a8b94c9888d63e8f06a1eb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "6707db59974d04121156cf5d6f36a2fc",
"assets/FontManifest.json": "0078111e6492663aa7bbea045b1dfe3f",
"assets/NOTICES": "67872c6d51b41f67f77d0c0202a211f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"main.dart.js": "a53efe04c43e53681a8bd0c83556edff",
"index.html": "fafc6a6a7ca27fb56e3ede7db0faeac6",
"/": "fafc6a6a7ca27fb56e3ede7db0faeac6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
