import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap");
  html,
  body,
  #root {
    height: 100%;
    font-family: "Nanum Myeongjo", serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
