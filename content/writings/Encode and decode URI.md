---
author: Ole Halvor Smylingsås
description: ""
categories: []
tags:
  - javascript
  - angularjs
slug: encode-decode-uri
title: Encode and Decode URI
date: 2019-11-20T20:38:32.000Z
draft: false
comments: false
lastmod: 2022-12-30T23:35:44.801Z
preview: /preview-images/angularjs.jpg
---

TIL: That AngularJS encodes URI but that you have to decode the explisit yourself
<!--more-->
{{<highlight js>}}
const decodedUri = decodeURI(www.smylingsas.net)
{{</highlight>}}

Angular JS encodes URI automatically. 
