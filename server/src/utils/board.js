
// Currently doesn't check whether any given move is valid (as long as it's on the board)
// Also ignores piece types and may work with strange or invalid pgn data. Again, no attempt is made to validate
class ChessBoard {
  constructor() {
    this.board = new Array(8);
    for(let i=0; i<8; i++) {
      this.board[i] = new Array(8);
    }
  }

  loadPgn(pgnData) {
    this.pgn = pgnData;
  }

  _calculateLocation(move) {
    if(/[0-1]-[0-1]/.test(move))
      return {rowIndex: null, colIndex: null, gameOver: true};

    if(move.length > 2) {
      if(move.endsWith('+') || move.endsWith('#')) {
        move = move.slice(-3, -1);
      } else {
        move = move.slice(-2);
      }
    }
    const rowIndex = move.charCodeAt(0) - 'a'.charCodeAt();
    const colIndex = move[1];
    return {rowIndex, colIndex, gameOver: false};
  }
}

function test() {
  const board = new ChessBoard();
  board.loadPgn('1. d4 d5 2. Bg5 Nf6 3. Bxf6 exf6');
}

test();