import React, {useState, useEffect}from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import axios from "axios";
import api from "../api/api";


//const url = 'https://jsonplaceholder.typicode.com/todos';

const Items = () => {

    return (
        <div className="ui containter">
           <AddItem  />
           <ItemList />
        </div>

    )
}

export default Items;