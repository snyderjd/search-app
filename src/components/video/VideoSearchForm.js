import React, { Component } from 'react';
import VideoResult from './VideoResult';
import VideoManager from './VideoManager';
import './Video.css';

class VideoSearchForm extends Component {
    state = {
        videoSearchInput: "",
        videos: []
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    searchVideos = (event) => {
        VideoManager.getVideos(this.state.videoSearchInput).then(videos => {
            this.setState({ videos: videos.items })
        })
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <div className="searchContainer">
                    <label>Search for Videos</label>
                    <input
                        className="searchInput"
                        type="text"
                        id="videoSearchInput"
                        value={this.state.videoSearchInput}
                        onChange={this.handleFieldChange}
                    />
                    <button onClick={this.searchVideos}>Search for Videos</button>
                </div>
                <div className="resultContainer">
                    {this.state.videos.length > 0 &&
                    this.state.videos.map(video => 
                        <VideoResult
                            key={video.id.videoId}
                            video={video}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default VideoSearchForm;