import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app"> 
<h1>Student Assistant</h1> 
<TaskList tasks={tasks} /> 
</div>
    </>
  )
}