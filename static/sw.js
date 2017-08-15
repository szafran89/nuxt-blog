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
    "url": "/_nuxt/0.nuxt.bundle.5a817e7ae823c0c9004f.js",
    "revision": "9ca65ebbc35691b08908f4add6d34c55"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.9b75758355f9dbb258f5.js",
    "revision": "26bd17a83fafe6b12584e4f0b876dc69"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.6fc64776c3ece4fa8984.js",
    "revision": "7dd15850a8faa6c6f75e5380ac74a42a"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.894c948e6ebf5b28b31e.js",
    "revision": "beac75c6c28a0201af467e676dbebcc0"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.023bff2c1a49926201c3.js",
    "revision": "35dafa36f7fa27bec74777ded3b51e06"
  },
  {
    "url": "/_nuxt/manifest.8c444f5883ef358b4944.js",
    "revision": "8d0335bb62e3596cf734d0c9addaa819"
  },
  {
    "url": "/_nuxt/nuxt.bundle.bd99cbf01afe8c76d897.js",
    "revision": "24527b4f3511d85c8520bcee1453b1b1"
  },
  {
    "url": "/_nuxt/vendor.bundle.1bdea4bacb1ed953b93f.js",
    "revision": "97d312d1b2d4e7a4508cac0973ab3d52"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-blog_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
