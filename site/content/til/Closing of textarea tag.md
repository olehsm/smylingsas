+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["html", "angularjs"]     
slug = ""
title = "Closing of textarea tag"
date = 2020-12-16T21:48:34+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

<!--more-->
The textarea html tag needs to be closed properly with a closing tag since it contains data. Hence self-closing does not work either. 
{{<highlight html>}}
<textarea></texarea>
{{</highlight>}}

AngularJS will stop the rendering of a template with wrongly closed textarea tag.