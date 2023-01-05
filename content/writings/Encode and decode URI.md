---
author: Ole Halvor Smylingsås
description: ""
tags:
  - javascript
  - angularjs
slug: encode-decode-uri
title: Encode and Decode URI
date: 2019-11-20T20:38:32.000Z
draft: false
lastmod: 2023-01-05T20:15:15.995Z
preview: /preview-images/angularjs.jpg
---

TIL: That AngularJS encodes URI but that you have to decode the explisit yourself
<!--more-->
{{<highlight js>}}
const decodedUri = decodeURI(www.smylingsas.net)
{{</highlight>}}

Angular JS encodes URI automatically. 
