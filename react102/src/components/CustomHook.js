import React, { useState, useEffect} from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function CustomHook() {
  const width = useWindowWidth();

  return <div>window width is {width}px</div>;
}

export default CustomHook;
