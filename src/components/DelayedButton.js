// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

    clickEvent = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e);
          }, this.props.delay);

    }

    render(){

        return (

            <button onClick ={this.clickEvent}></button>
        )
    }

}

export default DelayedButton