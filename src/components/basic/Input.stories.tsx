import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { CutstomInputProps } from "./Input";

export default {
  title: "Basic/Input",
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story<CutstomInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
