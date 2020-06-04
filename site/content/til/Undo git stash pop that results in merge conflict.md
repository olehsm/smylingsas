+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://stackoverflow.com/questions/22207256/undo-git-stash-pop-that-results-in-merge-conflict"]
categories = []
tags = ["git"]     
slug = ""
title = "Undo Git stash pop that results in merge conflict"
date = 2020-04-01T21:51:01+02:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

{{<highlight bash>}}
git reset HEAD
git stash
{{</highlight>}}
