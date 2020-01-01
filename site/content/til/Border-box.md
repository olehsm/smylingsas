+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["CSS"]     
slug = ""
title = "Border Box"
date = 2020-01-01T23:07:07+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

The best way to understand what it does is to look at it's two possible values:

content-box (default) - When we set a width/hight to an element, that's just the size for it's content. All paddings and borders are on top of that. E.g. a < div > has a width of 100 and padding of 10, our element will take up 120 pixels (100 + 2*10).
border-box - The padding and border are included in the width/height. A < div > with width: 100px; and box-sizing: border-box; will be 100 pixels wide no matter what paddings or borders are added.
Setting border-box to all elements so you don't have to do math all the time.