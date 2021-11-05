import React from "react";
import Items from "../components/Items";
import ItemList from "../components/ItemList";
import AddItem from "../components/AddItem";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  
const Button =()=>{
    return (
     <Router>   
       <div className="ui inverted button">
         <Link to={'/'}>  <button className="ui inverted yellow button">Active</button> </Link> 
         <Link to={'/ItemList'}>  <button className="ui inverted primary button">All</button>  </Link> 
         <Link to={'/Completed'} > <button className="ui inverted red button">Completed</button> </Link>
       </div>

    </Router>
    )
}

export default Button;