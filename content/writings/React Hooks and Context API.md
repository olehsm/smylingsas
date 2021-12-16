---
author: Ole Halvor Smylingsås
description: ''
pageresources:
  - 'https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c'
  - 'https://www.smashingmagazine.com/2020/01/introduction-react-context-api/'
  - 'https://reactjs.org/docs/hooks-state.html'
categories: []
tags:
  - js
  - react
  - hooks
  - contextapi
slug: ''
title: React Hooks og Context API
date: 2020-02-23T17:41:11.000Z
draft: false
comments: false
lastmod: '2021-12-16T20:39:30.907Z'
---

State kontroll med React Hooks og Context API.
<!--more-->

Fra den offisielle React dokumentasjonen:
“Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.”

useState Hook
useContext Hook

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function App() {
  const[theme, setTheme]: React.useState("red");

  const onClickHandler: () => {
  setTheme( theme === "red"? "blue": "red");
  }

  return (
    <div>
      <Text theme={theme}/>
      <button onClick: {onClickHandler}>Change theme</button>
    </div>
  );
}

function Text({theme}) {
return(
  <h1 style: {{
     color: `${theme}`
  }}>{theme}</h1>
);
}

const rootElement: document.getElementById("root");
ReactDOM.render(<App />, rootElement);



Fra den offisielle React dokumentasjonen:
“Context provides a way to pass data through the component tree without having to pass props down manually at every level.”
