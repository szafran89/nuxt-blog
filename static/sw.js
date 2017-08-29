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
    "url": "/nuxt-blog/_nuxt/app.e824791e0410175cb0ce.js",
    "revision": "26999a409fd1ae73f92f8eb2ffea9808"
  },
  {
    "url": "/nuxt-blog/_nuxt/common.3ef32530518c0356975f.js",
    "revision": "8c945294202e5335005ce4455c571574"
  },
  {
    "url": "/nuxt-blog/_nuxt/layouts/default.14cd7541c14be7ac9647.js",
    "revision": "1cd609b896158a52b7e3dc6c7f63cabd"
  },
  {
    "url": "/nuxt-blog/_nuxt/manifest.a04b581296feb58919a2.js",
    "revision": "950b06ad2a49827fecbfd3d4b4601629"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/_slug.2f847b4f56a075719bfd.js",
    "revision": "cf86570920af466f3e61ca5e24b79eef"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/about.3b1621dca722ab0c3ffe.js",
    "revision": "1f06f3aef5c119fdcfe13991b73389d0"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/category/_slug.19fd3884e20423338977.js",
    "revision": "8c271e129d3f34f24c2d1ecb71caba06"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/index.dc9bdeab2ee3559d15a2.js",
    "revision": "25374488ad40aeeb84305f8d4169c67f"
  },
  {
    "url": "/nuxt-blog/_nuxt/pages/posts.037e6fe7182c98119d91.js",
    "revision": "28dfe5fdd9efe36ad869f5baf40a1cec"
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
