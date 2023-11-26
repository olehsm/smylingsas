---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely
    pageresourceTitle: Gå til Stack Overflow (Ektern lenke)
    pageresourceText: Stack overflow - delete local and remote branch in git
tags:
  - git
slug: slette-brancher-git
title: Slette brancher i git
date: 2019-10-19T19:51:36.000Z
draft: false
lastmod: 2023-11-08T06:46:48.464Z
preview: /preview-images/git.jpg
---

Hvordan slette remote og local branch i git
<!--more-->

Lokalt
{{<highlight bash>}}
$ git branch -d < branch_name >
{{</highlight>}}

På server
{{<highlight bash>}}
$ git push -d < remote_name > < branch_name >
{{</highlight>}}
