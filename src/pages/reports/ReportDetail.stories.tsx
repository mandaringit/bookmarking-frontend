import { Meta, Story } from "@storybook/react/types-6-0";
import { PureReportDetail, PureReportDetailProps } from "./ReportDetail";

export default {
  title: "Pages/ReportDetail",
  component: PureReportDetail,
} as Meta;

const Template: Story<PureReportDetailProps> = (args) => (
  <PureReportDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  report: {
    id: 10,
    title: "스티브 잡스의 생각 모음",
    fragments: [
      {
        id: 1,
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        createdAt: "2021-01-06T15:19:29.457Z",
      },
      {
        id: 2,
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        createdAt: "2021-01-06T15:19:44.636Z",
      },
    ],
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
