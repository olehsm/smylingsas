+++
author = "Ole Halvor Smylingsås"
description = ""
pageresources = ["https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c", "https://www.smashingmagazine.com/2020/01/introduction-react-context-api/", "https://reactjs.org/docs/hooks-state.html"]
categories = []
tags = ["JS", "React", "Hooks", "Context API"]     
slug = ""
title = "React Hooks and Context API"
date = 2020-02-23T18:41:11+01:00
draft = "false"
featuretext = ""
featureimg = ""
comments = "false"
+++

State Management with React Hooks and Context API.

According to the React Docs:
“Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.”

useState Hook
useContext Hook

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function App() {
  const[theme, setTheme] = React.useState("red");

  const onClickHandler = () => {
  setTheme( theme === "red"? "blue": "red");
  }

  return (
    <div>
      <Text theme={theme}/>
      <button onClick = {onClickHandler}>Change theme</button>
    </div>
  );
}

function Text({theme}) {
return(
  <h1 style = {{
     color: `${theme}`
  }}>{theme}</h1>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



According to the React documentation:
“Context provides a way to pass data through the component tree without having to pass props down manually at every level.”

