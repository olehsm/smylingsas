---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - https://stackoverflow.com/questions/22207256/undo-git-stash-pop-that-results-in-merge-conflict
tags:
  - git
slug: angre-git-stash-pop-som-ender-en-mergekonflikt
title: Angre 'git stash pop' som ender i en mergekonflikt
date: 2020-04-01T19:51:01.000Z
draft: false
lastmod: 2023-01-05T20:18:15.759Z
preview: /preview-images/git.jpg
---

TIL: Angre en "git stash pop"

<!--more-->
{{<highlight bash>}}
git reset HEAD
git stash
{{</highlight>}}
