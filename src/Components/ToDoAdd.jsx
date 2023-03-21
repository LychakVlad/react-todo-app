import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'
import cn from 'classnames'

const ToDoAdd = ({ create }) => {

  const [activity, setActivity] = useState({ title: '' })

  const addNewActivity = (e) => {
    e.preventDefault();
    const newActivity = {
      ...activity, id: Date.now()
    }
    create(newActivity)
    setActivity({ title: '' })
  }





  return (
    <div>
      <form className="flex items-center  min-w-full  justify-between">
        <p className="text-4xl font-semibold text-sky-700 mx-5 "> Anything to do?</p>
        <Input
          value={activity.title}
          onChange={e => setActivity({ ...activity, title: e.target.value })}
          placeholder='Write it down'
          type='text'
        />
        <Button
          className={cn("bg-sky-700 rounded-3xl p-2 m-4 transition-opacity duration-500 hover:opacity-70", { "opacity-0 pointer-events-none": (activity.title.length === 0) })}
          onClick={addNewActivity} />
      </form>
    </div>
  )

}

export default ToDoAdd