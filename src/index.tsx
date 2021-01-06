import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import customHistory from "./lib/customHistory";
import { checkAuth, tempSetUser } from "./slices/authSlice";
import GlobalStyle from "./GlobalStyle";

if (localStorage.getItem("mandarin-dev")) {
  store.dispatch(
    tempSetUser(JSON.parse(localStorage.getItem("mandarin-dev") as string))
  );
  store.dispatch(checkAuth());
}

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
