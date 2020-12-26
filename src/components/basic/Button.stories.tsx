import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { CustomButtonProps } from "./Button";

export default {
  title: "Basic/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "버튼",
};
