import React from 'react'

function Book(props) {
  return (
    <div>
      <p>{props.title} by </p>
      <p>{props.author}</p>
      <button>Remove</button>
    </div>
  )
}

export default Book