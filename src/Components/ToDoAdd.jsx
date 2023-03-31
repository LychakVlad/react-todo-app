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
      console.log(activity.title.length)
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
      <form className="flex  items-start  min-w-full  justify-between">
        <p className="text-3xl font-semibold text-sky-700 mx-5"> Anything to do?</p>
        <div className='flex  flex-col w-full  justify-center'>
          <Input
            value={activity.title}
            className='p-3 w-full border-2 border-sky-700 rounded-md focus:outline-none focus:border-sky-500 font-open-sans font-medium text-lg'
            onChange={e => setActivity({ ...activity, title: e.target.value })}
            placeholder='Write it down'
            type='text'
          />
          {<div className={cn('opacity-0 text-red-500 p-4 transition-opacity duration-300', { 'opacity-100': ((inputEmpty && error)) })}>{error}</div>}
        </div>


        <Button
          className={cn("bg-sky-700 rounded-3xl p-2 mx-4 transition-opacity duration-500 hover:opacity-70", { "opacity-0 pointer-events-none": (activity.title.length === 0) })}
          onClick={addNewActivity} />
      </form>
    </div>
  )

}

export default ToDoAdd