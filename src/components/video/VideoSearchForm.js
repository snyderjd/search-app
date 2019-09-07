import React, { Component } from 'react';

class VideoSearchForm extends Component {
    state = {
        videoSearchInput: ""
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    render() {
        return (
            <div>
                <label>Search for Videos</label>
                <input
                    type="text"
                    id="videoSearchInput"
                    value={this.state.videoSearchInput}
                    onChange={this.handleFieldChange}
                />
                <button>Search for Videos</button>
            </div>
        )
    }
}

export default VideoSearchForm;