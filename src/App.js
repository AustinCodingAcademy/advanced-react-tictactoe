import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        {/*should this be a component*/}
        <div className="row">
          {/*should this be a component*/}
          <div className="cell"></div>
        </div>

        <div id="announce-winner"></div>
        <button id="clear">Clear Board</button>
      </div>
    );
  }
}
export default App;
