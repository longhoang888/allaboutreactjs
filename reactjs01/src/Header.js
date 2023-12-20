import React from "react";
import logo from "./logo.svg";

const Header = () => {
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    }
  return (
    <header style={headerStyle}>
        <p><img src={logo} className="App-logo" alt="logo" /></p>
        <p>Who's there?</p>
    </header>
  ) ;
};

export default Header;
