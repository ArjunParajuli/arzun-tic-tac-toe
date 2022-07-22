import React from 'react';

const Square = ({ value, onClick }) => {
  //destructured props(its an object with single key)
  console.log("Square renered")

  return (
    <button
      type="button"
      className="square"
      onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
