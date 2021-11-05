import React, {useState} from "react";  
import classes from './AddItem.module.css';
import Card from '../layout/Card'

const AddItem = (props) => {
  const [todoItem,setTodoItem] = useState('');

  const addTodoItemHandler = (e) => {
     console.log(todoItem); 
     props.addItemList(todoItem);
     e.preventDefault();
  }

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