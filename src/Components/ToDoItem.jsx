import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'



const ToDoItem = ({ activity, changeState, deleteState }) => {

  console.log(activity.id)

  return (

    <div className={cn('flex items-center m-4 border-2 p-4 rounded-3xl bg-slate-100 justify-between  transition-all duration-500 max-w-7xl', { 'opacity-70 ': activity.isCompleted })} >
      <div className='flex items-center'>
        <button
          onClick={() => changeState(activity.id)}
          className='border-2  rounded-lg mx-4 bg-white w-10 h-10'>
          <BsCheck size={38} className={cn('text-sky-700 flex items-center transition-opacity duration-300 ', { 'opacity-0': !activity.isCompleted })} />
        </button>
        <p className={'font-open-sans text-lg  font-medium  relative'}>
          {activity.title}
          <span className={cn('no-underline absolute block bottom-3  w-full max-w-5xl h-0.5 bg-gray-900 transition-all duration-400 ', { 'w-0': !activity.isCompleted })}></span>
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