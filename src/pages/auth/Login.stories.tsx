import { configureStore } from "@reduxjs/toolkit";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import Login from "./Login";
import authReducer from "./authSlice";

const store = configureStore({ reducer: { auth: authReducer } });

export default {
  title: "Pages/Login",
  component: Login,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template: Story = (args) => <Login />;

export const Default = Template.bind({});
Default.args = {};
