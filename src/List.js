import React from 'react'

function List(props) {
   const data = Array.isArray(props.data) ? props.data : [props.data];

  return (
    <ul>
      {
        data.map((item, index) => {
          return <li key ={index}>{item.text}</li>
        })
      }
    </ul>
  )
}

export default List;
