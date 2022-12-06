import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import QUOTES from "./quotes";

export default class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <h1>
            "Upon the requirement that a large vocabulary might need be observed
            for little more reason than to fill a void, increasing the volume of
            included text may be of greater than average assistance."
          </h1>
          {/*<h1>"When all you need is a line, connect the dots."</h1>*/}
          <div id="author">- Myself, I. M.e.</div>
        </div>
        <button id="new_quote">New Quote</button>
        <div id="share_links">
          <img src="https://img.shields.io/badge/twitter-%1DA1F2.svg?style=social&logo=twitter&logoColor=#1DA1F2" />
          <img src="https://img.shields.io/badge/facebook-%1877F2.svg?style=social&logo=facebook&logoColor=#1877F2" />
        </div>
      </div>
    );
  }
}
