/* eslint-disable react/jsx-no-duplicate-props */

import React from 'react';
import './App.css';

import Items from './components/Items';
import Button from './layout/Button';
import MainHeader from './layout/MainHeader';

class App extends React.Component {

  render(){
  return (
  
      <div className="body" >
          <MainHeader/>
          <Button/>
          <Items/>
       </div>   

  );
 }
}

export default App;
