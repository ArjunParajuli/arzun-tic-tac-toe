import React from "react";

const Statusmessage = ({ winner, current }) =>{
     // winner=null means theres no winner yet 
//   const message = winner ?  ` Player ${winner} is the winner ` : ` Player ${current.isXNext? 'X' : 'O' }'s turn ` 

//  if all squrs are already filled, callback fun returns a bool val
const noMovesLeft = current.board.every(elm => elm !== null);

return(
        <div className="status-message">
              {/* when we have a winner  */}
             { winner &&  <>
               <span className={winner === 'X' ? 'text-green' : 'text-orange' }>{winner}  is the Winner</span>
             </>  }   
             {/*if we dont have a winner yet */}
              {/* Player ${current.isXNext? 'X' : 'O' }'s turn  */}
             { !winner && !noMovesLeft && <>
               <span>Player {current.isXNext? 'X' : 'O' }'s turn </span>
             </>  } 
             {/* if we dont hav winner and all squares filled */}
             { !winner && noMovesLeft && <>
             <span className="text-green">X</span> And <span className="text-orange">O</span> tied</> }
        </div>
    );
};

export default Statusmessage;
