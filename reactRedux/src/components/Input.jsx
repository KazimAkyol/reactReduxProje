import React from 'react'

const Input = ({placeholder, type, id, name}, onchange) => {
  return (
    <input className='h-10 w-full border rounded-md p-2' placeholder={placeholder} type={type} id={id} name={name} onChange={onchange}  />
  )
}

export default Input