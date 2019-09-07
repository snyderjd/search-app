import React , { Component } from 'react';
import VideoSearchForm from './VideoSearchForm';

class VideoSearch extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>VideoSearch Component</h1>
                <VideoSearchForm />
            </React.Fragment>
        )
    }
}

export default VideoSearch;