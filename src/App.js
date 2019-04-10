import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    
    return (
      <div>
        <h1>CharacterList</h1>
        <CharacterListView />
      </div>
    )
  }
}

export default App;
