import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Navbar from "./components/orgranisms/Navbar";
import { useSelector } from "react-redux";
import { selectLoggedInUser, selectAuthStatus } from "./slices/authSlice";
import BookSearch from "./pages/books/BookSearch";
import MyReports from "./pages/reports/MyReports";
import ReportDetail from "./pages/reports/ReportDetail";
import Home from "./pages/Home";
import { iUser } from "./types/entity";
import styled from "styled-components";
import MyWishes from "./pages/wish/MyWishes";
import Footer from "./components/orgranisms/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.section`
  flex-grow: 1;
`;

function App() {
  const loggedInUser = useSelector(selectLoggedInUser);
  const { checkAuth: checkAuthStatus } = useSelector(selectAuthStatus);

  if (checkAuthStatus === "loading") {
    return <div>AUTHCHECKING</div>;
  }

  return (
    <Container>
      <Navbar loggedInUser={loggedInUser} />
      <Content>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' render={() => <Auth type='login' />} />
          <Route path='/signup' render={() => <Auth type='signup' />} />
          {/* TODO: PRIVATE ROUTE 설정 */}
          <Route path='/search' component={BookSearch} />
          <Route path='/myreports' component={MyReports} />
          <Route path='/mywishes' component={MyWishes} />
          <Route path='/report/:reportId' component={ReportDetail} />
          {/* TODO: NOMATCH ROUTE 설정 */}
        </Switch>
      </Content>
      <Footer />
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
