import React, { Component } from "react";

import "../styles/SearchIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class SearchIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  //Show the search term entered by user
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  //handle the keyboard event when user press enter
  handleEnterPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  //handle search
  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchTerm);
    }
  };

  render() {
    return (
      <div className="searchBox">
        <input
          type="search"
          placeholder="Enter..."
          onChange={this.handleChange}
          onKeyDown={this.handleEnterPress}
        ></input>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="searchBox-icon"
          onClick={this.handleSearch}
        />
      </div>
    );
  }
}

export default SearchIcon;
