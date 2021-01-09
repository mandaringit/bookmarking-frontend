import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Navbar from "./components/orgranisms/Navbar";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "./slices/authSlice";
import BookSearch from "./pages/books/BookSearch";
import MyReports from "./pages/reports/MyReports";
import ReportDetail from "./pages/reports/ReportDetail";

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
          <Route path='/login' render={() => <Auth type='login' />} />
          <Route path='/signup' render={() => <Auth type='signup' />} />
          <Route path='/myreports' component={MyReports} />
          <Route path='/report/:reportId' component={ReportDetail} />
          <Redirect to='/' />
        </Switch>
      </RouteContainer>
    </Container>
  );
}

export default App;
