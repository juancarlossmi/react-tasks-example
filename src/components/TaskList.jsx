// import { tasks as data } from "./tasks"
// import { useEffect, useState } from "react"

// function TaskList () {
//     const [tasks, setTasks] = useState([])
//     useEffect(() => {
//         setTasks(data)
//     }, [])
//     if (tasks.length === 0) {
//         return <h1>No hay tareas</h1>
//     }
//     return (
//         <div>
//             {tasks.map((task) => (
//                 <div key={task.id}>
//                     <h1> {task.title} </h1>
//                     <p> {task.description} </p>
//                 </div>
//             ))}
//         </div>
//     )
// }
// export default TaskList
import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskList () {
    const {tasks} = useContext(TaskContext)
    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard key = {task.id} task={task} /> 
            ))}
        </div>
    )
}
export default TaskList