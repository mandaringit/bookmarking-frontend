import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoutThunk } from "../../slices/authSlice";
import { iUser } from "../../types/entity";

export interface PureNavbarProps extends NavbarProps {
  onLogout: () => void;
}

export const PureNavbar = ({ loggedInUser, onLogout }: PureNavbarProps) => {
  return (
    <Nav>
      <div className='container'>
        <div className='main'>
          <Link to='/'>🔖 북마킹</Link>
        </div>
        <div className='sub'>
          {!loggedInUser ? (
            <>
              <Link to='/login'>로그인</Link>
              <Link to='/signup'>회원가입</Link>
            </>
          ) : (
            <>
              <Link to='/search'>검색</Link>
              <Link to='/myreports'>독후감</Link>
              <span onClick={onLogout}>로그아웃</span>
            </>
          )}
        </div>
      </div>
    </Nav>
  );
};

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
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
  };
  return <PureNavbar loggedInUser={loggedInUser} onLogout={onLogout} />;
};

export default Navbar;

const Nav = styled.nav`
  /* sticky는 top, bottom 이런 속성이 하나라도 있어야 함 */
  position: sticky;
  top: 0;
  border-bottom: 2px solid black;
  background-color: white;
  height: 3rem;

  .container {
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .main {
      flex-grow: 1;
    }

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    span {
      font-weight: bold;
    }

    a + a,
    a + span {
      margin-left: 1rem;
    }
  }
`;
