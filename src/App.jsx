import { useState } from "react"
import { Toaster } from "react-hot-toast"
import AddTodo from "./components/AddTodo"
import DisplayTodo from "./components/DisplayTodo"
import Navbar from "./components/Navbar"
import VisualizationChart from "./components/VisualizationChart"


function App() {
  const [dataHandle, setDataHandle] = useState(false)
  return (
    <div>
      <Navbar></Navbar>
      <VisualizationChart></VisualizationChart>
      <AddTodo prop = {{setDataHandle, dataHandle}}></AddTodo>
      <DisplayTodo prop = {{dataHandle, setDataHandle}}></DisplayTodo>
      <Toaster/>
    </div>
  )
}

export default App
