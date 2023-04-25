// import { useState } from "react"

// function TaskForm () {
//     const [title, setTitle] = useState("")
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(title)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder="Escribe tu tarea" 
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <button>
//                 Guardar
//             </button>
//         </form>
//     )
// }
// export default TaskForm

import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSaveButtonClick = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
        alert("Por favor, ingresa un titulo y una descripcion")
    } else {
      createTask({
        title,
        description
      })
      setTitle('')
      setDescription('')
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white" onClick={handleSaveButtonClick}>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskForm
