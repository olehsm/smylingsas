---
title: Oppdateringer om utviklingen av dette nettstedet
description: Denne siden skal fungere som en changelog for dette nettstedet
date: 2022-09-29T07:50:17.020Z
preview: /preview-images/mysite-project.png
draft: ""
tags:
  - amplify
  - css
  - html
  - hugo
  - javascript
categories: []
author: Ole Halvor Smylingsås
pageresources: {}
comments: 2022-09-29T07:50:17.020Z
lastmod: 2022-11-25T23:08:28.790Z
type: ""
resources: {}
slug: oppdateringer-om-utviklingen-av-dette-nettstedet
---

<!--more-->
## 25 november 2022
La til egendefinerte headere for cachekontroll. Les mer om caching av resurser i Amplify

## 25 september 2022 
En Dockerfil lagt til i prosjektet. Den skal gjøre den enklere å endre Go- og Hugo-versjon på Smylingsas.net uten å måtte installere det på min på egen maskin. Planen videre er også å lage en Hugo/Go/Node - basert utvikerkontainer til nedlasting.

## 15 september 2022
Implementert en statisk venstremeny for alle mellomstore og store skjermstørrelser. Denne forsvinner på mobil og blir erstattet av en egen mobilmeny

## 21 mars 2022
Oppdatert CSS for alle artikkelsider. Tar i bruk CSS Grid, ch og min() for et enkelt responsivt layout basert på en ide av [Josh Comeau](https://www.joshwcomeau.com/css/full-bleed/). Jeg oppdaget dog at jeg måtte angi en skiftstørrelse for wrapperklassen for at dette skulle fungere på større skjermer.

## 13 februar 2022
404 - siden er oppdatert med nytt design.
Se 404-siden [her](/404.html)

## 12 februar 2022
Har pusset opp termsutlistningen. Nå vil siden ikke lenger bare liste opp denne nettsidens benyttede tags, men også liste ut hvilke blogposter som hører til. Terms finner en på /tags
<br /><br />

Terms er en innebygget dictionary i Hugo og jeg lister ut seksjon etter seksjon. Rendrer hver post med Summary funksjonalitet, også det innebygget i Hugo 

## Gammel utgave
![](/img/oldterms.PNG)

<br />

## Ny utgave
![](/img/termsupdated12022022.PNG)

## 8 juli 2021
Starter med å skrive om all layoutrelatert CSS til å bruke Grid Area-teknologi

## 10 juni 2021
- Oppdaterte <head> seksjonen for dette nettstedet. Benyttet meg av denne [guiden](https://www.matuzo.at/blog/html-boilerplate/) Fikk lagt til favicon og andre ikoner slik at det støtter alle type enheter. La også inn felter for å støtte deling av artikler på både Twitter og Facebook.
- La også inn en ny CSS Reset fra @andy-piccalilli: [Modern CSS reset](https://github.com/andy-piccalilli/modern-css-reset) og [A modern CSS reset](https://piccalil.li/blog/a-modern-css-reset)

## 8 mars 2021
Implementerte en scroll-til-toppen-knapp. Oppdatert 28 desember 2021: Fjernet denne funksjonaliteten.

## 8 februar 2021
Fikk i dag målt karbonavtrykket til dette nettstedet.
Fra [websitecarbon.com](https://www.websitecarbon.com/):

> The internet consumes a lot of electricity. 416.2TWh per year to be precise. To give you some perspective, that’s more than the entire United Kingdom.

> From data centres to transmission networks to the devices that we hold in our hands, it is all consuming electricity, and in turn producing carbon emissions.

### Resultatet
![Karbonavtrykk badge](/img/website-carbon.PNG)

Detaljer ligger her: [websitecarbon.com](https://www.websitecarbon.com/website/smylingsas-net/)


## 16 juni 2020
Introduserte skreddersydd beskjed til bruker dersom hen er uten nett. Kan ses på denne linken [her](offline.html)

### Service worker
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

## 7 juni 2020
Første Lighthouse rapport ble generert for nettstedet

## Hvordagn genere en Lighthouse raport
Full guide: [Developers.google.com](https://developers.google.com/web/tools/lighthouse/#devtools)


### Hjemmeside
![Lighthouse report homepage](/img/lighthouse-homepage.PNG)
[Full Lighthouse for Homepage](/smylingsas.net-20200607T114017.html)

### Listeside
![Lighthouse raport listeside](/img/lighthouse-list.PNG)

### Artikleside
![Lighthouse raport artikkel](/img/lighthouse-article.PNG)


## 10 mai 2020
Tatt i bruk Hugo sin Summary-funksjon for å vise cardlayout i lister

## 13 april 2020
Alle artikkler har fått implementert små animasjoner. Oppdatert 29 september 2022: Dette har senere blitt fjernet.

## 15 mars 2020
Implementerte en egen meny for mobile enheter. Plassert i bunnen av skjermen da er det kort vei for tommelen og flertallet av sidene er ett trykk unna.

## 12 mars 2019
Nettsiden er nå en Progresiv Web Application. Kan legges på hjemskjerm på mobile enheter
- Manifestfil
- Service worker
- Responsive
- HTTPS

## 4 september 2017 
Var nyskjerrig på Static site generators (SSG) og oppdaget Hugo. Utviklingsmiljø og Hugo ble satt opp og den aller første commiten ble pushet til GitHub