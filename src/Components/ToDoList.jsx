import React from 'react'
import ToDoItem from './ToDoItem'
import { Transition } from '@tailwindui/react'
import cn from 'classnames'

const ToDoList = ({ activities, changeState, deleteState }) => {

  return (
    < div className='h-4/5 relative overflow-y-auto overflow-x-hidden'>
      <div className={cn('absolute flex items-center justify-center w-full h-full text-6xl font-semibold text-sky-800 mx-5 opacity-0 transition-opacity duration-300 pointer-events-none', { 'opacity-50': activities.length === 0 })}>Well done!</div>
      {activities.map((activity) =>
        < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />)
      }
    </ div>

  )
}

export default ToDoList