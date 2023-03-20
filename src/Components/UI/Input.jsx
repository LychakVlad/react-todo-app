import React from 'react'

const Input = (ref) => {
  return (
    <div className='w-3/6 '>
      <input
        className='p-3 w-full border-2 border-sky-700 rounded-md focus:outline-none focus:border-sky-500 font-open-sans font-medium text-lg'
        {...ref}
      ></input>
    </div>
  )
}

export default Input