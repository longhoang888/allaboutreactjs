import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

import Mario from "./assets/images/Mario.png";

import ReactPlayer from "react-player/youtube";

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  }

  const randomImg = "https://unsplash.com/photos/a-view-of-a-mountain-range-in-the-desert-t3dlLOhdEzs"
  return (
    <div className="App">
      <Searchbar onSearch={handleSearch}/>
      <div>Searching for: {searchQuery}</div>
      <div>
        {" "}
        <nav className="nav">
          <li>
            <Link to="/" className="nav-item">
              Homepage
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About me
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              Contact me
            </Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <p><img height={200} src={Mario} alt="Mario"></img></p>
        <p><img height={50} src={require("./assets/images/Thumb.png")} alt="Thumb"></img></p>
        <p><img height={200} src={randomImg} alt="random"></img></p>
        <p><ReactPlayer url="https://youtu.be/R3GfuzLMPkA?si=flDsog1iITuziDG0" volume={0.3}/></p>
      </div>
    </div>
  );
}

export default App;
