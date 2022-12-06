import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import { Quote, NewQuoteButton } from "./quotes";

export default class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quote-box">
        <Quote />
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
