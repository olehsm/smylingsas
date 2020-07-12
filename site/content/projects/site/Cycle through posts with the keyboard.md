+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["navigation", "hugo"]     
slug = ""
title = "Cycle through posts with the keyboard"
date = 2020-07-12T13:38:11+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

I use the Hugo section navigation, the querySelector and the DOM onkeydown - event to implement the possibility to cycle through all the posts in the given section.

<!--more-->

{{<highlight js>}}
document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 37:
        //left key
        document.querySelector(".page-main__previous-link").click();
        break;
    case 39:
        //right key
        document.querySelector(".page-main__next-link").click();
        break;
    }
};
{{</highlight>}}

