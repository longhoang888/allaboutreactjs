import React from "react";
import Snow from "./Snow";
import Ice from "./Ice";

// Create a Context
export const MyContext = React.createContext();

function Winter() {
  return (
    <div>
      <MyContext.Provider value="This is text pass from Winter component">
        <Snow></Snow>
        <Ice></Ice>
      </MyContext.Provider>
    </div>
  );
}

export default Winter;
