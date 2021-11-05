import React from "react";  
import classes from './ItemList.module.css'
const ItemList = (props) => {
   return (  
      //this should be map of get all the list

     <div className={classes.container}>
      <ul>
        {props.itemList.map((todos ,id) => 
         <li>
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