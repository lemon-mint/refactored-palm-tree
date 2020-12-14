import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
    ({ request }) => {
        if (request.destination == "image") {
            return true
        }
        return false
    },
    new StaleWhileRevalidate({
        cacheName: 'app-cache-img',
    })
);

registerRoute(
    ({ request }) => {
        if (request.destination == "document") {
            return true
        }
        return false
    },
    new StaleWhileRevalidate({
        cacheName: 'app-cache-html',
    })
);

registerRoute(
    ({url}) => url.pathname.endsWith('.webmanifest'),
    new StaleWhileRevalidate({
        cacheName: 'app-cache-info',
    })
);

registerRoute(
    ({ request }) => {
        if (request.destination == "worker") {
            return true
        }
        return false
    },
    new StaleWhileRevalidate({
        cacheName: 'app-cache-sw',
    })
);

registerRoute(
    ({ request }) => {
        if (request.destination == "script") {
            return true
        }
        return false
    },
    new StaleWhileRevalidate({
        cacheName: 'app-cache-js',
    })
);

registerRoute(
    ({ request }) => {
        if (request.destination == "style") {
            return true
        }
        return false
    },
    new StaleWhileRevalidate({
        cacheName: 'app-cache-css',
    })
);
