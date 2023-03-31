import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'
import cn from 'classnames'

const ToDoAdd = ({ create }) => {

  const [activity, setActivity] = useState({ title: '' })
  const [inputEmpty, setInputEmpty] = useState(false)
  const [error, setError] = useState('Fill the input')

  const addNewActivity = (e) => {
    e.preventDefault();
    if (activity.title.length === 0) {
      setInputEmpty(true)
    } else {
      const newActivity = {
        ...activity, id: Date.now(), isCompleted: false
      }
      create(newActivity)
      setActivity({ title: '' })
      setInputEmpty(false)
    }
  }





  return (
    <div>
      <form className="flex  min-w-full  items-center max-lg:flex-col max-lg:justify-center">
        <p className="text-3xl font-semibold text-sky-700 w-full max-lg:w-auto"> Anything to do?</p>
        <div className='flex  flex-col w-full  justify-center relative max-lg:w-auto max-lg:m-auto'>
          <Input
            value={activity.title}
            className='m-2 p-3 w-full border-2 border-sky-700 rounded-md focus:outline-none focus:border-sky-500 font-open-sans font-medium text-lg'
            onChange={e => setActivity({ ...activity, title: e.target.value })}
            placeholder='Write it down'
            type='text'
          />
          {<div className={cn('opacity-0 text-red-500 transition-opacity duration-300 absolute left-4  top-20', { 'opacity-100': ((inputEmpty && error)) })}>{error}</div>}
        </div>


        <Button
          className={cn("bg-sky-700 rounded-3xl p-2 mx-4 transition-opacity duration-500 hover:opacity-70", { "opacity-0 pointer-events-none": (activity.title.length === 0) })}
          onClick={addNewActivity} />
      </form>
    </div>
  )

}

export default ToDoAdd