import React, { Component } from 'react';
import './assets/stylesheets/Text.css';

let texts = [
    "Hello there",
    "What's cooking good looking?",
    "Life is a journey, not a destination.",
    "Don't Give Up!",
    "You're almost there.",
    "Discipline is the bridge between goals and success.",
    "Nothing ever results from half measures",
    "You can do it!",
    "Rome was no built in a day.",
    "That's it? You're giving up?",
    "Your mother did not raise a quitter",
    "Come on, just a bit more.",
    "Last stretch, I swear",
    "Just one more scroll away"
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

shuffle(texts);

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let item = texts[Math.floor(this.props.randNum * texts.length)].toUpperCase();
        return ( <p className='plain_text row_segment'>{item}</p> );
    }
}
 
export default Text;