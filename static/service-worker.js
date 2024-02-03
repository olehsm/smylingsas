self.addEventListener("install", event => {
	event.waitUntil(caches.open("offline-fallbacks")
		.then(cache => cache.add("offline.html"))
	);
});


self.addEventListener("fetch", event => {
	if(event.request.mode === "navigate") {
		event.respondWith(fetch(event.request)
				.catch(error => {
					return caches.open("offline-fallbacks").then(cache => cache.match("offline.html"));
				})
		);
	}
});

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
// const VERSION = "version";
// const CACHE_NAME = `pwa-${VERSION}`;

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);

//   workbox.core.setCacheNameDetails({
//     prefix: 'yourPWAname',
//     suffix: 'version',
//     precache: 'precache',
//     runtime: 'run-time',
//   });

//   workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

//    // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
//     workbox.routing.registerRoute(
//       /^https:\/\/fonts\.googleapis\.com/,
//       new workbox.strategies.StaleWhileRevalidate({
//       cacheName: 'google-fonts-stylesheets',
//      }),
//     );

//    // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
//     workbox.routing.registerRoute(
//       /^https:\/\/fonts\.gstatic\.com/,
//       new workbox.strategies.CacheFirst({
//       cacheName: 'google-fonts-webfonts',
//       plugins: [
//         new workbox.cacheableResponse.Plugin({
//           statuses: [0, 200],
//         }),
//         new workbox.expiration.Plugin({
//           maxAgeSeconds: 60 * 60 * 24 * 365,
//         }),
//       ],
//       }),
//     ); 
//     workbox.routing.registerRoute(
//       new RegExp('/css/'),
//       new workbox.strategies.StaleWhileRevalidate({
//         cacheName: 'css-cache',
//         plugins: [
//           new workbox.expiration.Plugin({
//             // Only cache requests for a week
//             maxAgeSeconds: 15 * 24 * 60 * 60 * 365,
//             // Only cache requests.
//             maxEntries: 10,
//           }),
//         ]
//       })
//     );

//     workbox.routing.registerRoute(
//       new RegExp('/js/'),
//       new workbox.strategies.StaleWhileRevalidate({
//         cacheName: 'js-cache',
//         plugins: [
//           new workbox.expiration.Plugin({
//             // Only cache requests for a week
//             maxAgeSeconds: 15 * 24 * 60 * 60 * 365,
//             // Only cache requests.
//             maxEntries: 10,
//           }),
//         ]
//       })
//     );
//     workbox.routing.registerRoute(
//           new RegExp('/media/'),
//           new workbox.strategies.StaleWhileRevalidate({
//             cacheName: 'img-cache',
//             plugins: [
//               new workbox.expiration.Plugin({
//                 // Only cache requests for a week
//                 maxAgeSeconds: 15 * 24 * 60 * 60 * 365,
//                 // Only cache requests.
//                 maxEntries: 10,
//               }),
//             ]
//           })
//         );


// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches
//       .open("v1")
//       .then((cache) =>
//         cache.addAll([
//           "/",
//           "/index.html",
//           "/style.css",
//           "/app.js",
//           "/image-list.js",
//           "/star-wars-logo.jpg",
//           "/img/img1.jpg",
//           "/img/img2.jpg",
//           "/img/img3.jpg",
//         ]),
//       ),
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // caches.match() always resolves
//       // but in case of success response will have value
//       if (response !== undefined) {
//         return response;
//       } else {
//         return fetch(event.request)
//           .then((response) => {
//             // response may be used only once
//             // we need to save clone to put one copy in cache
//             // and serve second one
//             let responseClone = response.clone();

//             caches.open("v1").then((cache) => {
//               cache.put(event.request, responseClone);
//             });
//             return response;
//           })
//           .catch(() => caches.match("/img/img1.jpg"));
//       }
//     }),
//   );
// });