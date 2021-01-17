+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["react"]     
slug = ""
title = "Handle User Clicks and UseState"
date = 2020-12-01T21:55:37+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

Expanded the model to also hold checked/clicked property
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