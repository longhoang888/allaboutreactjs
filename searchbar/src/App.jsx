import React, { Component } from "react";
import Searchbar from "./components/Searchbar";

export default class App extends Component {
  state = { searchQuery: "" };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
    console.log("Searching for:", query);
    // Add your search logic or API call here
  };

  render() {
    return (
      <>
        <div>Test</div>
        <div>
          <Searchbar onSearch={this.handleSearch}></Searchbar>
          <div>Searching for: {this.state.searchQuery}</div>
        </div>
      </>
    );
  }
}
