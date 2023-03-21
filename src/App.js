import { useState } from "react";
import ToDoAdd from "./Components/ToDoAdd";
import ToDoList from "./Components/ToDoList";


function App() {

  const [activities, setActivity] = useState([
    { id: 1, title: 'Learn the basics of React hooks', isCompleted: false },
    { id: 2, title: 'Learn the basics of Redux', isCompleted: false },
    { id: 3, title: 'End my e-commerce website project', isCompleted: true },
  ])


  const createActivity = (newActivity) => {
    setActivity([...activities, newActivity])
  }



  const changeState = (id) => {
    const copy = [...activities];
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setActivity(copy)
  }

  const deleteState = (id) => {
    const copy = [...activities];
    setActivity(copy.filter(t => t.id !== id))
  }

  const checkState = () => {
    const copy = [...activities];
    const current = copy.filter(t => t.isCompleted !== true)
    console.log(current)
  }

  checkState(activities)

  return (
    <div className="w-full h-screen font-open-sans flex items-center flex-col bg-slate-200">
      <p className=" text-sky-700 text-7xl font-bold my-4">TO DO</p>
      <div className="w-4/6 h-5/6 border-slate-300 rounded-2xl border-y border-x p-7 bg-white">
        <ToDoAdd create={createActivity} />
        <ToDoList activities={activities} changeState={changeState} deleteState={deleteState} />

      </div>
    </div>
  );
}

export default App;
