const CACHE_NAME = 'my-site-cache-v2';
const urlsToCache = [
  '/',
  '/small.css',
  '/large.css',
  'https://fonts.googleapis.com/css?family=Nunito+Sans',
  'https://fonts.gstatic.com/s/nunitosans/v2/iJ4p9wO0GDKJ-D5teKuZqogp9Q8gbYrhqGlRav_IXfk.woff2',
];

self.addEventListener('install', function(event) {
  const promise = caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    });

  event.waitUntil(promise);
});

self.addEventListener('fetch', function(event) {
  const promise = caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function(response) {
        // Return response without caching if response is not valid
        if (!response || response !== 200) {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
    });

  event.respondWith(promise);
});

self.addEventListener('activate', function(event) {
  // Clear out old caches
  const promise = caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        if (cacheName !== CACHE_NAME) {
          return caches.delete(cacheName);
        }
      })
    );
  });

  event.waitUntil(promise);
});
