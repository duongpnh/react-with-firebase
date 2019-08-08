import React, { Component } from 'react';
import { H1 } from '@blueprintjs/core';
import './index.css';

class Details extends Component {

    state = {
        iframe: this.props.iframe || 
        `<iframe src="https://codesandbox.io/embed/brave-bell-19nb3?fontsize=14" title="brave-bell-19nb3" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
    }
    
    render() {
        const { subject } = this.props.match.params;
        return (
            <>
                <H1 className="subject">{subject}</H1>
                {this.state.iframe ? this.iFrame(this.state.iframe) : ''}
            </>
        )
    }

    iFrame = (iframe) => (
        <div dangerouslySetInnerHTML={{__html: iframe ? iframe : ""}} />
    )

    getIFrames = () => {
        // TODO: get all iframe from webservice 
    }

}

export default Details;