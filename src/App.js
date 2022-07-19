// React
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hook/useContext";

// Pages
import {
  Dashboard,
  Signup,
  Login,
  Project,
  NewProject,
  LandingPage,
  Budget,
  Member,
} from "./pages/index";

// components
import Sidebar from "./components/sidebar/Sidebar";

//styles
import { GlobalStyles } from "./global-style/Global.styled";
import { AppWrapper, Container } from "./App.styled";

export default function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <AppWrapper>
      {authIsReady && (
        <>
          <GlobalStyles />
          <BrowserRouter>
            {user && <Sidebar />}
            <Container>
              <Switch>
                <Route exact path="/">
                  {user && <Redirect to="/dashboard" />}
                  {!user && <LandingPage />}
                </Route>
                <Route exact path="/dashboard">
                  {!user && <Redirect to="/login" />}
                  {user && <Dashboard />}
                </Route>
                <Route path="/create">
                  {!user && <Redirect to="/login" />}
                  {user && <NewProject />}
                </Route>
                <Route path="/projects/:id">
                  {!user && <Redirect to="/login" />}
                  {user && <Project />}
                </Route>
                <Route path="/member/:id">
                  {!user && <Redirect to="/login" />}
                  {user && <Member />}
                </Route>
                <Route path="/login">
                  {user && <Redirect to="/" />}
                  {!user && <Login />}
                </Route>
                <Route path="/signup">
                  {user && <Redirect to="/" />}
                  {!user && <Signup />}
                </Route>
                <Route path="/budget">
                  {!user && <Redirect to="/" />}
                  {user && <Budget />}
                </Route>
              </Switch>
            </Container>
          </BrowserRouter>
        </>
      )}
    </AppWrapper>
  );
}
