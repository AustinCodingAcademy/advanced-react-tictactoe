import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      xTurn: true,
      board: ["", "", "", "", "", "","","", ""]
    };
  }



  boardClick(value){
    var tempBoard = this.state.board;
    tempBoard[value] === "" ? (
    tempBoard[value] = this.state.xTurn ? " X " : " O ",
    this.setState({xTurn: !this.state.xTurn})
  )
    :
    tempBoard[value] = tempBoard[value];
    this.setState({board: tempBoard});

  }

  checkWinner(){
    var tempBoard = this.state.board;
    var counter = 0;
    if(tempBoard[0] != "")
      if(tempBoard[0] === tempBoard[1] && tempBoard[1] === tempBoard[2] && tempBoard[0] === tempBoard[2])
        return "Winner!"
      else if(tempBoard[0] === tempBoard[3] && tempBoard[3] === tempBoard[6] && tempBoard[0] === tempBoard[6])
        return "Winner!"
      else if(tempBoard[0] === tempBoard[4] && tempBoard[4] === tempBoard[8] && tempBoard[0] === tempBoard[8])
        return "Winner!"
    if(tempBoard[2] != "")
      if(tempBoard[2] === tempBoard[5] && tempBoard[5] === tempBoard[8] && tempBoard[2] === tempBoard[8])
        return "Winner!"
      else if(tempBoard[2] === tempBoard[4] && tempBoard[4] === tempBoard[6] && tempBoard[2] === tempBoard[6])
        return "Winner!"
    if(tempBoard[7] != "")
      if(tempBoard[7] === tempBoard[4] && tempBoard[4] === tempBoard[1] && tempBoard[7] === tempBoard[1])
        return "Winner!"
      else if(tempBoard[7] === tempBoard[6] && tempBoard[7] === tempBoard[8] && tempBoard[8] === tempBoard[6])
        return "Winner!"
    if(tempBoard[3] != "")
    if(tempBoard[3] === tempBoard[4] && tempBoard[4] === tempBoard[5] && tempBoard[3] === tempBoard[5])
      return "Winner!"

    for(var i=0; i < tempBoard.length; i++){
      if(tempBoard[i] === "")
        counter++;
      }
      if(counter === 0)
        return "Tie!"


  }

  render() {
    return (
      <div id="board">
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(0);

          }
        }>{this.state.board[0]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(1);
          }
          }>{this.state.board[1]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(2);
          }
          }>{this.state.board[2]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(3);
          }
          }>{this.state.board[3]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(4);
              }
          }>{this.state.board[4]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(5);
            }
          }>{this.state.board[5]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(6);
              }
          }>{this.state.board[6]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(7);
            }
            }>{this.state.board[7]}</div>
        <div className="cell" onClick={
          (e)=>{
            this.boardClick(8);
            }
          }>{this.state.board[8]}</div>
        <div id="announce-winner">{this.checkWinner()}</div>
        <button id="clear" onClick={
          (e) => {
            this.setState({board: ["", "", "", "", "", "","","", ""], xTurn: true})
          }
        }>Clear Board</button>
      </div>
    );
  }
}
export default App;
