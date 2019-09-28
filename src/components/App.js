import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = {videos: [], selectedVideos: null}

  onVideoSelect = (video)=>{
    this.setState({selectedVideos: video})
  }

  onTermSubmit = async (term)=>{
   const response = await youtube.get('/search', {
       params: { 
         q: term
       }
    })
    this.setState({videos: response.data.items})
  }
  render () {
    
    return (
    <div className="ui container">
      <SearchBar onFormSubmit = {this.onTermSubmit} />
      
        <VideoDetail video = {this.state.selectedVideos}/>
      
      <div>
        <VideoList 
        videos={this.state.videos} 
        onVideoSelect = {this.onVideoSelect}
        /></div>
    </div>
    
    )
  }
}

export default App;
