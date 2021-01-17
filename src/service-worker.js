importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (workbox) {
	console.log("workbox berhasil dimuat");

	workbox.routing.registerRoute(
		new RegExp("/images/"),
		workbox.strategies.cacheFirst({
			cacheName: "images",
			plugins: [
				new workbox.cacheableResponse.Plugin({
					statuses: [0, 200]
				}),
				new workbox.expiration.Plugin({
					maxAgeSeconds: 30 * 24 * 60 * 60,
					maxEntries: 25
				})
			]
		})
	);

	workbox.routing.registerRoute(
		/^https:\/\/api\.football\-data\.org\/v2/,
		workbox.strategies.staleWhileRevalidate({
			cacheName: "football-data"
		})
	);

	self.addEventListener("push", function(event) {
		let body;
		if (event.data) {
			body = event.data.text();
		} else {
			body = "Push message no payload";
		}
		const options = {
			body: body,
			icon: "./images/icon.png",
			badge: "./images/icon.png",
			requireInteraction: true,
			vibrate: [100, 50, 100],
			data: {
				dateOfArrival: Date.now(),
				primaryKey: 1
			}
		};
		event.waitUntil(
			self.registration.showNotification("English Premier League - unOfficial", options)
		);
	});

	workbox.precaching.precacheAndRoute(
		self.__precacheManifest, {
			ignoreUrlParametersMatching: [/.*/]
		}
	);

} else {
	console.log("workbox gagal dimuat");
}
