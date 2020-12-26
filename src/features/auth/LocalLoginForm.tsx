import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../components/basic/Button";
import Input from "../../components/basic/Input";
import { localLogIn } from "./authSlice";

export interface iLocalLoginForm {
  email: string;
  password: string;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
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
      <Input
        type='text'
        id='email'
        name='email'
        value={user.email}
        onChange={onInputChange}
        placeholder='이메일'
      />

      <Input
        type='password'
        id='password'
        name='password'
        value={user.password}
        onChange={onInputChange}
        placeholder='비밀번호'
      />
      <Button type='submit' label={"LOGIN"} />
    </Container>
  );
};

export default LocalLoginForm;
