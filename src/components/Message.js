import React, { Component } from 'react';

export class Message extends Component {
    state = {
        name: 'gb',
    };

    render() {
        return <div className='header'> hello, {this.state.name}</div>
    }
}