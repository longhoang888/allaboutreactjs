import React, { Component } from 'react';


export class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} {this.props.place}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps
