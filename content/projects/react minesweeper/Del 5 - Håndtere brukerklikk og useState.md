---
author: "Ole Halvor Smylingsås"
description: ""
pageresources: []
categories: []
tags: ["react"]     
slug: ""
title: "Del 5 - Håndtere brukerklikk og useState"
date: 2020-12-01T21:55:37+01:00
draft: false
featuretext: ""
featureimg: ""
comments: false
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