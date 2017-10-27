import React, { Component } from "react";
import Square from './components/Square';


class App extends Component {
  /*Initial constructor values. squaresArray will hold the values (X,O,null) of all 9 squares. Xnext will determine which player
  is next to play*/
  constructor() {
    super();
    this.state = {
      Xnext: true,
      squaresArray : ["","","","","","","","","",]
    };
  }

  /*Click Function: Every square will call this function onClick. First check if square is filled or not to prevent overriding a 
  square's value on subsequent clicks. If value is empty, fill square with X if Xnext is true, O if false. If value is full, 
  set state to what it previously was*/
  click(i){
    let squaresNewArray = this.state.squaresArray;
    if (this.state.squaresArray[i] === ""){
      if (this.state.Xnext === true){
        squaresNewArray[i] = "X";
        var state = {
          Xnext : !this.state.Xnext,
          squaresArray : squaresNewArray
          };
      }
      else{
        squaresNewArray[i] = "O";
        var state = {
          Xnext : !this.state.Xnext,
          squaresArray : squaresNewArray
          }
      }
    }
    else{
      squaresNewArray[i] = this.state.squaresArray[i];
      var state = {
        Xnext : this.state.Xnext,
        squaresArray : squaresNewArray
        }
    }
    this.setState(state);
  }


  render() { 
    //this.state.Xnext = !this.state.Xnext;
    //console.log(this.state.Xnext);

    /*Set next player display to X or O based on Xnext value */
    let np = this.state.Xnext ? 'X' : 'O';
    let npText = "Next Player: " + np;

    /*Calculate winner by iterating through current squares array values and checking if the indexes in winningRows combinations
    are equal  */
    let winnerText = "";
    let winFlag = false;
    const winningRows = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i=0;i<winningRows.length;i++){
      let [x,y,z] = winningRows[i];
      //console.log(x,y,z);
      //console.log(this.state.squaresArray[x]);
      if (this.state.squaresArray[x] !== "" && this.state.squaresArray[x] === this.state.squaresArray[y] && this.state.squaresArray[y] === this.state.squaresArray[z] ){
        winnerText = "Winarrrr: " + this.state.squaresArray[x];
        npText = "";
        winFlag = true;
      }
    }
    if (this.props.checkArrayFull(this.state.squaresArray) && winFlag === false){
      winnerText = "No winner :( press clear to play again!!";
      npText = "";
    }

  
    return (
      <div id="board">
        <div className="row">
          <Square value={this.state.squaresArray[0]} onClick={() => this.click(0)}/><Square value={this.state.squaresArray[1]} onClick={() => this.click(1)}/><Square value={this.state.squaresArray[2]} onClick={() => this.click(2)}/>
        </div>
        <div className="row">
          <Square value={this.state.squaresArray[3]} onClick={() => this.click(3)}/><Square value={this.state.squaresArray[4]} onClick={() => this.click(4)}/><Square value={this.state.squaresArray[5]} onClick={() => this.click(5)}/>
        </div>
        <div className="row">
          <Square value={this.state.squaresArray[6]} onClick={() => this.click(6)}/><Square value={this.state.squaresArray[7]} onClick={() => this.click(7)}/><Square value={this.state.squaresArray[8]} onClick={() => this.click(8)}/>
        </div>

        <div id="announce-winner">{winnerText}</div>
        <div id="nextplayer">{npText}</div>
        <button id="clear" onClick={
                  () => {
                      var state = {
                        Xnext: true,
                        squaresArray : ["","","","","","","","","",]
                      };
                      this.setState(state);
                  }
        }>Clear Board</button>
      </div>
    );
  }
}
export default App;
