// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    clickEvent = e => {

        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }


    render() {
        return (
            <button onClick = {this.clickEvent}> </button>
        )
    }
}


export default CoordinatesButton;