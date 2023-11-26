---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/
    pageresourceTitle: Gå til CSS-Tricks (Ekstern lenke)
    pageresourceText: CSS-Tricks - CSS fix for 100vh in mobile viewports
  - pageresourceUrl: https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/
    pageresourceTitle: Gå til All things smitty (Ekstern lenke)
    pageresourceText: All things Smitty 
tags:
  - css
slug: fixed-footer-smaller-viewports
title: Fixed my footer on smaller viewports
date: 2020-07-11T20:43:37.000Z
draft: false
lastmod: 2023-11-08T06:45:25.286Z
preview: /preview-images/css.jpg
---

CSS fix for 100vh in mobile webkit
<!--more-->
This minor fix did the trick:

The original css class looked like this. It worked find on desktop sized viewport. But on smaller viewports the 100vh was ignored.
{{<highlight css>}}
.full-viewport-height {
    height: 100vh;
}
{{</highlight>}}

As the page resources points out, adding a min-height will solve my problem. "-webkit-fill-available" also solves it for user using Safari. 
{{<highlight css>}}
.full-viewport-height {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    height: 100vh;
}
{{</highlight>}}

I later figured out that I had to remove the "height" - property in order to get this work all the time.
{{<highlight css>}}
.full-viewport-height {
    min-height: 100vh;
    min-height: -webkit-fill-available;
}
{{</highlight>}}

