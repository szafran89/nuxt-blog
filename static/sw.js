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
    "url": "/nuxt-blog/_nuxt/app.7e5c5ec90b6c9f2c8d4c.js",
    "revision": "c6428c46b58b4c7f8c02398c6b944561"
  },
  {
    "url": "/nuxt-blog/_nuxt/common.338ce5094a4b0096f65c.js",
    "revision": "2e17163c5305f37ae31c45b1388bbdf4"
  },
  {
    "url": "/nuxt-blog/_nuxt/layouts/default.cf6998bd1cf3fb361933.js",
    "revision": "fe60b2f9d5c92bd637d6ec0801cd3e15"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.6d88a1710b7bf999b52e.js",
    "revision": "deb2bd8bc5c154a9d48138510a9a771d"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/_slug.a9a12a0806acdabff31d.js",
    "revision": "cfb93f1abedd44b01a96165b44bf4fb2"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/about.db552ef141bce1a3ebae.js",
    "revision": "e5b6ee0796657bbb25a61e606c2ced5e"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/category/_slug.0a8cd337ca133eb41c09.js",
    "revision": "88840b65b8048944c19fca4055c96132"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/index.f03671d64ff184e5190e.js",
    "revision": "fa976155cd2e3842f444363d6036acd4"
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
