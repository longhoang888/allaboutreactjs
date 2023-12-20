import React, { useRef, useEffect } from "react";

function FocusHook() {
  const inputEX = useRef(null);

  useEffect(() => {
    inputEX.current.focus();
  }, []);
  return <input ref={inputEX} type="text" />;
}

export default FocusHook;
