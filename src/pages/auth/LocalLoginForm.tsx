import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import { LoadingState } from "../../types/utils";
import { localLogIn, selectAuthError, selectAuthLoading } from "./authSlice";

export interface iLocalLoginForm {
  email: string;
  password: string;
}

export interface PureLocalLoginFormProps {
  /**
   * 로그인하는 유저 정보
   */
  user: { email: string; password: string };
  /**
   * 로그인 실패 에러 메시지
   */
  error: string;
  /**
   * 로딩 상태
   */
  loading: LoadingState;
  /**
   * Submit 이벤트 핸들러
   */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
export const PureLocalLoginForm = ({
  user,
  error,
  loading,
  onSubmit,
  onChange,
}: PureLocalLoginFormProps) => {
  return (
    <Container onSubmit={onSubmit}>
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

      <Button type='submit' size='medium' disabled={loading === "loading"}>
        로그인
      </Button>
      <span className='error'>{error ? error : null}</span>
    </Container>
  );
};

const LocalLoginForm = () => {
  const [user, setUsername] = useState<iLocalLoginForm>({
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(localLogIn(user));
  };

  return (
    <PureLocalLoginForm
      user={user}
      error={error}
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default LocalLoginForm;
