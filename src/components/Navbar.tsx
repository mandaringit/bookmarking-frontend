import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectLoggedInUser } from "../features/auth/authSlice";

const Container = styled.nav`
  background-color: black;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
  }

  a + a {
    margin-left: 1rem;
  }
`;

const Navbar = () => {
  const loggedInUser = useSelector(selectLoggedInUser);
  return (
    <Container>
      <Link to='/'>home</Link>
      {loggedInUser ? (
        <>
          <Link to='/todos'>todos</Link>
        </>
      ) : (
        <>
          <Link to='/login'>login</Link>
        </>
      )}
    </Container>
  );
};

export default Navbar;
