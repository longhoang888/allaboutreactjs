import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NewCom from "./components/newCom";
import Header from "./components/Header";
import Main from "./components/Main";
import Bag from "./components/Bag";
import Apple from "./components/Apple";
import Pears from "./components/Pears";
import Promo from "./components/Promo";
import Arrow from "./components/Arrow";
import Events from "./components/Events";
import Dog from "./components/Dog";
import Hooks from "./components/Hooks";
import Form from "./components/Form";
import CustomHook from "./components/CustomHook";
import FocusHook from "./components/FocusHook";
import EffectHook from "./components/EffectHook";
import ContextHook from "./components/ContextHook";
import Winter from "./components/Winter";
import MealsProvider from "./components/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import Reducer from "./components/Reducer";
import Homepage from "./components/Homepage"
import AboutMe from "./components/AboutMe"

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
  };

  render() {
    return (
      <div className="App">
        <div>
          <nav className="nav">
            <Link to="/" className="nav-item">
              Homepage
            </Link>
            <Link to="/about-me" className="nav-item">
              About me
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
        <div>
          <Header name="Long" color="purple"></Header>
          <Main greet="Howdy"></Main>
          <Bag children={<Apple color="yellow" number="5" />}></Bag>
          <Bag children={<Pears friend="Peter" />}></Bag>
          <Bag
            children={
              <Promo
                heading="test CSS"
                promoSubHeading="sub headerind"
                css101="having fun"
              />
            }
          />
          <Arrow name="Long"></Arrow>
          <Events></Events>
          <Dog></Dog>
          <Hooks></Hooks>
          <Form></Form>
          <CustomHook></CustomHook>
          <FocusHook></FocusHook>
          <EffectHook></EffectHook>
          <ContextHook></ContextHook>
          <Winter></Winter>
          <MealsProvider>
            <MealsList></MealsList>
            <Counter></Counter>
          </MealsProvider>
          <Reducer></Reducer>
        </div>
      </div>
    );
  }
}

export default App;
