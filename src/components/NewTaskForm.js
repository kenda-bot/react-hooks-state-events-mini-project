import React from "react";

function NewTaskForm({CATEGORIES,newTask,onInputChange,onTaskFormSubmit}) {
  // const [text,settext]= useState ("")
  // const[category,setSelectedCategory]=useState("food")
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   onTaskFormSubmit({text, category});

  // }
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text } onChange  = {(event)=>onInputChange(event)}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {(event)=>onInputChange(event)}>
          {CATEGORIES.map((category)=>{
        
            return category==="All"? null : (<option key= {category} value= {category}>{category}</option>);
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
