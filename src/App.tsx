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
import Home from "./pages/Home";
import { iUser } from "./types/entity";

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
          <Route exact path='/' component={Home} />
          <Route path='/login' render={() => <Auth type='login' />} />
          <Route path='/signup' render={() => <Auth type='signup' />} />
          {/* TODO: PRIVATE ROUTE 설정 */}
          <Route path='/search' component={BookSearch} />
          <Route path='/myreports' component={MyReports} />
          <Route path='/report/:reportId' component={ReportDetail} />
          {/* TODO: NOMATCH ROUTE 설정 */}
        </Switch>
      </RouteContainer>
    </Container>
  );
}

export default App;

interface AuthRouteProps {
  children: React.ReactNode;
  loggedInUser: null | iUser;
}

const LoggedInRoute = ({ children, loggedInUser }: AuthRouteProps) => {
  return (
    <Route
      render={() => (loggedInUser ? children : <Redirect to='/login' />)}
    />
  );
};
