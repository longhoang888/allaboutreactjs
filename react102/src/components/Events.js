import React, { useState } from "react";

/*
Statefull component
*/

function Events() {
  const [buttLicked, setbuttLicked] = useState(false);
  const [tougeLicked, setTougeLicked] = useState(false);

  const clickButtHandler = () => {
    setbuttLicked(true);
  };

  return (
    <div>
      <div>
        <button onClick={clickButtHandler}>Lick my butts</button>
        {buttLicked && <p>He licked my butt</p>}
      </div>

      <div>
        <button
          onClick={() => {
            setTougeLicked(true);
          }}
        >Lick my touge</button>
        {tougeLicked && <p>He licked my touge</p>}
      </div>
    </div>
  );
}

export default Events;
