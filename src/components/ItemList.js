import React , {useState, useEffect}from "react";
import classes from './ItemList.module.css'
import axios from 'axios';


const ItemList = () => {

   const url = 'https://todoapp-83079-default-rtdb.firebaseio.com/posts.json';
   const [items, setItem] = useState([]);

   useEffect(()=>{
       console.log('hello');
       
       axios.get(url).then(res => {
         let arr = [1,2,3];
        
         let todo =Object.values(res.data);
            let items = todo.map(i => {return i.item});
            setItem(items);
            console.log(items);
            console.log(Array.isArray(todo));

       }).catch(err => {
           console.log(err);
       });
   
   },[]);
   return (  
     
    //this should be map of get all the list
    
      <div className={classes.container}>
          <ul>
            {items.map((todos ,id) => 
            <li key={todos.id}>
            <div className="ui checkbox">
                <input type="checkbox"/> 
                <label> {todos}</label>
            </div>
            </li> 
            )}
            
          </ul> 
      </div>
      
  ); 
    
   
}

export default ItemList;