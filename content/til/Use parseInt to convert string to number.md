+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/"
]
categories = []
tags = ["js"]     
slug = ""
title = "Use parseInt to convert string to number"
date = 2020-04-30T20:13:48+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
TIL: Use parseInt to convert string to number in Javascript
<!--more-->

{{<highlight js>}}
const str = "100m"
const length = parseInt(str, 10)
// 100  
{{</highlight>}}