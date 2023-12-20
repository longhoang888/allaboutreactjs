import React, { Component } from "react";

import { MyContext } from "./Winter";

export default class Ice extends Component {
  render() {
    return (
      <div>
        This is Ice and I have this text
        <MyContext.Consumer>
            {value => <div>{value}</div>}
        </MyContext.Consumer>
      </div>
    );
  }
}
