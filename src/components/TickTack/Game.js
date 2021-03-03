import Boards from "./Boards"
import calculateWinner from '../../helpers/winner'
import { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board]
    if( winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : '0'
    setBoard(boardCopy)
    setXisNext(!xIsNext)
  }

  return (
    <div>
      <Boards squares={board} onClick={handleClick}/>
      { winner ? 'Winner ' + winner : 'NextPlayer: ' + (xIsNext ? 'X' : '0')}
      <div>
        <button className="btn btn-primary my-2" onClick={() => setBoard(Array(9).fill(null))}>
          New Game
        </button>
      </div>
    </div>
   );
}

export default Game;
