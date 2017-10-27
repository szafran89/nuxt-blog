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
    "url": "/nuxt-blog/_nuxt/layouts/default.e9114bd596a7433f9e86.js",
    "revision": "a103a1890e5fb6746382c4c70b016541"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.7c985b032d134c7a0b0b.js",
    "revision": "4d31a9048cccbc0798cdb66629f20942"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/_slug.b5f4a68f8acd8b19dfbb.js",
    "revision": "30e88d293d79b2f4e78d97493c84b7f5"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/about.f38c75ffe8ad7926e71d.js",
    "revision": "71b983bb6495058a633b94f9d4591ad0"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/category/_slug.53defc93db717e6475eb.js",
    "revision": "00507a99d664f495aac546b62634f981"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/index.1120a1ed03e168f164fb.js",
    "revision": "2095191e5575c8051aff7c6c835e5f63"
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
