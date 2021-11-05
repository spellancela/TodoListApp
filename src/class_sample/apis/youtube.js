import axios from 'axios';


const KEY = 'AIzaSyCwtehMebGaG60uYqroKPmSdJjdou-oyGw';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
       part: "snippet",
       type: "video",
       maxResults: 6,
       key: KEY

    }
});

