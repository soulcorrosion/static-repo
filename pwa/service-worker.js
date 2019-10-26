/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

const IS_DEBUG = true;
const CDN_URL = 'https://cdn-static.farfetch-contents.com/portalbox/app-mobile';

/**
 * When using RegExp class, we don't need to escape '/' and for escaping
 * any other special character, we need to use double back-slash instead of '\'
 **/
const CDN_URL_PATTERN = 'https://cdn-static\\.farfetch-contents\\.com/portalbox/app-mobile';
const PROTOCOL_AND_DOMAIN_PATTERN = 'https://www\\.farfetch\\.com';

function redirectToPrecacheAsset(requestedAssetPattern, cacheAssetPattern) {
    workbox.routing.registerRoute(new RegExp(requestedAssetPattern), () => {
        return caches.keys().then(keys => {
            const cacheKey = keys.filter(key => key.match('precache'))[0];

            return caches.open(cacheKey).then(cache => {
                return cache.keys().then(requests => {
                    const url = requests.filter(request => request.url.match(cacheAssetPattern))[0]
                        .url;
                    return cache.match(url);
                });
            });
        });
    });
}

if (workbox) {
    // Removes debug messages
    workbox.setConfig({
        debug: IS_DEBUG,
    });

    /**
     * Shortly, this guarantees that when a new service worker version is available,
     * it will replace the old one currently running in the users browser
     */
    workbox.core.skipWaiting();

    /**
     * This should stay empty always. It will be replaced in the build process
     * because we are using Workbox CLI (that uses workbox-config.js) to
     * generate this array.
     */
    workbox.precaching.precacheAndRoute([
  {
    "url": "https://cdn-static.farfetch-contents.com/portalbox/app-mobile/offline.css",
    "revision": "d3eaafce163eb88e6acb6b6c83b9e6a3"
  },
  {
    "url": "https://cdn-static.farfetch-contents.com/portalbox/app-mobile/offline.html",
    "revision": "49e9af49bfad22cee0c7be7f60c8e268"
  },
  {
    "url": "https://cdn-static.farfetch-contents.com/portalbox/app-mobile/fonts.client.85f61a9bc393934e24e0.ltr.css",
    "revision": "b7c8c8efbf218b5cb3f2a807aa74494d"
  },
  {
    "url": "https://cdn-static.farfetch-contents.com/portalbox/app-mobile/fonts.client.d578a55f162222b3878c.js",
    "revision": "73ef6ae64fa1d017d82b99182fca4a00"
  }
]);;

    /**
     * Use a cache-first strategy to cache static assets (css and javascript) for a maximum of one week.
     * We need to explicitly look for the app-mobile url to avoid caching assets that aren't from the PWA.
     * */
    ['css', 'js'].forEach(cacheType => {
        workbox.routing.registerRoute(
            new RegExp(`${CDN_URL_PATTERN}/.*\\.${cacheType}$`),
            new workbox.strategies.CacheFirst({
                cacheName: `${cacheType}-cache`,
                plugins: [
                    new workbox.expiration.Plugin({
                        // Cache for a maximum of one week.
                        maxAgeSeconds: 7 * 24 * 60 * 60,
                        purgeOnQuotaError: true,
                    }),
                ],
            })
        );
    });

    /**
     * Use a cache-first strategy for specific third parties
     *
     * smartserve.js is being cached for 5 minutes, as a response header sent by its provider.
     * opentag has no cache policy.
     * qtracker has a 10 minutes cache, as also a response header sent by its provider.
     *
     * Here, we can take ignore those external cache policies and simply use our own (1 hour cache).
     *
     * Also, When using RegExp class, we don't need to escape '/' and for escaping
     * any other special character, we need to use double back-slash instead of '\'
     */
    [
        'https://dd6zx4ibq538k\\.cloudfront\\.net/smartserve',
        'https://d3c3cq33003psk\\.cloudfront\\.net/opentag',
        'https://dtxtngytz5im1\\.cloudfront\\.net/qtracker',
    ].forEach(thirdParty => {
        workbox.routing.registerRoute(
            new RegExp(`${thirdParty}.*\\.js$`),
            new workbox.strategies.CacheFirst({
                cacheName: `third-party-cache`,
                plugins: [
                    new workbox.expiration.Plugin({
                        // Cache for a maximum of one day.
                        maxAgeSeconds: 24 * 60 * 60,
                        purgeOnQuotaError: true,
                    }),
                ],
            })
        );
    });

    /**
     *  This caches the favicon.ico so that it is available for the offline page.
     * We cannot precache, as we do with the other offline page assets, because
     * the precache is done in build time and the favicon.ico is not a portal-box asset.
     */
    workbox.routing.registerRoute(
        new RegExp(`/static/images/favicon/Generated/favicon_b\\.ico`),
        new workbox.strategies.CacheFirst({
            cacheName: `assets-cache`,
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache for a maximum of one week.
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                    purgeOnQuotaError: true,
                }),
            ],
        })
    );

    /**
     * The offline.html is a static page and it needs to get some assets which have dynamic url's.
     * This is only possible using service worker. It's responsability is to retrieve them using the precache.
     */
    redirectToPrecacheAsset('https://offline.css', 'offline\.css'); // eslint-disable-line
    redirectToPrecacheAsset('https://fonts.css', 'fonts\.client\..+\.ltr\.css'); // eslint-disable-line

    /**
     * All aspx pages requests should go to the network only as usual.
     */
    workbox.routing.registerRoute(
        new RegExp(`^${PROTOCOL_AND_DOMAIN_PATTERN}`),
        new workbox.strategies.NetworkOnly()
    );

    /**
     * If we have an error getting an aspx page, we fallback to a precached static offline page
     */
    workbox.routing.setCatchHandler(({ event }) => {
        switch (event.request.destination) {
            case 'document':
                return caches.match(`${CDN_URL}/offline.html`, { ignoreSearch: true });
            default:
                return Response.error();
        }
    });
}