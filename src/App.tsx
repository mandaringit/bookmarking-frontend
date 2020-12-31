import React from "react";
import styled from "styled-components";
import TodoList from "./features/todos/TodoList";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./features/auth/Login";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import BookSearch from "./features/books/BookSearch";

const Container = styled.div`
  height: 100%;
`;

const RouteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

function App() {
  const loggedInUser = useSelector(selectLoggedInUser);
  return (
    <Container>
      <Navbar loggedInUser={loggedInUser} />
      <RouteContainer>
        <Switch>
          <Route exact path='/' component={BookSearch} />
          <Route path='/todos' component={TodoList} />
          <Route path='/login' component={Login} />
          <Redirect to='/' />
        </Switch>
      </RouteContainer>
    </Container>
  );
}

export default App;
