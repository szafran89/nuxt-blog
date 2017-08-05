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
    "url": "/nuxt-blog/_nuxt/0.nuxt.bundle.9d8c7c556891a6912bfa.js",
    "revision": "052ffa4ed070bf30d7bf4d070a16cd60"
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
    "url": "/nuxt-blog/_nuxt/3.nuxt.bundle.2c06e27b4452ef46a171.js",
    "revision": "ae80b226309a99ff925b32e6490566a6"
  },
  {
    "url": "/nuxt-blog/_nuxt/4.nuxt.bundle.d22cf9be33825d1218ca.js",
    "revision": "838353192e23c284420a3d0633f5c966"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.1422cb61b1de481306b4.js",
    "revision": "09b3d00dcb4e3713243b86ef05669509"
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
