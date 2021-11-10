import React, {useState} from "react";  
import classes from './AddItem.module.css';
import Card from '../layout/Card'
import axios from "axios";

const url = 'https://task-3a5a5-default-rtdb.firebaseio.com/';

//this can be class component
const AddItem = (props) => {
  const [todoItem,setTodoItem] = useState('');

  const addTodoItemHandler = (e) => {
    
      addToDoList();
     e.preventDefault();
  }

  const addToDoList =  () => {
     axios.post(url, {todoItem}).then(response => {
       console.log(response);
     })
  };
   return ( 
    <Card> 
      <div className="header">    
         <label>Add your to do here: </label>
      </div>  

      <div className={classes.table}>
      
          <input type="text"  
            onChange={(e) => setTodoItem(e.target.value)} 
            value={todoItem}/>  
          <button className="ui button"
           type="submit" onClick={addTodoItemHandler} >   Submit  </button>

      </div>

    </Card>
     

)  
    
     
   
}

export default AddItem;