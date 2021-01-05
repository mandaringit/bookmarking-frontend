import { Story, Meta } from "@storybook/react/types-6-0";
import { PureBookSearchItem, PureBookSearchItemProps } from "./BookSearchItem";

export default {
  title: "Molecules/BookSearch/BookSearchItem",
  component: PureBookSearchItem,
} as Meta;

const Template: Story<PureBookSearchItemProps> = (args) => (
  <PureBookSearchItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  alreadyAdded: false,
  book: {
    title: "<b>90년생</b>이 온다",
    link: "http://book.naver.com/bookdb/book_detail.php?bid=14143041",
    image:
      "https://bookthumb-phinf.pstatic.net/cover/141/430/14143041.jpg?type=m1&udate=20201224",
    author: "임홍택",
    price: "14000",
    discount: "12600",
    publisher: "웨일북(whalebooks)",
    pubdate: "20181116",
    isbn: "1188248677 9791188248674",
    description:
      "새로운 세대, <b>90년</b>대 생과 함께 생존하기 위한 가이드!\n조직에서는 신입 사원이, 시장에서는 트렌드를 이끄는 주요 소비자가 되어 우리 곁에 있는 <b>90년</b>대 생. 자신에게 꼰대질을 하는 기성세대나 자신을... 『<b>90년생</b>이 온다』는 빠르게 변하는 세상에 몰려오는 그들과 공존하기 위해 이해하기 어려워도 받아들여야... ",
  },
};

export const AlreadyAdded = Template.bind({});
AlreadyAdded.args = {
  ...Default.args,
  alreadyAdded: true,
};
