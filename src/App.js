// React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { useAuthContext } from "./hook/useContext";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import NewProject from "./pages/newproject/NewProject";
// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
//styles
import { GlobalStyles } from "./global-style/Global.styled";
import { AppWrapper, Container } from "./App.styled";
import FooterCom from "./components/footer/FooterCom";

export default function App() {
  // const { user, alreadyLogin } = useAuthContext();
  return (
    <AppWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Sidebar />
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <NewProject />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </AppWrapper>
  );
}
