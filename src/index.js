import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/main-import.scss";
import ShowsState from "./context/ShowsState";

ReactDOM.render(
  <ShowsState>
    <Router>
      <App />
    </Router>
  </ShowsState>,
  document.getElementById("root")
);
