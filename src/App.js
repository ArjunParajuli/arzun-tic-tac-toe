import React, {useState} from "react";
import Board from "./components/Board";
import './styles/styles.scss';
import  calculateWinner  from "./winner";
import History from "./components/History";
import Statusmessage from "./components/Statusmessage";


const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true}];

const App = () => {

  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  //               modified to

    const [history, setHistory] = useState(NEW_GAME);
    const [currentMove, setCurrentMove] = useState(0);  // index inside the history array to keep track of the curr move 
    const current = history[currentMove];   // current game state at this move

 // console.log(history);

  const { winner, winningSquares } = calculateWinner(current.board);

  const onSquareClick = (position) =>{        //it is called when the square box is clicked
      // if winner is already there, return 
    if(current.board[position] || winner){     // if position is not null(square is already clicked), value is truthy
      return;
     }
      setHistory((prev)=>{      // gets the previous state as parameter
        const last = prev[prev.length - 1]; //gives the last elm of the prev(current) array
         const newBoard = last.board.map((currentelm, currIndex) => {
          if(position === currIndex){     //position is position of current square
              return last.isXNext ? 'X' : 'O';                  //currIndex is pos of current elem
          }
          return currentelm;
          });
          return prev.concat({ board: newBoard, isXNext: !last.isXNext });
      });
     // setIsXNext(currentIsXNext => !currentIsXNext);  // same as setIsXNext(!isXNext); 
       // so that the next clicked square doesnt become X

       setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move)=>{
    setCurrentMove(move);
  };

  const restartBtn = () =>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className="app">
    <h1>Welcome to Tic-Tac-Toe Game!</h1>
    <Statusmessage winner={winner} current={current} />
    <Board board={current.board} onSquareClick={onSquareClick} winningSquares={winningSquares} />
    <button onClick={restartBtn}>Restart Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;