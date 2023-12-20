import React, { useState } from "react";

function Hooks() {
  const [inputText, setInputText] = useState("hello");

  return (
  <div>
    <input value={inputText} onChange={(e) => {
        setInputText(e.target.value)
    }}/>
    <p>You typed: {inputText}</p>

    <div>
        <button onClick={() => setInputText('hello')}>Reset</button>
    </div>
  </div>
  );
}

export default Hooks;
