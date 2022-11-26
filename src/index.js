import ReactDom from "react-dom";
import React from "react";
import QuoteMachine from "./quote-machine";
import "./style.css";

const App = () => {
  return <QuoteMachine />;
};
ReactDom.render(<App />, document.getElementById("app"));
