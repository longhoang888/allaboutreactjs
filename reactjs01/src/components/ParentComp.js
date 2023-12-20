import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Long"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Long"
            });
        }, 3000);
    }
    
  render() {
    console.log("Parent Rendered")
    return (
      <div>
        <p>I'm the parent Component</p>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp
