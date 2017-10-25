import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: "X",
      playerTwo: "O",
      currentTurn: "X",
      board: ["", "", "", "", "", "", "", "", ""]
    };
  }


  handleClick(index) {
    if(this.state.board[index] === "") {
      this.state.board[index] = this.state.currentTurn
      this.setState({
          board: this.state.board,
          currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne,
      })
    }
    let winArr = this.state.board;
    if ((winArr[0] === winArr[1] && winArr[1] === winArr[2] && winArr[2] !== "") ||
      ( winArr[3] === winArr[4] && winArr[4] === winArr[5] && winArr[5] !== "") ||
      (winArr[6] === winArr[7] && winArr[7] === winArr[8] && winArr[8] !== "")) {
      alert('Horizontal Winner: Player ' + this.state.currentTurn);
    }
    if ((winArr[0] === winArr[3] && winArr[3] === winArr[6] && winArr[6] !== "") ||
      (winArr[1] === winArr[4] && winArr[4] === winArr[7] && winArr[7] !== "") ||
      (winArr[2] === winArr[5] && winArr[5] === winArr[8] && winArr[8] !== "")) {
      alert('Vertial Winner: Player ' + this.state.currentTurn);
    }
    if ((winArr[0] === winArr[4] && winArr[4] === winArr[8] && winArr[8] !== "") ||
      (winArr[2] === winArr[4] && winArr[4] === winArr[6] && winArr[6] !== "")) {
      alert('Diagonal Winner: Player ' + this.state.currentTurn);
    }
  }

  clearBoard() {
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
    })
  }

  render() {
    return (

      <div id="board">
        {this.state.board.map((cell, index) => {
          return <div key={index} onClick={() => this.handleClick(index)} className="cell">{cell}</div>;
        })}
        <div id="announce-winner"></div>
        <h1>Player {this.state.currentTurn} Turn</h1>
        <button id="clear" onClick={() => this.clearBoard()}>Clear Board</button>
      </div>
    );
  }
}
export default App;
