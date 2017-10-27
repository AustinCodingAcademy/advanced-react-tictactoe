import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*function to check if array is full to see when game is over */
function checkArrayFull(array){
  for (let i=0;i<array.length;i++){
    if (array[i] === null || array[i] === ""){
      return false;
    }
  }
  return true;
}

ReactDOM.render(
  <App checkArrayFull={checkArrayFull}/>,
  document.getElementById('root')
);
