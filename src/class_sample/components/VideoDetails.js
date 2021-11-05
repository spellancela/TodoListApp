import React from "react";

const VideoDetails = ({video}) =>{
    if(!video){
        return <div> <h3> Loading ... </h3></div>
    } 
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div >
        <div className="ui embed"> 
          <iframe src = {videoSrc}/>
        </div> 

        <div className="ui segment">
               <h3 className="ui header"> {video.snippet.title}</h3>
               <p className="ui description"> {video.snippet.description} </p>
               <hr></hr>
               <p> <strong> Posted by:{video.snippet.channelTitle} at {video.snippet.publishTime} </strong></p>
         </div>
     </div>
    )
}

export default VideoDetails;