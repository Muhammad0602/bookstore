import React from 'react'

function Book(props) {
  return (
    <div>
      <p>{props.title} </p>
      <p>{props.author}</p>
      <button>Remove</button>
    </div>
  )
}

export default Book