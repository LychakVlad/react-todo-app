import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ activities, changeState, deleteState }) => {

  return (
    < div className='h-4/5'>
      {activities.length === 0
        ? <div className='flex items-center justify-center w-full h-full text-6xl font-semibold text-sky-800 mx-5 opacity-50'>Well done!</div>
        : activities.map((activity) =>
          < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />)
      }
    </ div>

  )
}

export default ToDoList