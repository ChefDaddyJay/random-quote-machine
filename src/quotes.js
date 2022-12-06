import React from "react";

const QUOTES = [
  {
    text: "Upon the requirement that a large vocabulary might need be observed for little more reason than to fill a void, increasing the volume of included text may be of greater than average assistance.",
    author: "Myself, I. M.e.",
  },
  {
    text: "When all you need is a line, connect the dots.",
    author: "Myself, I. M.e.",
  },
];

export class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="text">
        <h1>
          "Upon the requirement that a large vocabulary might need be observed
          for little more reason than to fill a void, increasing the volume of
          included text may be of greater than average assistance."
        </h1>
        <div id="author">- Myself, I. M.e.</div>
      </div>
    );
  }
}

export class NewQuoteButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button id="new_quote">New Quote</button>;
  }
}
