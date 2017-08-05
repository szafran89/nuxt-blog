importScripts('workbox-sw.prod.v1.1.0.js');

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
    "url": "/nuxt-blog/_nuxt/0.nuxt.bundle.30fe4f82be2606db3c64.js",
    "revision": "ef79ba3267d3b19eb62ca186b466a87b"
  },
  {
    "url": "/nuxt-blog/_nuxt/1.nuxt.bundle.dae521441b713309e1d4.js",
    "revision": "3d3acad451c46db5486b8e419b0322c6"
  },
  {
    "url": "/nuxt-blog/_nuxt/2.nuxt.bundle.6fc64776c3ece4fa8984.js",
    "revision": "7dd15850a8faa6c6f75e5380ac74a42a"
  },
  {
    "url": "/nuxt-blog/_nuxt/3.nuxt.bundle.894c948e6ebf5b28b31e.js",
    "revision": "beac75c6c28a0201af467e676dbebcc0"
  },
  {
    "url": "/nuxt-blog/_nuxt/4.nuxt.bundle.d22cf9be33825d1218ca.js",
    "revision": "838353192e23c284420a3d0633f5c966"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.b11a79c0f8bdfa127e29.js",
    "revision": "d5750ef83f8000dddd4eb64d4bebc6b6"
  },
  {
    "url": "/nuxt-blog/_nuxt/nuxt.bundle.50ba4e7f3b61d14679ed.js",
    "revision": "2a3a5253b31210dc0ebd1c56eeedf8ed"
  },
  {
    "url": "/nuxt-blog/_nuxt/vendor.bundle.f9dbbfe0d9d02f03a990.js",
    "revision": "7b6faa2b07d3dc77ae10446068658fd5"
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
