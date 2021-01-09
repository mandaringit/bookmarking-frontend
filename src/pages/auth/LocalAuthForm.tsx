import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import { LoadingState, LoginForm } from "../../types/utils";
import {
  localLogIn,
  selectAuthError,
  selectAuthLoading,
  signupThunk,
} from "../../slices/authSlice";

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
  loading: LoadingState;
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

const Container = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 500px;
  * + * {
    margin-top: 0.5rem;
  }
  border: 1px solid #e0e0e0;
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

/**
 * `LocalLoginForm`은 아이디, 패스워드를 통한 직접 로그인 폼입니다.
 */
export const PureLocalAuthForm = ({
  user,
  error,
  loading,
  type,
  onLogin,
  onSignup,
  onChange,
}: PureLocalAuthFormProps) => {
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <h1 className='title'>🔖 북마킹 🔖</h1>
      <Input
        type='text'
        id='email'
        name='email'
        value={user.email}
        onChange={onChange}
        placeholder='이메일'
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
        <Button
          size='medium'
          disabled={loading === "loading"}
          onClick={onLogin}
        >
          로그인
        </Button>
      ) : (
        <Button
          size='medium'
          disabled={loading === "loading"}
          onClick={onSignup}
        >
          회원가입
        </Button>
      )}

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
  const [user, setUsername] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const error = useSelector(selectAuthError);
  const loading = useSelector(selectAuthLoading);

  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUsername({
      ...user,
      [name]: value,
    });
  };

  const onSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(signupThunk(user));
  };

  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(localLogIn(user));
  };

  return (
    <PureLocalAuthForm
      user={user}
      error={error}
      loading={loading}
      onSignup={onSignup}
      onLogin={onLogin}
      onChange={onChange}
      type={type}
    />
  );
};

export default LocalLoginForm;
