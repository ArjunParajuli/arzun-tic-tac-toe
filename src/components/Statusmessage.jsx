import React from "react";

const Statusmessage = ({ winner, current }) =>{
     // winner=null means theres no winner yet 
//   const message = winner ?  ` Player ${winner} is the winner ` : ` Player ${current.isXNext? 'X' : 'O' }'s turn ` 

//  if all squrs are already filled, callback fun returns a bool val
const noMovesLeft = current.board.every(elm => elm !== null);

return(
        <h2>
              {/* when we have a winner  */}
             { winner && ` Player ${winner} is the winner ` }   
             {/*if we dont have a winner yet */}
             { !winner && !noMovesLeft && ` Player ${current.isXNext? 'X' : 'O' }'s turn ` } 
             {/* if we dont hav winner and all squares filled */}
             { !winner && noMovesLeft && " The game is tied" }
        </h2>
    );
};

export default Statusmessage;
