import React, { Component } from "react";

import "../styles/Searchbar.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "", //search term
      isActive: false, //search button activate's status
    };
  }

  //Update search value on user input
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  //handle search
  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchTerm);
    }
  };

  render() {
    return (
      <div className="search-container">
        <span className="search-icon"></span>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button
          className={`search-button ${isActive ? "search-button-active" : ""}`}
          onClick={this.handleSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
