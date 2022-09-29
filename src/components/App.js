import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTask]= useState(TASKS)
  const [category,setSelectedCategory] =useState ("All")
  const[newTaskList,setNewTaskList]= useState (...TASKS)
  const[newTask,setNewTask]= useState ({text:"",category:"code"})
  function deleteTask(deleteTaskdata){
setTask(tasks.filter((task)=> task.text!==deleteTaskdata))
  }
  const showtasks=tasks.filter((task)=> category=== "All"||tasks.category===category)

  function onInputChange(event){
    setNewTask(()=>{
      return{...newTask,[event.target.name]:event.target.value};
    })
  }
  function onTaskFormSubmit(event){
    event.preventDefault();
    setNewTaskList([...newTaskList,newTaskList])
    setNewTask({...newTask,text:""})
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      setSelectedCategory={setSelectedCategory}
      CATEGORIES={CATEGORIES}
      selectedCategory={category}
       />

      <NewTaskForm 
      CATEGORIES={CATEGORIES}
      newTask={newTask}
      onInputChange={onInputChange}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList handleDelete = {deleteTask} tasks = {showtasks} />
    </div>
  );
}

export default App;
