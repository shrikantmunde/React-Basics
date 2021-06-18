import React from 'react';

const Text = (props) => {
  const style = {
     color: props.colorofthat,
  };
  if (!props.colorofthat) {
    style.color = 'Green'
  }
  //  return <p style={style}> Hello World </p>;
  return  props.isActive && <p style={style}>{props.text}</p>;
};

export default Text;
