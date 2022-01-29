---
author: Ole Halvor Smylingsås
description: ''
pageresources: []
categories: []
tags:
    - react
slug: del-5-handtere-brukerklikk-og-usestate
title: Del 5 - Håndtere brukerklikk og useState
date: 2020-12-01T20:55:37.000Z
draft: false
comments: false
preview: /preview-images/minesweeper-project.png
lastmod: '2022-01-27T19:12:50.540Z'
---

Utvidet spillmodellen til å også håndtere hvilke felt bruker har trykket på.
<!--more-->

{{<highlight js>}}
const handleClick = () => {
    if(state === TileState.bomb) {
        //console.log("Game over")
        setGameOver(true)
    } else {
        let total = parseInt(content, 10)
        if(total !==0) {
            setTileContent(content)
            if(!tileChecked) setTileChecked(true)
        }  
        if(!tileChecked) setTileChecked(true)
    }
}
{{</highlight>}}