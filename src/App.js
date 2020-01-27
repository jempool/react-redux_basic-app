import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./js/store/index";
import { addArticle } from "./js/actions/index";

store.subscribe(() => console.log("Look ma, Redux!!"));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      < br />
      <button
        onClick={() =>
          store.dispatch(
            addArticle({ title: "React Redux Tutorial for Beginners", id: 1 })
          )
        }
      >
        {">>"} click {"<<"}
      </button>
    </div>
  );
}

export default App;
