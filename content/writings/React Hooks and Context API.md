---
author: Ole Halvor Smylingsås
description: ""
pageresources:
  - pageresourceUrl: https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
    pageresourceTitle: Gå til Medium (Ektern lenke)
    pageresourceText: Medium - State Management
  - pageresourceUrl: https://www.smashingmagazine.com/2020/01/introduction-react-context-api/
    pageresourceTitle: Gå til Smashing Magazine (Ektern lenke)
    pageresourceText: Smashing Magazine - React Contet
  - pageresourceUrl: https://reactjs.org/docs/hooks-state.html
    pageresourceTitle: Gå til ReactJS (Ektern lenke)
    pageresourceText: ReactJS - State and Hooks
tags:
  - react
  - javascript
slug: react-hooks-og-context-api
title: React Hooks og Context API
date: 2020-02-23T17:41:11.000Z
draft: false
lastmod: 2023-11-08T06:50:48.797Z
preview: /preview-images/react.jpg
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
