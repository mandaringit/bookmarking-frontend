import React from "react";
import styled from "styled-components";
import { pageContainer } from "../../styles/shared";
import LocalAuthForm from "./LocalAuthForm";

export interface PureAuthProps extends AuthProps {}

export const PureAuth = ({ type }: PureAuthProps) => {
  return (
    <Container>
      {type === "login" ? (
        <LocalAuthForm type='login' />
      ) : (
        <LocalAuthForm type='signup' />
      )}
    </Container>
  );
};

interface AuthProps {
  type: "login" | "signup";
}

const Auth = ({ type }: AuthProps) => {
  return <PureAuth type={type} />;
};

export default Auth;

const Container = styled.div`
  ${pageContainer}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
