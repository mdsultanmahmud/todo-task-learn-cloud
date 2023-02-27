import AddTodo from "./components/AddTodo"
import DisplayTodo from "./components/DisplayTodo"
import VisualizationChart from "./components/VisualizationChart"


function App() {
  return (
    <div>
      <VisualizationChart></VisualizationChart>
      <AddTodo></AddTodo>
      <DisplayTodo></DisplayTodo>
    </div>
  )
}

export default App
