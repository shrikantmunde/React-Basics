import React from 'react';

function App(props) {
  const style = {
    color: '#ff0000',
    backgroundColor: 'yellow'
  }

  if (props.border == "Red") {
    style.color = 'Black',
    style.border = '2px solid blue'
    style.backgroundColor = 'skyblue'
  }

  return (
    <div style={style}>
      <h2>{props.title}</h2>
      <p>{props.subtitle2}</p>
      <p>Another line</p>
      {props.children}
    </div>
  );
}

export default App;
