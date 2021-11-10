import React, {useState, useEffect}from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import classes from './Items.module.css';
import axios from "axios";

const url = 'https://task-3a5a5-default-rtdb.firebaseio.com/tasks';

const Items = () => {
    
    const [itemList, setItemList] = useState([]);
     
    const addItemListHandler = (item) => {
        let items = [...itemList, item];
        setItemList(items);
    }
   
    useEffect(() => {
        // getTodoApi();
        console.log('effect');
     }, []);
  
    //  const getTodoApi =  (itemList) => {
    //    axios.get(url).then(response =>{
    //        console.log(response);
    //        setItemList({itemList: response.data})    
    //     }).catch(error => {
    //        console.log(error);
    //     })
    //  };
    
    return (
        <div className={classes.container}>
           
           <AddItem  />
           <ItemList itemList ={itemList}/>
           

        </div>

    )
}

export default Items;