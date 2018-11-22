import React from 'react';
import ChessBoard from '../ChessBoard';
import BoardControls from '../board-controls';
import Annotations from '../annotations';

export default class MainScreen extends React.Component {

  render() {
    const board = new Array(8);
    let i=1;
    for(let i=0; i<8; i++) {
      board[i] = new Array(8);
      let value=0;
      if(i%2===1 || i%2===7) {
        value = 1;
      }
      for(let j=0; j<8; j++) {
        board[i][j] = value;
      }
    }

    return (
      <main>
        <ChessBoard board={board}/>
        <BoardControls />
        <Annotations />
      </main>
    )
  }
}