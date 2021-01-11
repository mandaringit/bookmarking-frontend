import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/slices/authSlice";
import searchReducer from "../src/slices/searchSlice";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../src/GlobalStyle";
import reportReducer from "../src/slices/reportsSlice";

const store = configureStore({
  reducer: { auth: authReducer, search: searchReducer, reports: reportReducer },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Story />
      </Router>
    </Provider>
  ),
];
