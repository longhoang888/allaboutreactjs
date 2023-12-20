import React from "react";

import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('Long');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Antony", "Long", "Norlan"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = (name) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleClick2 = (name) => {
    console.log(`${name} was click`)
  }
  const handleClickEvent = (e) => {
    console.log(e.target.innerText)
  }

  const handleDoubleClick = () =>{
    console.log('double click')
  }

  return (
    <main>
      <p onDoubleClick={handleDoubleClick}>Hello {name}!</p>
      <button onClick={handleClick}>Count me</button>
      <button onClick={handleNameChange}>Change me</button>
      <button onClick={() => {handleClick('Long')}}>Click me</button>
      <button onClick={(e) => {handleClickEvent(e)}}>Event me</button>
    </main>
  )
}

export default Content;
