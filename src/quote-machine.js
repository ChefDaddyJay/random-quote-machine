import React from "react";
import "./style.css";
import { QUOTES, Quote, NewQuoteButton } from "./quotes";

export default class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentQuote: Math.floor(Math.random() * QUOTES.length) };
  }
  handleClick(event) {
    this.setState({ currentQuote: Math.floor(Math.random() * QUOTES.length) });
  }
  render() {
    return (
      <div id="quote-box">
        <Quote quote={this.state.currentQuote} />
        <NewQuoteButton clickHandler={this.handleClick.bind(this)} />
        <ShareLinks />
      </div>
    );
  }
}

class ShareLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="share_links">
        <img src="https://img.shields.io/badge/twitter-%1DA1F2.svg?style=social&logo=twitter&logoColor=#1DA1F2" />
        <img src="https://img.shields.io/badge/facebook-%1877F2.svg?style=social&logo=facebook&logoColor=#1877F2" />
      </div>
    );
  }
}
