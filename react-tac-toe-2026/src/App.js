import { useState } from 'react';

function Square({ value, onSquareClick, isHighlighted }) {
  // const [val, setVal] = useState(value);

  // function handleClick() {
  //   setVal('X');
  // };

  const cssClasses = `square${isHighlighted ? ' highlighted-square' : ''}`;
  
  return (
    <button
      className={cssClasses}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};



function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  const [isWon, setIsWon] = useState(false);

  function handleClick(i) {
    // prevents action if the selected square is occupied or if there's a winner
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // nextSquares copies all elements from squares
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);

    onPlay(nextSquares);
  }

  // the const gets to reset because this entire function gets called again on state change
  const [winner, winSquares] = calculateWinner(squares) ?? [null, []];
  let status = "[placeholder]";
  if (winner) {
    if (winner === 'X' || winner === 'O') {
      status = "Winner: " + winner;
    } else {
      status = "The result is a draw!";
    }
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // create array of board-row divs containing arrays of Square elements
  const boardRows = Array(3);
  for (let i = 0; i < boardRows.length; i++) {
    const rowCells = Array(3);

    for (let j = 0; j < rowCells.length; j++) {
      const squareIndex = i * 3 + j;

      rowCells[j] =
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
          isHighlighted={winSquares.includes(squareIndex)}
        />
      ;
    }

    boardRows[i] =
      <div key={i} className="board-row">
        {rowCells}
      </div>
    ;
  }

  return (
    <>
      <div className="status">
        {status}
      </div>

      {boardRows}
    </>
  );
};



export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [movesInAscendingOrder, setMovesInAscendingOrder] = useState(true);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  // append next state of the board to the history, assign that as the last history element
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleSwapMoveOrder() {
    setMovesInAscendingOrder(!movesInAscendingOrder);
  }

  // array of jsx elements
  const moves = history.slice(0, history.length - 1).map((squares, moveNumber) => {
    let description;
    if (moveNumber > 0) {
      const diffIndex = history[moveNumber].findIndex((value, index) => value !== history[moveNumber - 1][index]);

      description = `Go to move #${moveNumber + 1}: (row ${Math.ceil((diffIndex + 1) / 3)}, col ${diffIndex % 3 + 1})`;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={moveNumber}>
        <button onClick={() => jumpTo(moveNumber)}>{description}</button>
      </li>
    );
  });

  let moveList;
  // reverse the order of moves
  if (!movesInAscendingOrder) {
    const limit = moves.length / 2;
    for (let i = 0; i < limit; i++) {
      let temp = moves[i];
      moves[i] = moves[moves.length - 1 - i];
      moves[moves.length - 1 - i] = temp;
    }

    moveList = <ol reversed>{moves}</ol>;
  } else {
    moveList = <ol>{moves}</ol>;
  }
  console.log(moves);

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <p>
          You are at move #{currentMove + 1}
        </p>

        {moveList}

        <button onClick={handleSwapMoveOrder}>
          Sort moves in {movesInAscendingOrder ? "descending" : "ascending"} order
        </button>
      </div>
    </div>
  );
};



function calculateWinner(squares) {
  const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const winState of winStates) {
    const [a, b, c] = winState;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], winState];
    }
  }

  if (!squares.includes(null)) {
    return [Symbol(), []];
  } else {
    return null;
  }
}
