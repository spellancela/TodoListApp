/* eslint-disable react/jsx-no-duplicate-props */

import React from 'react';
import './App.css';
import SearchBar from './class_sample/components/SearchBar';
import youtube from '../src/class_sample/apis/youtube.js';
import VideoList from './class_sample/components/VideoList';
import VideoDetails from './class_sample/components/VideoDetails';
// import Items from './components/Items';
// import Button from './layout/Button';
// import MainHeader from './layout/MainHeader';

class App extends React.Component {
  //state here
  state = {video : [],
           selectedVideo: null};


  //handler function here
 onSearchSubmit = async term =>{
  
     const response = await youtube.get('/search', {
       params: {
         q : term
       }
     });

     this.setState({video: response.data.items , selectedVideo: response.data.items[0]});

     //console.log(this.state.video);
   
 }

 onSelectedVideo = (video) => {
 
    this.setState({selectedVideo: video});  
     console.log('my data is', video)
 }


  render(){
  return (
  
      <div className="ui container">
          {/* <MainHeader/>
          <Button/>
          <Items/> */}
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
         <div className="ui grid">

            <div className="eleven wide column "> 
                <VideoDetails video={this.state.selectedVideo}/> 
                
            </div>
            <div className="five wide column "> 
                <VideoList videos={this.state.video} onSelectedVideo={this.onSelectedVideo}/>
            </div>
         </div>
      </div>

  );
 }
}

export default App;
