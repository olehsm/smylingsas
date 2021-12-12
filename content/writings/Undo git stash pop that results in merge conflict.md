---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: ["https://stackoverflow.com/questions/22207256/undo-git-stash-pop-that-results-in-merge-conflict"]
categories: []
tags: ["git"]     
slug: ""
title: "Angre 'git stash pop' som ender i en mergekonflikt"
date: 2020-04-01T21:51:01+02:00
draft: false
featuretext: ""
featureimg: ""
comments: false
---

TIL: Angre en "git stash pop"
<!--more-->
{{<highlight bash>}}
git reset HEAD
git stash
{{</highlight>}}
