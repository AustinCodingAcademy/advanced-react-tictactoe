import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div id="board">
        <div className="cell"></div>
        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
      </div>
    );
  }
}
export default App;
