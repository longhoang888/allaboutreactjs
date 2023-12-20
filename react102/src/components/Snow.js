import React, { useContext } from "react";

import { MyContext } from "./Winter";

function Snow() {
  const contextValue = React.useContext(MyContext);
  return (
    <div>
      <p>This is Snow and I have access to {contextValue} from Winter</p>
    </div>
  );
}

export default Snow;
