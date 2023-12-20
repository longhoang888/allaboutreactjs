import React, { Component } from "react";
import icon1 from "../asset/Thumb1.png";
import icon2 from "../asset/Thumb2.png";

export class newCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to OnlyFan",
      subcribed: "Join me",
      imageURL: icon1,
    };
  }

  styles = {
    fontstyle: "italic",
    color: "purple",
  };

  Buttonchange = () => {
    this.setState({
      message: "Pay the subscription fee",
      subcribed: "Watch me",
    });
  };

  imageUpdate = () => {
    this.setState(
        {
            imageURL: icon2,
            message: "Thumb Up Men!!!"
        }
    )
    
  }

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.subcribed}</button>
        <p>
          <img
            style={{ width: "100px", height: "100px" }}
            src={this.state.imageURL}
            onClick={this.imageUpdate}
            alt=""
          />
        </p>
      </div>
    );
  }
}

export default newCom;
