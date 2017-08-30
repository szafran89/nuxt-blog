importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/nuxt-blog/_nuxt/app.333f9b365ef4903d0387.js",
    "revision": "0848ac3007c7ca7aabe0de82497b3453"
  },
  {
    "url": "/nuxt-blog/_nuxt/common.3ef32530518c0356975f.js",
    "revision": "8c945294202e5335005ce4455c571574"
  },
  {
    "url": "/nuxt-blog/_nuxt/layouts/default.faa6d8a97e9f897f4147.js",
    "revision": "82ba75d694bb7df3c6dba82784d4429d"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.def4c054df1231ef8ff3.js",
    "revision": "b9a096df426f40eca944866c187b9093"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/_slug.f418cfec8f3db76cc946.js",
    "revision": "a90c7a5cd95001f4fe629b0e12957c43"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/about.8ac09c2e178f5dda4ecd.js",
    "revision": "4858393c903aab16eab0dbbb80ede6c0"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/category/_slug.4aa4b56831c85f09323a.js",
    "revision": "44436da248fea6b0a801d1819be34641"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/index.8824bac6b070a7e0152f.js",
    "revision": "b19039ea119a2fea795e440fb02659af"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-blog_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/nuxt-blog/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/nuxt-blog/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
