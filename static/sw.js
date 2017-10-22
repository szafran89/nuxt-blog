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
    "url": "/nuxt-blog/_nuxt/app.6724d89db6d4b0a871cb.js",
    "revision": "528e1018583077e58191cd26379c7f92"
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
    "url": "/nuxt-blog/_nuxt/manifest.9686d903bf48e839e56a.js",
    "revision": "b59ba206c3dc9aaa74de1da4e5681de7"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/_slug.b5f4a68f8acd8b19dfbb.js",
    "revision": "30e88d293d79b2f4e78d97493c84b7f5"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/about.db552ef141bce1a3ebae.js",
    "revision": "e5b6ee0796657bbb25a61e606c2ced5e"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/category/_slug.2aa1d74ebee0188ae746.js",
    "revision": "26f0d91e86e97c7d29708395900367ce"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/index.117feea3aff07815a161.js",
    "revision": "06e2622ab2181911f0185ed995aacede"
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
