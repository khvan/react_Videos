import axios from 'axios';


const KEY = 'AIzaSyDFNEVu9kjJrhZ-fOA9t7qBpRtY8qFfkls';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})




