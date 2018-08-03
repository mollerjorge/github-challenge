import React, { Component } from "react";
import Sidebar from "../../components/ui/Sidebar/Sidebar";
import FProject from '../../components/FProject/FProject';
import AppHolder from './App.style.js';

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <AppHolder className="App">
        <Sidebar />

        <FProject/>
      </AppHolder>
    );
  }
}

export default App;
