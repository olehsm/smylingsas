---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://twitter.com/umaar/status/1260182825573191680"]
categories: []
tags: ["html"]     
slug: ""
title: "Download attributtet i html"
date: 2020-05-22T15:03:17+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

TIL:  Om en legger til 'download' attributett i en lenke... 
<!--more-->
Så vil nettleseren svare med dialog for å laste ned filen i stedet for kun å vise den.
{{<highlight html>}}
<a download href="cat.jpg">
    Download cat pic
</a>
{{</highlight>}}