+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/16192464/window-onerror-not-working-in-chrome"]
categories = []
tags = ["js", "dom", "chrome"]     
slug = ""
title = "Window.onerror in chrome"
date = 2020-04-24T22:06:31+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

The window.onerror works in Chrome, but not in the console!

{{<highlight js>}}
window.onerror = function() {
    alert("an error");
}

hello123world();
{{</highlight>}}
