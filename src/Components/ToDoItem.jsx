import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'


const ToDoItem = (props) => {

  console.log(props)

  return (
    <div className={cn('flex items-center m-4 border-2 p-4 rounded-3xl bg-slate-100 justify-between', { 'opacity-70': props.activity.isCompleted })} >
      <div className='flex items-center'>
        <button className='border-2  rounded-lg mx-4 bg-white w-10 h-10'>
          {props.activity.isCompleted && <BsCheck size={38} className='text-sky-700 flex items-center' />}
        </button>
        <p className={cn('font-open-sans text-lg  font-medium', { 'line-through': props.activity.isCompleted })}>{props.activity.title}</p>
      </div>
      <button className='mx-4'>
        <BsTrash size={26} className='text-sky-700  hover:text-sky-500  transition-colors duration-300 ' />
      </button>
    </div>

  )
}

export default ToDoItem