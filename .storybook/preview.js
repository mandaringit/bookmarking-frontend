import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/slices/authSlice";

const store = configureStore({ reducer: { auth: authReducer } });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
