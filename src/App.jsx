// import TaskList from "./TaskList"

// function App() {
//   return (
//     <div>
//       <TaskList/>
//     </div>
//   )
// }
// export default App

import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}
export default App