import React , {useState, useEffect}from "react";
import classes from './ItemList.module.css'
import axios from 'axios';

//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const ItemList = () => {

   const url = 'https://todoapp-83079-default-rtdb.firebaseio.com/posts.json';
   const [items, setItem] = useState([]);
   const [itemID, setItemID] =useState();

   useEffect(()=>{
       console.log('hello');
       
       axios.get(url).then(res => {
         
        
         let todo =Object.values(res.data);
            let items = todo.map(i => {return i.item});
            setItem(items);
            console.log(items);
            console.log(Array.isArray(todo));

       }).catch(err => {
           console.log(err);
       });

   },[]);


   const onDelete = (id , e)=>{
    console.log(id);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
     axios.delete(`https://todoapp-83079-default-rtdb.firebaseio.com/posts.json/${id}`).then(
        res => {
        console.log('inside delete', res);
        setItem(items);
     }).catch(err=> console.log(err));
   }

   return (  
     
    //this should be map of get all the list
    
      <div className={classes.container}>
          <ul >
            {items.map((todos ,id) => 
            <li  key={todos.id}> 
                <div className="ui checkbox" style={{margin: `10px`, padding:`2px`}}>
                    <input type="checkbox"/> 
                    <label> {todos}</label> 
                    
                </div>
               
              <button className="ui button" type="submit" 
                onClick={ e => onDelete(id, e)}> 
                 <i className="delete icon"/> Delete
              </button> 
              
            </li> 
         )}
              
          </ul> 
      </div>
      
  ); 
    
   
}

export default ItemList;