---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://twitter.com/umaar/status/1260182825573191680
tags:
  - html
slug: download-attributtet-html
title: Download attributtet i html
date: 2020-05-22T13:03:17.000Z
draft: false
lastmod: 2023-01-05T20:17:23.798Z
preview: /preview-images/html.jpg
---

TIL:  Om en legger til 'download' attributett i en lenke... 
<!--more-->

Så vil nettleseren svare med dialog for å laste ned filen i stedet for kun å vise den.
{{<highlight html>}}
<a download href="cat.jpg">
    Download cat pic
</a>
{{</highlight>}}
