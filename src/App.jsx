import { useState } from "react"
import { Toaster } from "react-hot-toast"
import AddTodo from "./components/AddTodo"
import DisplayTodo from "./components/DisplayTodo"
import Navbar from "./components/Navbar"
import VisualizationChart from "./components/VisualizationChart"


function App() {
  const [dataHandle, setDataHandle] = useState(false)
  const [todos, setTodos] = useState({})
  return (
    <div>
      <Navbar></Navbar>
      <VisualizationChart prop = {{todos}}></VisualizationChart>
      <AddTodo prop={{ setDataHandle, dataHandle }}></AddTodo>
      <DisplayTodo prop={{ dataHandle, setDataHandle, todos, setTodos }}></DisplayTodo>
      <Toaster />
    </div>
  )
}

export default App
