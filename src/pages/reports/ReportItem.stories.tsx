import { Meta, Story } from "@storybook/react/types-6-0";
import { PureReportItem, PureReportItemProps } from "./ReportItem";

export default {
  title: "Pages/MyReports/ReportItem",
  component: PureReportItem,
} as Meta;

const Template: Story<PureReportItemProps> = (args) => (
  <PureReportItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  report: {
    id: 10,
    title: "스티브 잡스의 생각 모음",
    book: {
      id: 7,
      isbn: "8937432110 9788937432118",
      title: "스티브 잡스",
      thumbnail:
        "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540262%3Ftimestamp%3D20210105145017",
      author: {
        id: 9,
        name: "월터 아이작슨",
      },
    },
  },
};
