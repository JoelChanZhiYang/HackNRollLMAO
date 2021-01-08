import React, { Component } from 'react';

const texts = [
    "Hello there",
    "What's cooking good looking?"
]

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        let item = texts[Math.floor(this.props.randNum * texts.length)];
        return ( <p>{item}</p> );
    }
}
 
export default Text;