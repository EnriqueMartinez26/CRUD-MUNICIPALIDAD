import { useState } from "react";
const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (task) => {
      setTasks([...tasks, task]);
    };
  
    return (
      <main>
        <h2>Task Manager</h2>
        <button onClick={() => addTask({ id: tasks.length + 1, name: `Task ${tasks.length + 1}` })}>
          Add Task
        </button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </main>
    );
  };
  
  export default TaskManager;