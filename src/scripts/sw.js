/* eslint-disable no-unused-vars */
self.addEventListener('install', (_event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
});

// eslint-disable-next-line no-unused-vars
self.addEventListener('activate', (_event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
