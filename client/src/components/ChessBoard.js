
import React from 'react';

import './ChessBoard.css';

export default class ChessBoard extends React.Component {

  render() {
    let i=1;
    const renderedBoard = this.props.board.map(row => {
      const rowData = row.map(square => {
        const color = i%2===0 ? 'black_square' : 'white_square';
        i++;
        return <td class={color}>{square}</td>
      })
      i++;
      return <tr>{rowData}</tr>
    });

    return (
      <div class='board_container'>
        {renderedBoard}
      </div>
    );
  }
}