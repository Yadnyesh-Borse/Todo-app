import { useState } from "react"


function App() {
  const[tasks,setTasks]=useState([]);
  const[task,setTask]=useState("");
  const[editID,setEditID]=useState(null);
  const[editTask,setEditTask]=useState("");


   
const handleaddTask=()=>{
  const newTask={
    id:Date.now(),
    taskname:task,
    completed:false
  }
  setTasks((prev)=>[...prev,newTask])
  setTask("")
}

const handleDeleteTask=(id)=>{
setTasks(tasks.filter((item)=>item.id !== id));

}

const handleCompleted=(id)=>{
  setTasks((prev)=>prev.map((item)=>item.id ===id ?{
 ...item,completed:!item.completed
  }:item))
}
console.log(tasks);

  
  return (
    <div>
      <div>
        <input type="text" 
               value={task} 
               onChange={(e)=>setTask(e.target.value)} />
               <button onClick={handleaddTask}>Add Task</button>
      </div>
      <div>
        

        
           {
            tasks.map((item)=>(<div key={item.id}>
            <input type="checkbox" checked={item.completed} 
            onChange={()=>handleCompleted(item.id)} />  
            <h3>{item.taskname}</h3>
              <button onClick={()=>handleDeleteTask(item.id)}>Delete</button>
              {
                editID ===item.id && <input type="text" 
                     value={editTask} 
                     onChange={(e)=>setEditTask(e.target.value)}
                     />
              }
              <button onClick={()=>{setEditID(item.id);setEditTask(item.taskname)}}>Edit</button>
            </div>))
           }

      </div>
      <div>
        <h2>pending</h2>
        <h2>Completed</h2>
        <h2>Total</h2>
      </div>
      
    </div>
  )
}

export default App
