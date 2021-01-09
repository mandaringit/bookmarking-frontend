import { Story, Meta } from "@storybook/react/types-6-0";
import { PureNavbar, PureNavbarProps } from "./Navbar";

export default {
  title: "Organisms/Navbar",
  component: PureNavbar,
} as Meta;

const Template: Story<PureNavbarProps> = (args) => <PureNavbar {...args} />;

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
    id: 1,
    email: "mandarin.test@gmail.com",
    googleId: "131231249812904asdas",
    username: "MANDARIN",
  },
};
