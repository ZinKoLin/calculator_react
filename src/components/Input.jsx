import React from 'react'
import "./Input.css"

const Input = ({input}) => {

  console.log(input);
  return (
    <div className='inputText'>{input}</div>
  )
}

export default Input