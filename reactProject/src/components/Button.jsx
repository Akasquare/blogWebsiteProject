import React, { useState } from 'react'
 
const Button = (props) => {
  return (
    <>
    <button className='rounded-3xl text-white px-5 py-2 bg-[#242424] text-md'  >{props.text}</button>
    </>
  )
}

export default Button