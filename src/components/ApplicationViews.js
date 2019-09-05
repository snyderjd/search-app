import { Route } from 'react-router-dom';
import React, { Component } from 'react';

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>

                <Route exact path="video" render={(props) => {
                    return <VideoSearch {...props} />
                }} />

                <Route exact path="web" render={(props) => {
                    return <WebSearch {...props} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews;

