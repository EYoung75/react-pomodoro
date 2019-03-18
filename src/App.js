import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header.jsx";
import Timer from "./components/Timer.jsx";
import Controller from "./components/Controller.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timer />
        <Controller />
      </div>
    );
  }
}

export default App;
