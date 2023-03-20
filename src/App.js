import { useState } from "react";
import ToDoAdd from "./Components/ToDoAdd";
import ToDoItem from "./Components/ToDoItem";
import ToDoList from "./Components/ToDoList";


function App() {

  const [activities, setActivity] = useState([
    { id: '1', title: 'Learn the basics of React hooks', isCompleted: false },
    { id: '2', title: 'Learn the basics of Redux', isCompleted: true },
    
  ])

  const createActivity = (newActivity) => {
    setActivity([...activities, newActivity])
  }

  return (
    <div className="w-full h-screen font-open-sans flex items-center flex-col bg-slate-200">
      <p className=" text-sky-700 text-7xl font-bold my-4">TO DO</p>
      <div className="w-4/6 h-5/6 border-slate-300 rounded-2xl border-y border-x p-7 bg-white">
        <ToDoAdd create={createActivity} />
        <ToDoList activities={activities} />
      </div>
    </div>
  );
}

export default App;
