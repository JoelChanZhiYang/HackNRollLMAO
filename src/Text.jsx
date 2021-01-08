import React, { Component } from "react";
import "./assets/stylesheets/Text.css";

let texts = [
  "Hello there",
  "What's cooking good looking?",
  "Life is a journey, not a destination.",
  "Don't Give Up!",
  "You're almost there.",
  "Discipline is the bridge between goals and success.",
  "Nothing ever results from half measures",
  "You can do it!",
  "Rome was not built in a day.",
  "That's it? You're giving up?",
  "Your mother did not raise a quitter",
  "Come on, just a bit more.",
  "Last stretch, I swear",
  "Just one more scroll away",
  "This is definitely not a waste of your time",
  "You didn't come this far to only come this far.",
  "You only fail when you stop trying",
  "Don't stop until you're proud",
  "Good things take time",
  "Your success lie in you",
  "Be you\nDo you\nFor you",
  "Scroll to you drop!",
  "Your only limit is your mind",
  "Just do it",
  "Trust me, it's worth it",
  "Great things take time",
  "This is very productive, don't worry",
];

const disText = ['hi']


class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {randNum: Math.random()};
  }

  render() {
    let item = this.props.length < 500 ? texts[
      Math.floor(this.state.randNum * texts.length)
    ].toUpperCase(): disText[
        Math.floor(this.state.randNum * disText.length)
      ].toUpperCase()
    return <p className="plain_text row_segment">{item}</p>;
  }
}

export default Text;
