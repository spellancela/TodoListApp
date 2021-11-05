import React from "react";
import classes from './Card.module.css';
const Card =(props)=>{


    return ( 
        <div className={classes.container}> 
          <div className="row">
              <div className="col">
              <div className="ui form">
                 <div className="field">
                        {props.children}
                 </div>     
                </div>
              </div>
          </div>
       </div>
 )  
}

export default Card;