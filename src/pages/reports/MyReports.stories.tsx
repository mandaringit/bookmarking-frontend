import { Meta, Story } from "@storybook/react/types-6-0";
import { PureMyReports, PureMyReportsProps } from "./MyReports";

export default {
  title: "Pages/MyReports",
  component: PureMyReports,
} as Meta;

const Template: Story<PureMyReportsProps> = (args) => (
  <PureMyReports {...args} />
);

export const Default = Template.bind({});
Default.args = {
  reports: [
    {
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
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 11,
      title: "스티브 잡스(양장본 HardCover)의 생각 모음",
      book: {
        id: 8,
        isbn: "1158360703 9791158360702",
        title: "스티브 잡스(양장본 HardCover)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1584649%3Ftimestamp%3D20201214130533",
        author: {
          id: 10,
          name: "제시 하틀랜드",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 12,
      title:
        "자바 ORM 표준 JPA 프로그래밍(에이콘 오픈 소스 프로그래밍 시리즈)의 생각 모음",
      book: {
        id: 9,
        isbn: "8960777331 9788960777330",
        title:
          "자바 ORM 표준 JPA 프로그래밍(에이콘 오픈 소스 프로그래밍 시리즈)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F838090%3Ftimestamp%3D20210105144951",
        author: {
          id: 11,
          name: "김영한",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 13,
      title: "YouTube 유튜브로 돈 벌기(전면개정판)의 생각 모음",
      book: {
        id: 10,
        isbn: "1187345814 9791187345817",
        title: "YouTube 유튜브로 돈 벌기(전면개정판)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1641739%3Ftimestamp%3D20210105145233",
        author: {
          id: 12,
          name: "이혜강",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 14,
      title: "화차(블랙펜 클럽(Black Pen Club) 24)의 생각 모음",
      book: {
        id: 11,
        isbn: "8954617433 9788954617437",
        title: "화차(블랙펜 클럽(Black Pen Club) 24)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F691000%3Ftimestamp%3D20210105144649",
        author: {
          id: 13,
          name: "미야베 미유키",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 15,
      title: "이유의 생각 모음",
      book: {
        id: 12,
        isbn: "8989722802 9788989722809",
        title: "이유",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1299561%3Ftimestamp%3D20210105145519",
        author: {
          id: 13,
          name: "미야베 미유키",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 16,
      title:
        "속 깊은 JavaScript(자바스크립트)(ECMAScript 표준 문서를 바탕으로 펼치는)의 생각 모음",
      book: {
        id: 13,
        isbn: "1186710098 9791186710098",
        title:
          "속 깊은 JavaScript(자바스크립트)(ECMAScript 표준 문서를 바탕으로 펼치는)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1636839%3Ftimestamp%3D20210104131914",
        author: {
          id: 14,
          name: "양성익",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 17,
      title: "인사이드 자바스크립트의 생각 모음",
      book: {
        id: 14,
        isbn: "8968480656 9788968480652",
        title: "인사이드 자바스크립트",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F945952%3Ftimestamp%3D20210105151714",
        author: {
          id: 15,
          name: "송형주",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 18,
      title: "자바스크립트 완벽 가이드(Programming Insight)의 생각 모음",
      book: {
        id: 15,
        isbn: "8966261795 9788966261796",
        title: "자바스크립트 완벽 가이드(Programming Insight)",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927042%3Ftimestamp%3D20210105145430",
        author: {
          id: 16,
          name: "데이비드 플래너건",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 19,
      title: "함수형 자바스크립트 프로그래밍의 생각 모음",
      book: {
        id: 16,
        isbn: "8966262120 9788966262120",
        title: "함수형 자바스크립트 프로그래밍",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F927083%3Ftimestamp%3D20210105142919",
        author: {
          id: 17,
          name: "유인동",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 20,
      title: "러닝 리액트의 생각 모음",
      book: {
        id: 17,
        isbn: "1162240377 9791162240373",
        title: "러닝 리액트",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1608255%3Ftimestamp%3D20210105145401",
        author: {
          id: 18,
          name: "알렉스 뱅크스",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 21,
      title: "리액트 교과서의 생각 모음",
      book: {
        id: 18,
        isbn: "1160504822 9791160504828",
        title: "리액트 교과서",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1598834%3Ftimestamp%3D20210105143924",
        author: {
          id: 19,
          name: "아자트 마르단",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
    {
      id: 22,
      title: "리액트를 다루는 기술의 생각 모음",
      book: {
        id: 19,
        isbn: "1160505233 9791160505238",
        title: "리액트를 다루는 기술",
        thumbnail:
          "http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1598637%3Ftimestamp%3D20210103145731",
        author: {
          id: 20,
          name: "김민준",
        },
        libraryOwnStatuses: [
          {
            id: 4,
            hasBook: true,
            loanAvailable: true,
            updatedAt: "2021-01-20T11:21:09.459Z",
            library: {
              id: 1,
              code: "146018",
            },
          },
        ],
      },
    },
  ],
};
