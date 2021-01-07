import { Meta, Story } from "@storybook/react/types-6-0";
import ReportList, { ReportListProps } from "./ReportList";
import { Default as MyReportDefault } from "./MyReports.stories";

export default {
  title: "Pages/MyReports/ReportList",
  component: ReportList,
} as Meta;

const Template: Story<ReportListProps> = (args) => <ReportList {...args} />;

export const Default = Template.bind({});
Default.args = {
  reports: MyReportDefault.args!.reports,
};
