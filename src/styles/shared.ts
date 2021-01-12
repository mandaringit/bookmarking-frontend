import { css } from "styled-components";

export const pageContainer = css`
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  animation: fade 0.5s;
  @keyframes fade {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 1;
    }
  }
`;
