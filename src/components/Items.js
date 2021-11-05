import React, {useState}from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import classes from './Items.module.css';

const Items = () => {
    
    const [itemList, setItemList] = useState([]);

    const addItemListHandler = (item) => {
        let items = [...itemList, item];
        setItemList(items);
    }
    
    return (
        <div className={classes.container}>
           
           <AddItem addItemList={addItemListHandler} />
           <ItemList itemList ={itemList}/>
           

        </div>

    )
}

export default Items;