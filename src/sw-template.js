importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;

const cacheFirstNetwork = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap'
]

registerRoute(
  ({ request, url }) => {
    if (cacheFirstNetwork.includes(url.href)) return true;
    return false;
  },
  new CacheFirst()
)