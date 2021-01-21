import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Container>🍊</Container>;
};

export default Footer;

const Container = styled.footer`
  /* font-family: "Gothic A1", sans-serif; */
  box-sizing: border-box;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  height: 60px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
`;
