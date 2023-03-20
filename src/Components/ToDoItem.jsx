import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'

const ToDoItem = (props) => {

  return (
    <div className='flex items-center m-4 border-2 p-4 rounded-3xl bg-slate-100 justify-between'>
      <div className='flex items-center'>
        <button className='border-2  rounded-lg mx-4'>
          <BsCheck size={32} className='text-sky-700' />
        </button>
        <p className='font-open-sans text-lg  font-medium'>{props.activity.title}</p>
      </div>
      <button className='mx-4'>
        <BsTrash size={26} className='text-sky-700' />
      </button>
    </div>

  )
}

export default ToDoItem