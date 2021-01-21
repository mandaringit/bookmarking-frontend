import { Story, Meta } from "@storybook/react/types-6-0";
import { PureBookSearchItem, PureBookSearchItemProps } from "./BookSearchItem";

export default {
  title: "Pages/BookSearch/BookSearchItem",
  component: PureBookSearchItem,
} as Meta;

const Template: Story<PureBookSearchItemProps> = (args) => (
  <PureBookSearchItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isReportExist: false,
  isWishExist: false,
  book: {
    authors: ["조현영"],
    contents:
      "서버와 데이터베이스 개념을 시작으로 노드의 기본 개념을 차근차근 설명해나간다. 군더더기 없는 직관적인 설명, 풍부한 그림으로 기본 개념을 확실히 이해하고, 노드의 기능과 생태계를 사용해보며 실제로 동작하는 서버를 만들어보자. 웹 서버, 웹 API 서버, SNS 서비스, 실시간 GIF 채팅방, 경매 시스템, 위치 기반 장소 검색 서비스, 커맨드라인 인터페이스를 모두 만들어 볼 수 있다. 실무에 당장 적용할 수 있고, 참고할 수 있는 예제와 코드를",
    datetime: "2018-08-01T00:00:00.000+09:00",
    isbn: "1160505225 9791160505221",
    price: 32000,
    publisher: "길벗",
    sale_price: 28800,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1597391%3Ftimestamp%3D20201211142827",
    title: "Node.js 교과서",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=1597391&q=Node.js+%EA%B5%90%EA%B3%BC%EC%84%9C",
  },
};

export const ReportExist = Template.bind({});
ReportExist.args = {
  ...Default.args,
  isReportExist: true,
};

export const WishExist = Template.bind({});
WishExist.args = {
  ...Default.args,
  isWishExist: true,
};
