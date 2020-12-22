import React from "react";
import styled from "styled-components";
import TodoList from "./features/todos/TodoList";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./features/auth/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const Container = styled.div`
  height: 100%;
`;

const RouteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <RouteContainer>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todos' component={TodoList} />
          <Route path='/login' component={Login} />
          <Redirect to='/' />
        </Switch>
      </RouteContainer>
    </Container>
  );
}

export default App;
