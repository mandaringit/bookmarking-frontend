import { Story, Meta } from "@storybook/react/types-6-0";
import BookSearchList, { BookSearchListProps } from "./BookSearchList";

export default {
  title: "Molecules/BookSearch/BookSearchList",
  component: BookSearchList,
  decorators: [
    (story) => <div style={{ padding: "1rem 3rem" }}>{story()}</div>,
  ],
} as Meta;

const Template: Story<BookSearchListProps> = (args) => (
  <BookSearchList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  loading: false,
  books: [
    {
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
    {
      title:
        "80년생 김 팀장과 <b>90년생</b> 이 대리가 웃으며 일하는 법 (자꾸 눈치 보게 되는 <b>90년생</b>과 일로 행복해지는 비결)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=16311453",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/163/114/16311453.jpg?type=m1&udate=20200930",
      author: "김범준",
      price: "13500",
      discount: "12150",
      publisher: "한빛비즈",
      pubdate: "20200401",
      isbn: "1157844030 9791157844036",
      description:
        "팀장과 \n<b>90년생</b> 이 대리가 함께 웃으며 일로 행복해지는 비결누구의 부하도 되지 않으려는 <b>90년생</b> 이 대리. 리더로 인정받기 위해 애쓰는 80년생 김 팀장.... 위로부터의 실적 압박은 거세지기만 하고, 팀원들과 소통해서 대책을 강구하려고 해도 ‘왜 그래야 하죠?’라고 따져 묻는 <b>90년생</b> 이 대리를 설득하기조차... ",
    },
    {
      title:
        "<b>90년생</b> 재테크! (네이버 NO.1 재테크 카페 월재연 슈퍼루키 10인의 이야기)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=15986833",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/159/868/15986833.jpg?type=m1&udate=20200313",
      author: "월재연 슈퍼루키 10인",
      price: "14000",
      discount: "12600",
      publisher: "진서원",
      pubdate: "20200107",
      isbn: "1186647361 9791186647363",
      description:
        "〈<b>90년생</b> 재테크!〉 주인공들은 현재를 즐기되, 그들만의 방식으로 균형 있는 삶의 모습을 보여준다. \n  일명 블로그 재테크라 불리는 맛집 탐방, 데이트... 〈<b>90년생</b> 재테크!〉는 금융지식이 해박하지 않은, 아직 재테크가 멀게만 느껴지는 <b>90년생</b>들에게 더욱 제격인 책이다. 월재연 슈퍼루키 10인은 원래... ",
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  books: [],
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  books: [],
};

export const Fetch10Items = Template.bind({});
Fetch10Items.args = {
  loading: false,
  books: [
    {
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
    {
      title:
        "80년생 김 팀장과 <b>90년생</b> 이 대리가 웃으며 일하는 법 (자꾸 눈치 보게 되는 <b>90년생</b>과 일로 행복해지는 비결)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=16311453",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/163/114/16311453.jpg?type=m1&udate=20200930",
      author: "김범준",
      price: "13500",
      discount: "12150",
      publisher: "한빛비즈",
      pubdate: "20200401",
      isbn: "1157844030 9791157844036",
      description:
        "팀장과 \n<b>90년생</b> 이 대리가 함께 웃으며 일로 행복해지는 비결누구의 부하도 되지 않으려는 <b>90년생</b> 이 대리. 리더로 인정받기 위해 애쓰는 80년생 김 팀장.... 위로부터의 실적 압박은 거세지기만 하고, 팀원들과 소통해서 대책을 강구하려고 해도 ‘왜 그래야 하죠?’라고 따져 묻는 <b>90년생</b> 이 대리를 설득하기조차... ",
    },
    {
      title:
        "<b>90년생</b> 재테크! (네이버 NO.1 재테크 카페 월재연 슈퍼루키 10인의 이야기)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=15986833",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/159/868/15986833.jpg?type=m1&udate=20200313",
      author: "월재연 슈퍼루키 10인",
      price: "14000",
      discount: "12600",
      publisher: "진서원",
      pubdate: "20200107",
      isbn: "1186647361 9791186647363",
      description:
        "〈<b>90년생</b> 재테크!〉 주인공들은 현재를 즐기되, 그들만의 방식으로 균형 있는 삶의 모습을 보여준다. \n  일명 블로그 재테크라 불리는 맛집 탐방, 데이트... 〈<b>90년생</b> 재테크!〉는 금융지식이 해박하지 않은, 아직 재테크가 멀게만 느껴지는 <b>90년생</b>들에게 더욱 제격인 책이다. 월재연 슈퍼루키 10인은 원래... ",
    },
    {
      title:
        "<b>90년생</b>과 일하는 방법 (밀레니얼세대의 새로운 가치관에 맞게 일하는 26가지 소통의 기술)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=15760176",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/157/601/15760176.jpg?type=m1&udate=20200113",
      author: "윤영철",
      price: "14800",
      discount: "13320",
      publisher: "보랏빛소",
      pubdate: "20191122",
      isbn: "1187856886 9791187856887",
      description:
        "“<b>90년생</b> 후배와 일하는 거 저만 이렇게 힘든가요?”\n186개 회사 5,000여 팀장이 들려주는 생생한 사례\n<b>90년생</b> 후배와 협업하고 성과를 이끄는 현장 실무... 밀레니얼세대, <b>90년생</b>, 요즘 것들. 여러 이름으로 불리는 이들은 전 세계적으로 화두다. 이들과 원활한 협업이 프로젝트의 성패를 이끌고, 소비 시장을... ",
    },
    {
      title:
        "<b>90년생</b>이 사무실에 들어오셨습니다 (밀레니얼이 어려운 X세대를 위한 코칭 수업)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=16562766",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/165/627/16562766.jpg?type=m1&udate=20200904",
      author: "김현정",
      price: "12800",
      discount: "11520",
      publisher: "자음과모음",
      pubdate: "20200814",
      isbn: "8954444733 9788954444736",
      description:
        "『<b>90년생</b>이 사무실에 들어오셨습니다』의 김현정 저자는 지난 10여 년간 세계적으로 화두가 된 기업 내 ‘세대론’을 국내 현실에 적용하며 꾸준히 강연을 개발하고 다듬어왔다. 현장에서 만난 리더들이 세대 차이로 힘들어할 때 함께 머리를 맞대고 고민했고, 그것을 해결하기 위한 솔루션들을 시행해보았다.... ",
    },
    {
      title: "<b>90년생</b>과 어떻게 일할 것인가",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=14959866",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/149/598/14959866.jpg?type=m1&udate=20191206",
      author: "최경춘",
      price: "16000",
      discount: "14400",
      publisher: "위즈덤하우스",
      pubdate: "20190529",
      isbn: "1190065681 9791190065689",
      description:
        "시장의 트렌드를 선도하는 주요 소비자가 된 <b>90년생</b>은 기업의 흥망성쇠를 좌우하는 세대로 주목받고 있다. 반면에 신입사원으로 입사한 그들로 인해... 《<b>90년생</b>과 어떻게 일할 것인가》는 올드한 리더십 스킬이 아닌, ‘진실한’ 리더십으로 ‘의미 있는 성과’를 만들어내고 미래의 주역이 될 그들과의 세대 차... ",
    },
    {
      title:
        "<b>90년생</b>은 이해 못하는 70년생 부장님의 회심의 한마디 “라떼는 말이야” (어느 <b>90년생</b>의 직장생활 1년 보고서)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=16264781",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/162/647/16264781.jpg?type=m1&udate=20200229",
      author: "조기준",
      price: "15000",
      discount: "13500",
      publisher: "활자공방",
      pubdate: "20200210",
      isbn: "1196947805 9791196947804",
      description:
        "어느 <b>90년생</b>의 첫 직장생활 1년 보고서!\n낯설고 알쏭달쏭한 조직 생리와 섣불리 넘나들기 힘든 조직 내 세대 차이,\n그 속에서 얻은 깨달음과 실전 철학!힘든... 이 책은 <b>90년</b>대생 사회 초년병의 시각으로 조직의 어엿한 일원이 되어가는 과정을 여과 없이 생생히 그려내는 가운데, 이 시대의 직장생활과 일의 의미를... ",
    },
    {
      title:
        "<b>90년생</b>이 팀장의 성과를 만든다 (밀레니얼세대와 X세대 팀장의 사선문화를 통한 소통)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=15768327",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/157/683/15768327.jpg?type=m1&udate=20191213",
      author: "김인옥",
      price: "10000",
      discount: "9000",
      publisher: "텔루스tellus",
      pubdate: "20191120",
      isbn: "1196837708 9791196837709",
      description:
        "요즘 우리 사회의 불편한 단면이자 세대간의 차이를 보여주는 장면들이다. 이 책을 통하여 저자는 18년동안 직장생활을 하면서 격은 조직문화의 경험을 바탕으로 X세대 관리자와 <b>90년생</b>의 사원들이 함께 어울림의 방법을 알려주고 있다.",
    },
    {
      title:
        "<b>90년생</b>과 갈등없이 잘 지내는 대화법 (당신도 존경받는 선배가 될 수 있다!)",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=16215218",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/162/152/16215218.jpg?type=m1&udate=20200214",
      author: "강지연",
      price: "16000",
      discount: "14400",
      publisher: "메이트북스",
      pubdate: "20200203",
      isbn: "1160022720 9791160022728",
      description:
        "너무 어려운 <b>90년생</b>과의 대화, 이렇게 하자!문재인 대통령이 청와대 직원들에게 선물한 책 『<b>90년생</b>이 온다』가 선풍적인 인기를 끌며 <b>90년생</b>의 특징을 잘 표현했다면, 이제는 한발 더 나아가 그들과 현장에서 직접 부딪치며 관계를 맺고 대화하는 방법을 구체적으로 알아갈 때이다. 실제로 최근 회사에서... ",
    },
    {
      title: "<b>90년생</b> 공무원이 왔다",
      link: "http://book.naver.com/bookdb/book_detail.php?bid=17525025",
      image:
        "https://bookthumb-phinf.pstatic.net/cover/175/250/17525025.jpg?type=m1&udate=20201201",
      author: "정부혁신어벤져스",
      price: "0",
      discount: "",
      publisher: "경성e-북스",
      pubdate: "20201118",
      isbn: "1156982960 9791156982968",
      description:
        "오랜 기간 베스트셀러로 주목을 받고 있는 임홍택 작가의 《<b>90년생</b>이 온다》라는 책은 이를 잘 보여... 이 책 《<b>90년생</b> 공무원이 왔다》에는 이러한 공직 사회의 변화에 대한 여러 목소리가 담겨 있습니다.... 역할을 담당할 <b>90년</b>대생 공무원에게도 힘찬 격려의 박수를 보냅니다. 감사합니다.행정안전부 장관 진 영",
    },
  ],
};
