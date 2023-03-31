import React from 'react'

const Input = (ref) => {

  return (
    <div className='w-5/6 max-lg:w-full max-lg:my-3'>
      <input
        {...ref}
      ></input>
    </div>
  )

}

export default Input