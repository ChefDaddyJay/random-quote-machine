import ReactDom from "react-dom/client";
import React from "react";
import QuoteMachine from "./quote-machine";
import "./style.css";

const root = ReactDom.createRoot(document.getElementById("app"));

const App = () => {
  return <QuoteMachine />;
};

root.render(<App />);
