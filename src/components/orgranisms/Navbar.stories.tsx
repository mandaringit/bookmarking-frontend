import { Story, Meta } from "@storybook/react/types-6-0";
import Navbar, { NavbarProps } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
  decorators: [(story) => <Router>{story()}</Router>],
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  loggedInUser: null,
};

export const NotLogIn = Template.bind({});
NotLogIn.args = {
  loggedInUser: null,
};

export const LogIn = Template.bind({});
LogIn.args = {
  loggedInUser: {
    id: "1",
    email: "mandarin.test@gmail.com",
    googleId: "131231249812904asdas",
    username: "MANDARIN",
  },
};
