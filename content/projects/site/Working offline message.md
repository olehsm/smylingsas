---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["pwa", "serviceworker"]     
slug: ""
title: "Du er offline - beskjed"
date: 2020-06-16T22:14:45+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
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