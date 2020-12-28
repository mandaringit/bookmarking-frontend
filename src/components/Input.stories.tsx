import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { CutstomInputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story<CutstomInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: "",
};

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  value: "mandarin.test@gmail.com",
};

export const TextLong = Template.bind({});
TextLong.args = {
  ...Default.args,
  value: "매우 기이이이이이이이이이이이이이이이이이이이이이인 텍스트",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  value: Text.args.value,
};
