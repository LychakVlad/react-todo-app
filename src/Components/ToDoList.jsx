import React from 'react'
import ToDoItem from './ToDoItem'
import cn from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ToDoList = ({ activities, changeState, deleteState, isFalse, isTrue }) => {

  const isFalseList = isFalse(activities)
  const isTrueList = isTrue(activities)



  return (
    < div className='min-h-screen relative overflow-x-hidden'>
      <div className={cn('absolute flex items-center justify-center w-full min-h-full text-6xl font-semibold text-sky-800 mx-5 opacity-0 transition-opacity duration-300 pointer-events-none', { 'opacity-50': activities.length === 0 })}>Well done!</div>
      <TransitionGroup>
        <div className={cn('text-3xl font-medium text-sky-800 mx-5 opacity-1 transition-opacity duration-300 ', { 'opacity-0': isFalseList.length === 0 })}>Active:</div>
        {
          isFalseList.map((activity) =>
            <CSSTransition
              timeout={500}
              classNames='ToDo'
            >
              < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />
            </CSSTransition>
          )
        }
        <div className={cn('text-3xl font-medium text-sky-800 mx-5 opacity-1 transition-opacity duration-300', { 'opacity-0': isTrueList.length === 0 })}>Completed:</div>
        {
          isTrueList.map((activity) =>
            <CSSTransition
              timeout={500}
              classNames='ToDo'
            >
              < ToDoItem activity={activity} changeState={changeState} deleteState={deleteState} />
            </CSSTransition>
          )
        }
      </TransitionGroup >

    </ div >

  )
}

export default ToDoList