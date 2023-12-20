import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Regular Component")
    return (
      <div>
        <p>I'm regular component {this.props.name}</p>
      </div>
    )
  }
}

export default RegComp
