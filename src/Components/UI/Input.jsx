import React from 'react'

const Input = (ref) => {

  return (
    <div className='w-5/6 '>
      <input
        {...ref}
      ></input>
    </div>
  )

}

export default Input