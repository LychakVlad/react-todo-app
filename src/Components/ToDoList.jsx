import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ activities }) => {

  return (
    <div>
      {activities.map((activity) =>
        < ToDoItem activity={activity} />

      )}
    </div>

  )
}

export default ToDoList