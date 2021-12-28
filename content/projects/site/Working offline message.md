---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - pwa
    - serviceworker
slug: du-er-offline-beskjed
title: Du er offline - beskjed
date: 2020-06-16T20:14:45.000Z
draft: false
comments: false
lastmod: '2021-12-28T16:31:27.538Z'
preview: /javascript.jpg
---

Denne nettsiden vil nå presentere en enkel melding som forteller brukeren at internetttilkoblingen er brutt. 
<!--more-->
Har endelig klart å lage en offline.html - side og fått den til å virke med Hugo og en Service Worker


## The service worker
{{<highlight js>}}
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
{{</highlight>}}
