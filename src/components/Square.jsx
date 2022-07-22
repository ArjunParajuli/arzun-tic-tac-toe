import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  //destructured props(its an object with single key)
  //console.log("Square renered")

  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
       fontWeight: isWinningSquare ? 'bold' : 'normal', 
       color: isWinningSquare ? 'red' : 'white'
      }} >
      {value}
    </button>
  );
};

export default Square;
