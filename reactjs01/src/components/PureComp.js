import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render")
    return (
      <div>
        <p>I'm the Pure Component {this.props.name}</p>
      </div>
    )
  }
}

export default PureComp
