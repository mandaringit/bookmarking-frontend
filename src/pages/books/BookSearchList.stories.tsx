import { Story, Meta } from "@storybook/react/types-6-0";
import { PureBookSearchList, PureBookSearchListProps } from "./BookSearchList";

export default {
  title: "Pages/BookSearch/BookSearchList",
  component: PureBookSearchList,
  decorators: [
    (story) => <div style={{ padding: "1rem 3rem" }}>{story()}</div>,
  ],
} as Meta;

const Template: Story<PureBookSearchListProps> = (args) => (
  <PureBookSearchList {...args} />
);

const BOOK_SAMPLE = [
  {
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
  {
    authors: ["Mario Casciaro", "Luciano Mammino"],
    contents:
      "한 차원 높은 웹 설계를 위한 Node.js 디자인 패턴 가이드 Node.js는 JavaScript를 사용하여 쉽게 확장 가능한 서버 측 어플리케이션을 만들 수 있는 매우 유용한 소프트웨어 플랫폼으로, 효율적인 코드 작성을 통해 설계 및 코드 분할을 가능하게 합니다. 이 책은 Node.js의 비동기 단일 스레드 아키텍처와 주요 디자인 패턴을 설명하고, 비동기식 제어 흐름 패턴과 스트림 구성 요소를 마스터하는 방법을 보여주며, 가장 일반적인 디자인 패턴",
    datetime: "2018-10-20T00:00:00.000+09:00",
    isbn: "8931459424 9788931459425",
    price: 27000,
    publisher: "영진닷컴",
    sale_price: 24300,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F3774855%3Ftimestamp%3D20201230154827",
    title: "Node.js 디자인 패턴",
    translators: ["김성원"],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=3774855&q=Node.js+%EB%94%94%EC%9E%90%EC%9D%B8+%ED%8C%A8%ED%84%B4",
  },
  {
    authors: ["정재곤"],
    contents:
      "[Node.js 프로그래밍]은 누구나 쉽게 접근할 수 있는 자바스크립트 언어로 웹 서버를 만들며 서버 개발에 입문할 수 있도록 구성한 책이다. 책에서 다루는 코드는 Node.js의 최신 Current 버전을 사용하여 새롭게 제공되는 서버 기능을 빠르게 적용할 수 있으며, 모두 실제 서버로 구동 가능하다. 실제 돌아가는 서버를 만들고 클라우드에 업로드하는 다양한 방법까지 설명하기 때문에 서버 개발 전과정을 배우며 Node.js 서버 전문가로 거듭날 수",
    datetime: "2017-03-06T00:00:00.000+09:00",
    isbn: "1187370800 9791187370802",
    price: 35000,
    publisher: "이지스퍼블리싱",
    sale_price: 31500,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1641193%3Ftimestamp%3D20201230152436",
    title: "Do it! Node.js 프로그래밍(전면개정판)",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=1641193&q=Do+it%21+Node.js+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%28%EC%A0%84%EB%A9%B4%EA%B0%9C%EC%A0%95%ED%8C%90%29",
  },
  {
    authors: ["정민석"],
    contents:
      "효율적인 구성으로 단시간에 배우는 Node.js 프로그래밍!  이 책은 Node.js를 이용한 웹 서버 제작 방법을 단계별로 설명하면서 그 과정에서 파생하는 이슈나 문제 해결 과정을 담고 있다. 서버를 개발할 수 있는 언어는 다양하지만 왜 Node.js를 사용해야 하는지를 다른 언어와의 비교를 통해 설명하였고, 저자의 경험을 토대로 콜백(callback) 지옥에 대한 해법도 제시한다.  여러분이 린(lean)하게 개발해야 하는 스타트업 개발자이거나 자바",
    datetime: "2018-08-06T00:00:00.000+09:00",
    isbn: "1188621297 9791188621293",
    price: 20000,
    publisher: "제이펍",
    sale_price: 18000,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1647790%3Ftimestamp%3D20201224141907",
    title: "node.js 프로그래밍(웹 서비스를 만들며 배우는)",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=1647790&q=node.js+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%28%EC%9B%B9+%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC+%EB%A7%8C%EB%93%A4%EB%A9%B0+%EB%B0%B0%EC%9A%B0%EB%8A%94%29",
  },
  {
    authors: ["김경록", "정지현"],
    contents:
      "총 5개 파트 200개의 예제로 구성되어 있는 이 책은, ES6 문법과 함수형 프로그래밍을 한 번에 배우기 위해 만들어졌습니다. 웹 브라우저에서만 사용하던 스크립트 언어였던 자바스크립트를 node.js라는 엔진이 나오면서 웹 브라우저뿐만 아니라 서버, 앱 등 많은 분야에서 사용하기 때문에 개발하는 데 편리함을 줍니다. 또한 노드는 npm이라는 라이브러리 공유 시스템이 있어서 유용한 라이브러리들을 활용할 수 있습니다. node.js를 배우고 싶고, 프로젝트",
    datetime: "2018-03-30T00:00:00.000+09:00",
    isbn: "8956747792 9788956747798",
    price: 23000,
    publisher: "정보문화사",
    sale_price: 20700,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F743761%3Ftimestamp%3D20201227133424",
    title: "초보자를 위한 Node.js 200제",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=743761&q=%EC%B4%88%EB%B3%B4%EC%9E%90%EB%A5%BC+%EC%9C%84%ED%95%9C+Node.js+200%EC%A0%9C",
  },
  {
    authors: ["Surhone Lambert M"],
    contents: "",
    datetime: "2012-04-20T00:00:00.000+09:00",
    isbn: "6133180196 9786133180192",
    price: 60580,
    publisher: "Betascript",
    sale_price: -1,
    status: "",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F2913032%3Ftimestamp%3D20190216153605",
    title: "Node.Js",
    translators: [],
    url: "https://search.daum.net/search?w=bookpage&bookId=2913032&q=Node.Js",
  },
  {
    authors: ["정대천"],
    contents:
      "넷플릭스, 아마존닷컴, 이베이를 포함한 대규모 웹 사이트들이 모놀리식 아키텍처에서 마이크로서비스 아키텍처로 변화하고 있다. 이들은 왜 마이크로서비스 아키텍처를 선택했을까? 마이크로서비스 아키텍처를 직접 설계하고 구현해보며 개념과 구축 방법을 이해하고, 장애 처리, 보안, 로그 수집, 배포, 적용 시점처럼 고려해야 할 주제들도 함께 학습한다.",
    datetime: "2018-02-28T00:00:00.000+09:00",
    isbn: "1160504210 9791160504217",
    price: 26000,
    publisher: "길벗",
    sale_price: 23400,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1596345%3Ftimestamp%3D20201230154211",
    title: "Node.js 마이크로서비스 코딩 공작소",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=1596345&q=Node.js+%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4+%EC%BD%94%EB%94%A9+%EA%B3%B5%EC%9E%91%EC%86%8C",
  },
  {
    authors: ["페르난두 몬테이루"],
    contents:
      "노드(Node.js)는 서버 사이드 애플리케이션을 만드는 사실상 표준 프레임워크다. 이 책은 최신 LTS 버전인 6.x을 기준으로 각종 프레임워크와 라이브러리를 활용하여 모던 웹 앱 개발 과정을 훑어본다. 간단한 SNS, 상점 찾기, 실시간 채팅 등 10가지 예제를 통해 MVC 디자인 패턴, DB, Restful API, 지속적 배포 같은 주제를 자기 것으로 만들 수 있다. 격변하는 웹 개발 환경 속에서 스킬을 빠르게 향상하고 적합한 도구를 선택할",
    datetime: "2017-07-03T00:00:00.000+09:00",
    isbn: "896848757X 9788968487576",
    price: 30000,
    publisher: "한빛미디어",
    sale_price: 27000,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F945175%3Ftimestamp%3D20201115131358",
    title: "Node.js 6.x 블루프린트",
    translators: ["맹기완"],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=945175&q=Node.js+6.x+%EB%B8%94%EB%A3%A8%ED%94%84%EB%A6%B0%ED%8A%B8",
  },
  {
    authors: ["셸리 파워즈"],
    contents:
      "제대로 배우는 『Node.js 프로그래밍』. 이 책은 Node.js에 대해 이론적인 내용 대신, 수많은 예제들과 실제 가장 많이 사용되는 모듈들을 다루는 데 초점을 맞추고 있다. 비동기 개발에 대한 Node의 독특한 접근방법을 살펴보고, Express 프레임워크와 Connect 미들웨어로 Node 애플리케이션 예제를 만들어본다. 나아가 WebSocket을 사용하여 브라우저와 서버 간에 양방향 통신을 구성하고, 클라우드나 자신의 시스템에 Node 애플리케이션",
    datetime: "2013-06-10T00:00:00.000+09:00",
    isbn: "8994774408 9788994774404",
    price: 28000,
    publisher: "비제이퍼블릭",
    sale_price: 25200,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1428849%3Ftimestamp%3D20201210142333",
    title: "Node.js 프로그래밍(제대로 배우는)",
    translators: ["안재우"],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=1428849&q=Node.js+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%28%EC%A0%9C%EB%8C%80%EB%A1%9C+%EB%B0%B0%EC%9A%B0%EB%8A%94%29",
  },
  {
    authors: ["송형주", "고현준"],
    contents:
      "이 책의 목적은 자바스크립트의 핵심 원리, 언어적 특성을 정확하고 알기 쉽게 설명하는 것이다. 물론 이 책이 자바스크립트의 모든 것을 다룬 바이블은 아니다. 그러나 자바스크립트를 제대로 공부하고자 하는 개발자에게 여러 자바스크립트 응용 기술들을 소화할 수 있는 기초 체력을 기를 수 있게 도와주는 좋은 가이드가 될 것이다.",
    datetime: "2014-01-02T00:00:00.000+09:00",
    isbn: "8968480656 9788968480652",
    price: 18000,
    publisher: "한빛미디어",
    sale_price: 16200,
    status: "정상판매",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F945952%3Ftimestamp%3D20201230155531",
    title: "인사이드 자바스크립트",
    translators: [],
    url:
      "https://search.daum.net/search?w=bookpage&bookId=945952&q=%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8",
  },
];

export const Default = Template.bind({});
Default.args = {
  initialStatus: "succeeded",
  loadNextStatus: "idle",
  books: BOOK_SAMPLE.slice(0, 3),
  loaderCallback: () => {},
};

export const FetchInitialBooks = Template.bind({});
FetchInitialBooks.args = {
  ...Default.args,
  initialStatus: "loading",
  books: [],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  initialStatus: "succeeded",
  books: [],
};

export const Initial10Items = Template.bind({});
Initial10Items.args = {
  ...Default.args,
  initialStatus: "succeeded",
  books: BOOK_SAMPLE,
  loadNextStatus: "idle",
};

export const FetchNextBooks = Template.bind({});
FetchNextBooks.args = {
  ...Default.args,
  initialStatus: "succeeded",
  books: BOOK_SAMPLE,
  loadNextStatus: "loading",
};
