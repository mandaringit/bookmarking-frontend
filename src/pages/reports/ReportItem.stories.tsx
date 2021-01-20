import { Meta, Story } from "@storybook/react/types-6-0";
import { PureReportItem, PureReportItemProps } from "./ReportItem";
import { Default as MyReportsDefault } from "./MyReports.stories";

export default {
  title: "Pages/MyReports/ReportItem",
  component: PureReportItem,
} as Meta;

const Template: Story<PureReportItemProps> = (args) => (
  <PureReportItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  report: MyReportsDefault.args!.reports![0],
};
