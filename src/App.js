import styles from './App.css';
import {useState} from "react";
import {Task} from "./Task";

function App() {
  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");


  const handleChange=(event)=> setNewTask(event.target.value);

  // useEffect (()=> {
  //   alert ("i'm here");
  //   return (alert('not anymore'));
  // },[todoList])

  const addTask = ()=> {
    let task ={
      id : todoList.length ===0 ? 1 : todoList[todoList.length -1].id +1,
      taskName:newTask,
      completed : false
    }
    setTodoList([...todoList,task]);
    setNewTask("");
  }; 

  const deleteTask = (id) =>{
      setTodoList(todoList.filter((task) => id!==task.id ))
  }

  const completeTask=(id) =>{
    setTodoList(
      todoList.map((task)=> {
       if (id ===task.id){
        return {...task, completed : !task.completed};
       }else{
        return task;
       }
      }))
    }
  
  return (
    <div className={styles.App}>
      <div className="addTask">
        <input onChange={handleChange} value={newTask}/>
        <button onClick={addTask}>
            Add Task
            </button>
      </div>
      <div className="list">
        {todoList.map((task) =>{
          return (
            <Task  taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed= {task.completed} completeTask ={completeTask}/>
          );
        })}
      </div>
    </div>
  );
}



export default App;
