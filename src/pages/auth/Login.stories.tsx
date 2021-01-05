import { Story, Meta } from "@storybook/react/types-6-0";
import { PureLogin, PureLoginProps } from "./Login";

export default {
  title: "Pages/Login",
  component: PureLogin,
} as Meta;

const Template: Story<PureLoginProps> = (args) => <PureLogin {...args} />;

export const Default = Template.bind({});
Default.args = {};
