import React from 'react'
import ToDoItem from './ToDoItem'
import cn from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ToDoList = ({ activities, changeState, deleteState}) => {

  return (
    < div className='h-4/5 relative overflow-y-auto overflow-x-hidden'>
      <div className={cn('absolute flex items-center justify-center w-full h-full text-6xl font-semibold text-sky-800 mx-5 opacity-0 transition-opacity duration-300 pointer-events-none', { 'opacity-50': activities.length === 0 })}>Well done!</div>
      <TransitionGroup>
        <div className='text-3xl font-medium text-sky-800 mx-5 '>Active:</div>
        {activities.map((activity) =>
          <CSSTransition
            timeout={500}
            classNames='ToDo'
          >
            < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState}/>
          </CSSTransition>
        )}
      </TransitionGroup>
      <div className='text-3xl font-mediun text-sky-800 mx-5 '>Completed:</div>
    </ div >

  )
}

export default ToDoList