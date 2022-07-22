import React, { useState } from 'react';
import Square from './Square';

const Board = ({board, onSquareClick}) => {
   

    const renderSquare = (position)=>{          // this function returns the square component when called
        return(
            <Square value={board[position]} onClick={ ()=>{         // this is the js syntax to 
                onSquareClick(position);                                    // pass predefined func inside onClick event
            }} />
        )
    }

    console.log("Board rendered");

    return(
        <div className="board">
            <div className='board-row'>
                {renderSquare(0)} {/* calling the js func which returns the square compnent insted of compnt itself */}
                {renderSquare(1)}   
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
} 

export default Board;