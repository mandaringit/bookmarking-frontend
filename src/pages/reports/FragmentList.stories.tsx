import { Meta, Story } from "@storybook/react/types-6-0";
import FragmentList, { FragmentListProps } from "./FragmentList";
import { Default as ReportDetailDefault } from "./ReportDetail.stories";

export default {
  title: "Pages/ReportDetail/FragmentList",
  component: FragmentList,
} as Meta;

const Template: Story<FragmentListProps> = (args) => <FragmentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  fragments: ReportDetailDefault.args!.report!.fragments,
};
