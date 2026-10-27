import { useState } from "react"


function App() {
  const[tasks,setTasks]=useState([]);
  const[task,setTask]=useState("");
   
const handleaddTask=()=>{
  const newTask={
    id:Date.now(),
    taskname:task,
    completed:false
  }
  setTasks((prev)=>[...prev,newTask])
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
              <h3>{item.taskname}</h3>
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
