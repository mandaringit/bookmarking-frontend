import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { localLogIn } from "./authSlice";

export interface iLocalLoginForm {
  email: string;
  password: string;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const LocalLoginForm = () => {
  const [user, setUsername] = useState<iLocalLoginForm>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Container onSubmit={onSubmit}>
      <label htmlFor='email'>
        이메일 :
        <input
          type='text'
          id='email'
          name='email'
          value={user.email}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor='password'>
        패스워드 :
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={onInputChange}
        />
      </label>
      <button type='submit'>LOGIN</button>
    </Container>
  );
};

export default LocalLoginForm;
