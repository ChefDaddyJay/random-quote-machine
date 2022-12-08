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
  {
    text: "Every day that we wake up is a good day. Every breath that we take is filled with hope for a better day. Every word that we speak is a chance to change what is bad into something good.",
    author: "Walter Mosely",
  },
  {
    text: "If you wish to live to see better days, then you must endure the bad days.",
    author: "Abdul Kalam",
  },
  {
    text: "Every situation in life is temporary so, when life is good, make sure you enjoy and receive it fully. And when life isn’t so good, remember that I will not last forever and better days are on the way.",
    author: "Jenni Young",
  },
  {
    text: "The good old days were never that good, believe me. The good new days are today, and better days are coming tomorrow. Our greatest songs are still unsung.",
    author: "Hubert H. Humphrey",
  },
  {
    text: "Only he who has seen better days and lives to see better days again knows their full value.",
    author: "Mark Twain",
  },
  {
    text: "All right, every day ain't going to be the best day of your life, don't worry about that. If you stick to it you hold the possibility open that you will have better days.",
    author: "Wendell Berry",
  },
  {
    text: "Every day is different, and some days are better than others, but no matter how challenging the day, I get up and live it.",
    author: "Muhammed Ali",
  },
  {
    text: "Champagne makes you feel like it's Sunday and better days are just around the corner.",
    author: "Marlene Dietrich",
  },
  {
    text: "I do the very best I can to look upon life with optimism and hope and looking forward to a better day.",
    author: "Rosa Parks",
  },
  {
    text: "I think that we as a people are always prone to think about, well, tomorrow will be a better day. Well, why will it be a better day? And I think the more that we believe in doing things better, doing the right thing rather than hoping that that's going to happen, let's make it happen.",
    author: "Bobby Knight",
  },
  {
    text: "As you wait for better days, don’t forget to enjoy today, in case they’ve already started.",
    author: "Robert Breault",
  },
  {
    text: "Spend eighty percent of your time focusing on the opportunities of tomorrow rather than the problems of yesterday.",
    author: "Brian Tracy",
  },
  {
    text: "Buying flowers is not just a way to bring home beauty. It's an expression of confidence that better days are coming. It's a defiant finger in the face of those naysayers who would have you believe your fortunes will never improve.",
    author: "Pearl Cleage",
  },
  {
    text: "We all have negative days, but that doesn’t mean we are pessimistic. We all do stupid things, but that doesn’t mean we are stupid. It’s important to be able to distinguish between what happens to us and who we are, and look forward with hope for new and better days ahead!",
    author: "Lindsey Stirling",
  },
  {
    text: "Tomorrow is no place to place your better days.",
    author: "Daqve Matthews",
  },
  {
    text: "The trick is to enjoy life. Don't wish away your days, hoping for better ones ahead. The grand and the simple. They are equally wonderful.",
    author: "Marjorie Pay Hinckley",
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
