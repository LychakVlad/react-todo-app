import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

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
          onClick={addNewActivity} />
      </form>
    </div>
  )
}

export default ToDoAdd