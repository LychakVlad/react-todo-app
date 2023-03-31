import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'



const ToDoItem = ({ activity, changeState, deleteState }) => {

  return (

    <div className={cn('flex items-center my-4 border-2 p-4 rounded-3xl bg-slate-100 justify-between  transition-all duration-500 max-w-7xl', { 'opacity-70 ': activity.isCompleted })} >
      <div className='flex items-center'>
        <button
          onClick={() => changeState(activity.id)}
          className='border-2  rounded-lg mx-4 bg-white w-10 h-10'>
          <BsCheck size={38} className={cn('text-sky-700 flex items-center transition-opacity duration-300 ', { 'opacity-0': !activity.isCompleted })} />
        </button>
        <p className={cn('font-open-sans text-lg  font-medium  relative', { 'line-through': activity.isCompleted })}>
          {activity.title}
        </p>
      </div>
      <button
        onClick={() => deleteState(activity.id)}
        className='mx-4 hover:text-sky-500  transition-colors duration-300'>
        <BsTrash size={26} className='text-sky-700  hover:text-sky-500  transition-colors duration-300 ' />
      </button>
    </div >

  )
}

export default ToDoItem