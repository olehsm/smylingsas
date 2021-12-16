---
author: Ole Halvor Smylingsås
description: ''
pageresources:
    - 'https://stackoverflow.com/questions/22207256/undo-git-stash-pop-that-results-in-merge-conflict'
categories: []
tags:
    - git
slug: ''
title: Angre 'git stash pop' som ender i en mergekonflikt
date: 2020-04-01T19:51:01.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:42:28.983Z'
---

TIL: Angre en "git stash pop"

<!--more-->
{{<highlight bash>}}
git reset HEAD
git stash
{{</highlight>}}
