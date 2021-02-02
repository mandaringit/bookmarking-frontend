import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import customHistory from "./lib/customHistory";
import GlobalStyle from "./GlobalStyle";
import "moment/locale/ko";
import moment from "moment";
moment.locale("ko");

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
