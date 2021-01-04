import React from "react";
import styled from "styled-components";
import LocalLoginForm from "./LocalLoginForm";

export interface PureLoginProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PureLogin = (props: PureLoginProps) => {
  return (
    <Container>
      <LocalLoginForm />
    </Container>
  );
};

const Login = () => {
  return <PureLogin />;
};

export default Login;
