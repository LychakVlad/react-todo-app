import React from 'react'
import ToDoItem from './ToDoItem'
import cn from 'classnames'


const ToDoList = ({ activities, changeState, deleteState, isFalse, isTrue }) => {

  const isFalseList = isFalse(activities)
  const isTrueList = isTrue(activities)



  return (
    < div className='relative overflow-x-hidden'>
      <div className={cn('items-center justify-center text-6xl font-semibold text-sky-800 transition-all flex duration-300 pointer-events-none  py-12 max-md:text-center', { 'hidden': activities.length !== 0 })}>Well done!</div>


      <div className={cn('text-3xl font-medium text-sky-800  opacity-1 transition-all duration-300  ', { 'hidden': isFalseList.length === 0 })}>Active:</div>
      {
        isFalseList.map((activity) =>

          < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />

        )
      }
      <div className={cn('text-3xl font-medium text-sky-800 opacity-1 transition-opacity duration-300', { 'hidden': isTrueList.length === 0 })}>Completed:</div>
      {
        isTrueList.map((activity) =>

          < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />

        )
      }


    </ div >

  )
}

export default ToDoList