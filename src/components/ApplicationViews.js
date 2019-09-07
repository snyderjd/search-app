import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import VideoSearch from './video/VideoSearch';
import WebSearch from './web/WebSearch';

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>

                <Route exact path="/video" render={(props) => {
                    return <VideoSearch {...props} />
                }} />

                <Route exact path="/web" render={(props) => {
                    return <WebSearch {...props} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews;

