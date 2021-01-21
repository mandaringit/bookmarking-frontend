import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../slices/authSlice";
import { useAppDispatch } from "../../store";
import { iUser } from "../../types/entity";

interface SelectableLinkProps {
  to: string;
  children: React.ReactNode;
}

/**
 * 선택시 pathname을 통해 선택 여부 확인
 */
const SelectableLink = ({ children, to }: SelectableLinkProps) => {
  const { pathname } = useLocation();
  return (
    <Link to={to} className={`link nav ${pathname === to && "selected"}`}>
      {children}
    </Link>
  );
};
export interface PureNavbarProps extends NavbarProps {
  onLogout: () => void;
}

export const PureNavbar = ({ loggedInUser, onLogout }: PureNavbarProps) => {
  return (
    <Nav>
      <Container>
        <div className='main'>
          <Link className='link' to='/'>
            🔖 북마킹
          </Link>
        </div>
        <div className='sub'>
          {!loggedInUser ? (
            <>
              <SelectableLink to='/login'>로그인</SelectableLink>
              <SelectableLink to='/signup'>회원가입</SelectableLink>
            </>
          ) : (
            <>
              <SelectableLink to='/search'>검색</SelectableLink>
              <SelectableLink to='/myreports'>독후감</SelectableLink>
              <SelectableLink to='/mywishes'>위시리스트</SelectableLink>
              <span className='link' onClick={onLogout}>
                로그아웃
              </span>
            </>
          )}
        </div>
      </Container>
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
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onLogout = async () => {
    const { meta } = await dispatch(logout());
    if (meta.requestStatus === "fulfilled") {
      localStorage.removeItem("mandarin-dev");
      history.push("/");
    }
  };

  return <PureNavbar loggedInUser={loggedInUser} onLogout={onLogout} />;
};

export default Navbar;

// 전체적인 네비게이션 모습
const Nav = styled.nav`
  /* sticky는 top, bottom 이런 속성이 하나라도 있어야 함 */
  position: sticky;
  top: 0;
  border-bottom: 2px solid black;
  background-color: white;
  height: 3rem;
`;

// 네비게이션 내부
const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  .main {
    flex-grow: 1;
  }

  .link {
    text-decoration: none;
    color: black;
    font-weight: bold;
    &.nav {
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
      &.selected {
        opacity: 1;
      }
    }
  }

  a + a,
  a + span {
    margin-left: 1rem;
  }
`;
