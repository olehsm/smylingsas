---
author: Ole Halvor Smylingsås
description: ''
resources: []
categories: []
tags:
    - js
    - angularjs
slug: ''
title: Encode and Decode URI
date: 2019-11-20T20:38:32.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:32:26.890Z'
---

TIL: That AngularJS encodes URI but that you have to decode the explisit yourself
<!--more-->
{{<highlight js>}}
const decodedUri = decodeURI(www.smylingsas.net)
{{</highlight>}}

Angular JS encodes URI automatically. 
