import { Meta, Story } from "@storybook/react/types-6-0";
import FragmentItem, { FragmentItemProps } from "./FragmentItem";
import { Default as ReportDetailDefault } from "./ReportDetail.stories";

export default {
  title: "Pages/ReportDetail/FragmentItem",
  component: FragmentItem,
} as Meta;

const Template: Story<FragmentItemProps> = (args) => <FragmentItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  fragment: ReportDetailDefault.args!.report!.fragments[0],
};
