---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/", "https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/"]
categories: []
tags: ["css"]     
slug: ""
title: "Fixed my footer on smaller viewports"
date: 2020-07-11T22:43:37+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
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

