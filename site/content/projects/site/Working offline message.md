+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["pwa", "serviceworker"]     
slug = ""
title = "A working offline message!"
date = 2020-06-16T22:14:45+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

## Offline mode!
The site will now present a simple message telling the user that he/she is offline! 

I have finally found a way to make an offline.html - page work together with Hugo and a service worker
<!--more-->

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