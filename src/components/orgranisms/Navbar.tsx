import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { iUser } from "../../types/entity";

export interface NavbarProps {
  /**
   * 로그인한 유저 정보
   */
  loggedInUser: iUser | null;
}

/**
 * 기본 네비게이션입니다.
 */
const Navbar = ({ loggedInUser }: NavbarProps) => {
  return (
    <Nav>
      <div className='container'>
        <div className='main'>
          <Link to='/'>🔖 북마킹</Link>
          {loggedInUser ? <Link to='/myreports'>나의 독후감</Link> : null}
        </div>

        <div className='sub'>
          {!loggedInUser ? (
            <Link to='/login'>로그인</Link>
          ) : (
            // TODO: 로그아웃 구현 필요
            <Link to='/'>로그아웃</Link>
          )}
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #ffecb3;
  border-bottom: 1px solid #f0f0f0;
  height: 3rem;

  .container {
    max-width: 800px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    a + a {
      margin-left: 1rem;
    }

    .main {
      flex-grow: 1;
    }
  }
`;
