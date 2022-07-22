import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div>
      <ul>
    {
        history.map((_, move)=>{
           return( 
            <li
        style={{color: (move === currentMove) ? 'red' : 'rgb(45, 41, 49)', 
            backgroundColor: (move === currentMove) ? 'white' : 'rgb(45, 41, 49)' }}
            key={move}>
            <button onClick={ ()=>{
                    moveTo(move);
                }
            }>
            { (move === 0) ? "Go to Start Position" : `Go to move #${move}` }
            </button></li> //react uses key to keep track of every elm to retain correct order 
           );
        })
    }
      </ul>
    </div>
  )
}



export default History
