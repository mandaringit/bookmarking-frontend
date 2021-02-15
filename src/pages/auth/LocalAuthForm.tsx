import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import { LoadingState, LoginForm } from "../../types/utils";
import {
  checkAuth,
  localLogIn,
  selectAuthErrors,
  selectAuthStatus,
  signup,
} from "../../slices/authSlice";
import { useAppDispatch } from "../../store";
import { Link, useHistory } from "react-router-dom";
import { config } from "../../config";

export interface PureLocalAuthFormProps extends LocalAuthFormProps {
  /**
   * 로그인 & 회원가입하는 유저 정보
   */
  user: { email: string; password: string };
  /**
   * 로그인 & 회원가입 실패 에러 메시지
   */
  error: string;
  /**
   * 로딩 상태
   */
  status: LoadingState;
  /**
   * Login 이벤트 핸들러
   */
  onLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Signup 이벤트 핸들러
   */
  onSignup: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Input Change 이벤트 핸들러
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `LocalLoginForm`은 아이디, 패스워드를 통한 직접 로그인 폼입니다.
 */
export const PureLocalAuthForm = ({
  user,
  error,
  status,
  type,
  onLogin,
  onSignup,
  onChange,
}: PureLocalAuthFormProps) => {
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <h1 className='title'>🔖 북마킹</h1>
      <Input
        type='text'
        id='email'
        name='email'
        value={user.email}
        onChange={onChange}
        placeholder='이메일'
        focus
      />

      <Input
        type='password'
        id='password'
        name='password'
        value={user.password}
        onChange={onChange}
        placeholder='비밀번호'
      />
      {type === "login" ? (
        <Button size='medium' disabled={status === "loading"} onClick={onLogin}>
          로그인
        </Button>
      ) : (
        <Button
          size='medium'
          disabled={status === "loading"}
          onClick={onSignup}
        >
          회원가입
        </Button>
      )}

      <div>
        {type === "login" ? (
          <>
            <span>계정이 없으신가요?</span>
            <Link to='/signup'>회원가입</Link>
          </>
        ) : (
          <>
            <span>계정이 있으신가요?</span>
            <Link to='/login'>로그인</Link>
          </>
        )}
      </div>

      <span className='error'>{error ? error : null}</span>
    </Container>
  );
};

interface LocalAuthFormProps {
  /**
   * 로그인 혹은 회원가입 폼 타입
   */
  type: "login" | "signup";
}

const LocalLoginForm = ({ type }: LocalAuthFormProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [user, setUsername] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const errors = useSelector(selectAuthErrors);
  const status = useSelector(selectAuthStatus);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUsername({
      ...user,
      [name]: value,
    });
  };

  const onSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { meta } = await dispatch(signup(user));
    if (meta.requestStatus === "fulfilled") {
      history.push("/");
    }
  };

  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { meta } = await dispatch(localLogIn(user));
    if (meta.requestStatus === "fulfilled") {
      // 토큰 만료 전에 요청하도록 구현 -> 로그아웃 후에 없애야 하나?
      setInterval(() => {
        dispatch(checkAuth());
      }, config.JWT_EXPIRE_TIME);
      history.push("/");
    }
  };

  return (
    <PureLocalAuthForm
      user={user}
      error={errors[type]}
      status={status[type]}
      onSignup={onSignup}
      onLogin={onLogin}
      onChange={onChange}
      type={type}
    />
  );
};

export default LocalLoginForm;

const Container = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  * + * {
    margin-top: 0.8rem;
  }
  border-radius: 5px;
  padding: 2rem 1rem;

  .title {
    text-align: center;
  }
  .error {
    color: red;
    text-align: center;
    padding: 0.3rem 0;
  }
`;
