import React, { Component } from "react";

import "../styles/Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleChange = (event) => {
    this.setState(event.target.value);
  };

  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchTerm);
    }
  };

  render() {
    return (
      <div className="container">
        <span className="icon"></span>
        <input
          className="search-box"
          type="text"
          placeholder="Enter ..."
          value={this.state.searchTerm}
          onchange={this.handleChange}
        ></input>
        <button className="search-button" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
