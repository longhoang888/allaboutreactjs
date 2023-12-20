// import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import FuncCompo from "./components/FuncCompo";
import Click from "./components/Click";
import Counter from "./components/Counter";
import ParentComp from "./components/ParentComp";
import ClassProps from "./components/ClassProps";
import FunctionPros from "./components/FunctionalProp";

function App() {
  return (
    <div className="App">
        {/* <Header />
        <Content />
        <Footer />
        <FuncCompo/> */}
        {/* <Click/>
        <Counter/>
        <ParentComp/> */}
        <ClassProps name="Long" place="Place X">
            <p> Welcome ^^</p>
        </ClassProps>
        <ClassProps name="Long" place="Place X">
            <button>Click</button>
        </ClassProps>
        <FunctionPros name="Long 3" place="Place 4"></FunctionPros>
    </div>
  );
}

export default App;
