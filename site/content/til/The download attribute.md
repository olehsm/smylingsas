+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://twitter.com/umaar/status/1260182825573191680"]
categories = []
tags = ["html"]     
slug = ""
title = "The Download attribute"
date = 2020-05-22T15:03:17+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

Adding the download attribute to an anchor tag will result in Save - dialog pop up, instead of just showing the picture.
{{<highlight html>}}
<a download href="cat.jpg">
    Download cat pic
</a>
{{</highlight>}}