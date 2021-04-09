+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome"]
categories = []
tags = ["js", "dom", "chrome"]     
slug = ""
title = "Window.onerror i chrome"
date = 2020-04-24T22:06:31+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
TIL: window.onerror virker i Google Chrome, men ikke ikke consolet!
<!--more-->

{{<highlight js>}}
window.onerror = function() {
    alert("error");
}

hello123world();
{{</highlight>}}
