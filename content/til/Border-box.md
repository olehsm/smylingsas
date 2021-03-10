+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = []
categories = []
tags = ["css"]     
slug = ""
title = "Border Box"
date = 2020-01-01T23:07:07+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++
TIL Border box
>Det er to måter å se border-box på; "content-box" og "border-box"
<!--more-->

content-box (standard) - Når vi setter en høyde eller bredde på et html element så betyr det at vi kun setter størrelsen på innholdet til elementet. Padding og margin kommer da i tillegg. 

Eksempel:
```css
.my-div {
    width: 100px;
    padding: 10px;
}
```
En ``` <div> ``` har en bredde på 100px og en padding på 10px. Elementet vil da ta opp 120px totalt (1oo + 2*10).

border-box - Her er padding og border inkludert i totalbredden/totalhøyden. En ``` <div> ``` med følgende styling:
```css
.my-div2 {
    width: 100px;
    box-sizing: border-box;
}
```
Vil være 100 pixels bred, uansett hvilken padding eller border som blir lagt på.

Et lurt triks kan være å sette border-box til alle elementer så slipper man unna matematikken.
```css 
* {
    box-sizing: border-box;
}
```
