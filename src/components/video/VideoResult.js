import React, { Component } from 'react';
import './Video.css';


class VideoResult extends Component {
    
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="resultItem">
                    <h3>{this.props.video.snippet.title}</h3>
                    <p>{this.props.video.snippet.description}</p>
                    <p>Date: {this.props.video.snippet.publishedAt}</p>
                    <img src={this.props.video.snippet.thumbnails.default.url} alt="Video thumbnail"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default VideoResult;