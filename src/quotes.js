import React from "react";

export const QUOTES = [
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    text: "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    author: "Mary Kay Ash",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  { text: "Only the paranoid survive.", author: "Andy Grove" },
  {
    text: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    text: "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’",
    author: "Leah Busque",
  },
  {
    text: "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    author: "Michele Ruiz",
  },
  {
    text: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.",
    author: "Arianna Huffington",
  },
  {
    text: "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    author: "Joss Whedon",
  },
];

export class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="text">
        <h1>{QUOTES[this.props.quote].text}</h1>
        <div id="author">- {QUOTES[this.props.quote].author}</div>
      </div>
    );
  }
}

export class NewQuoteButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button id="new-quote" onClick={this.props.clickHandler}>
        New Quote
      </button>
    );
  }
}
