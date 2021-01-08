import React, { Component } from 'react';
import './assets/stylesheets/Text.css';

const texts = [
    "Hello there",
    "What's cooking good looking?",
    "Life is a journey, not a destination.",
    "Don't Give Up!",
    "You're almost there.",
    "Discipline is the bridge between goals and accomplishments."
]

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        let item = texts[Math.floor(this.props.randNum * texts.length)];
        return ( <p className='plain_text row_segment'>{item}</p> );
    }
}
 
export default Text;