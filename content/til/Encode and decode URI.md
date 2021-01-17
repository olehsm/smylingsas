+++
author = "Ole Halvor Smylingsås"
description = ""
resources = []
categories = []
tags = ["js", "angularjs"]     
slug = ""
title = "Encode and Decode URI"
date = 2019-11-20T21:38:32+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
TIL: That AngularJS encodes URI but that you have to decode the explisit yourself
<!--more-->
{{<highlight js>}}
const decodedUri = decodeURI(www.smylingsas.net)
{{</highlight>}}

Angular JS encodes URI automatically. 