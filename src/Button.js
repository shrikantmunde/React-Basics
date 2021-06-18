import React from 'react';

const Button = (props) => {
  return (
    <div>
      <p onClick={props.dontClick}>Click me</p>
      <button onClick={props.dontClick}>Click me for something to happen</button>
    </div>
  );
};

export default Button;
