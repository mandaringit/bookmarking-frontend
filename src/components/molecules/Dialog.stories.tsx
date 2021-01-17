import { Meta, Story } from "@storybook/react/types-6-0";
import Dialog, { DialogProps } from "./Dialog";

export default {
  title: "Molecules/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  title: "다이얼로그",
  description: "다이얼로그 설명문입니다.",
  children: <div>children 노드 입니다.</div>,
};

export const Cancellable = Template.bind({});
Cancellable.args = {
  ...Default.args,
  cancellable: true,
};
