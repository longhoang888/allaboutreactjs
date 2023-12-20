import React from "react";

function Arrow(props) {
  const greeting = (name) => {
    return name == "Long" ? "Hello, Long!" : "Hello, friend";
  };


  return <div>This is a text for {greeting(props.name)}</div>;
}

export default Arrow;
