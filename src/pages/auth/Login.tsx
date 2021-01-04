import React from "react";
import { useSelector } from "react-redux";
import { selectAuthError } from "./authSlice";
import LocalLoginForm from "./LocalLoginForm";

const Login = () => {
  const error = useSelector(selectAuthError);

  return (
    <div>
      <LocalLoginForm />
      {error ? <span>{error}</span> : null}
    </div>
  );
};

export default Login;
