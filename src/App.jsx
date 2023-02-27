import { Toaster } from "react-hot-toast"
import AddTodo from "./components/AddTodo"
import DisplayTodo from "./components/DisplayTodo"
import Navbar from "./components/Navbar"
import VisualizationChart from "./components/VisualizationChart"


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <VisualizationChart></VisualizationChart>
      <AddTodo></AddTodo>
      <DisplayTodo></DisplayTodo>
      <Toaster/>
    </div>
  )
}

export default App
