import { Story, Meta } from "@storybook/react/types-6-0";
import { PureAuth, PureAuthProps } from "./Auth";

export default {
  title: "Pages/Auth",
  component: PureAuth,
} as Meta;

const Template: Story<PureAuthProps> = (args) => <PureAuth {...args} />;

export const Default = Template.bind({});
Default.args = {};
