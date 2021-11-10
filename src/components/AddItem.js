import React, {useState, useRef} from "react";  
import classes from './AddItem.module.css';
import Card from '../layout/Card'
import axios from "axios";

//https://task-3a5a5-default-rtdb.firebaseio.com/
//this can be class component
const AddItem = (props) => {

  const item = useRef();
  const addTodoItemHandler = (e) => {
    const value ={ item: item.current.value};
     
    axios.post('https://todoapp-83079-default-rtdb.firebaseio.com/posts.json', value).then(
      res => {
      
      }
    )
    e.preventDefault();
  }



   return ( 
    <Card> 
      <div className="header">    
         <label>Add your to do here: </label>
      </div>  

      <div className={classes.table}>
        <form onSubmit={addTodoItemHandler}>
          <input type="text"  
             ref={item}/>  
          <button className="ui button"
           type="submit" >   Submit  </button>
         </form>
      </div>

    </Card>
     

)  
    
     
   
}

export default AddItem;