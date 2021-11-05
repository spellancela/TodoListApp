import React from "react";

const VideoItem = ({video, onSelectedVideo}) =>{
    
    return (
        <div className="video-item ui items"> 
         <div onClick={() => onSelectedVideo(video)} className="ui image">
            <img src={video.snippet.thumbnails.medium.url}></img>
          </div>
          <div className="content">
              <h4 className="header"> {video.snippet.title}  </h4>
          </div>
          
          <div className="description"> {video.snippet.description} </div>
        
        </div>
    )
}

export  default VideoItem;