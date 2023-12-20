import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import SearchIcon from "./components/SearchIcon";

export default class App extends Component {
  state = { searchQuery: "", searchResult: [], isLoading: false };

  handleSearch = async (query) => {
    this.setState({ searchQuery: query, isLoading: true });
    try {
      // Replace 'http://api.yourdomain.com/search' with your actual API endpoint
      const response = await fetch(
        `http://api.yourdomain.com/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("HTTP error! status: ${response.status}`");
      }
      const data = await response.json();

      this.setState({ searchResult: data, isLoading: false });
    } catch (error) {
      console.log("Error during search:", error);
      this.setState({ isLoading: false });
    }
  };

  render() {

    //deconstruction components state
    const {searchQuery, searchResults, isLoading} = this.state
    return (
      <>
        <div>
          <Searchbar onSearch={this.handleSearch}></Searchbar>
          <div>Searching for: {searchQuery}</div>
          {isLoading && <div>Loading...</div>}
        </div>
        <div>
          <SearchIcon onSearch={this.handleSearch}></SearchIcon>
          <div>Searching for: {searchQuery}</div>
          {isLoading && <div>Loading...</div>}
        </div>
        {/* render the search result here */}
        <div>
          {searchResults.map(result => (
            <div key={result.id}>{result.name}</div>
          ))}
        </div>
      </>
    );
  }
}
