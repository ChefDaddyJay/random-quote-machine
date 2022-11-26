import ReactDom from "react-dom";
import React from "react";
import QuoteMachine from "./lib/quote-machine";

const App = () => {
  return <QuoteMachine />;
};
ReactDom.render(<App />, document.getElementById("app"));
