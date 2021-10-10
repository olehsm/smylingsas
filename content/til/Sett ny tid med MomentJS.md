+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/42515588/how-to-set-time-with-date-in-momentjs"]
categories = []
tags = ["javascript", "momentjs"]     
slug = ""
title = "Sett ny tid med MomentJS"
date = 2021-10-10T13:12:18+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

TIL: Hvordan sette ny tid / oppdatere tidspunkt med Moment JS
<!--more-->
const hours = 15;
const minutes = 32;
var date = moment("1946-05-21").set("hour", hours).set("minute", minutes);
or as a combined function

var date = moment("1946-05-21").set({"hour": 15, "minute": 32});