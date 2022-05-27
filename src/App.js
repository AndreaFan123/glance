// React
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hook/useContext";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import NewProject from "./pages/newproject/NewProject";
import LandingPage from "./pages/landingPage/LandingPage";
import Member from "./pages/mamber/Member";
import Kanban from "./pages/kanban/Kanban";
import Calendar from "./pages/calendar/Calendar";
// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import OnlineUser from "./components/online/OnlineUser";
//styles
import { GlobalStyles } from "./global-style/Global.styled";
import { AppWrapper, Container } from "./App.styled";

// import FooterCom from "./components/footer/FooterCom";

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
              {/* {!user && <Navbar />} */}
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
                <Route path="/login">
                  {user && <Redirect to="/" />}
                  {!user && <Login />}
                </Route>
                <Route path="/signup">
                  {user && <Redirect to="/" />}
                  {!user && <Signup />}
                </Route>
                <Route path="/member/:id">
                  {!user && <Redirect to="/" />}
                  {user && <Member />}
                </Route>
                <Route path="/kanban/:id">
                  {!user && <Redirect to="/" />}
                  {user && <Kanban />}
                </Route>
                <Route path="/calendar/:id">
                  {!user && <Redirect to="/" />}
                  {user && <Calendar />}
                </Route>
                {/* <Route path={"*"}>
                  {user && <Redirect to="/notfound" />}
                  {!user && <LandingPage />}
                </Route> */}
              </Switch>
            </Container>
            {/* {user && <OnlineUser />} */}
          </BrowserRouter>
        </>
      )}
    </AppWrapper>
  );
}

// // React
// import React from "react";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { useAuthContext } from "./hook/useContext";

// // Pages
// // Try to optimize by importing from 1 source
// import Dashboard from "./pages/dashboard/Dashboard";
// import Signup from "./pages/signup/Signup";
// import Login from "./pages/login/Login";
// import Project from "./pages/project/Project";
// import NewProject from "./pages/newproject/NewProject";
// import LandingPage from "./pages/landingPage/LandingPage";
// // components

// import Sidebar from "./components/sidebar/Sidebar";
// import OnlineUser from "./components/online/OnlineUser";
// //styles
// import { GlobalStyles } from "./global-style/Global.styled";
// import { AppWrapper, Container } from "./App.styled";

// export default function App() {
//   const { user, authIsReady } = useAuthContext();

//   return (
//     <AppWrapper>
//       {authIsReady && (
//         <>
//           <GlobalStyles />
//           <BrowserRouter>
//             {user && <Sidebar />}
//             <Container>
//               {/* {!user && <Navbar />} */}
//               <Switch>
//                 <Route exact path="/">
//                   {user && <Redirect to="/dashboard" />}
//                   {!user && <LandingPage />}
//                 </Route>
//                 <Route exact path="/dashboard">
//                   {!user && <Redirect to="/login" />}
//                   {user && <Dashboard />}
//                 </Route>
//                 <Route path="/create">
//                   {!user && <Redirect to="/login" />}
//                   {user && <NewProject />}
//                 </Route>
//                 <Route path="/projects/:id">
//                   {!user && <Redirect to="/login" />}
//                   {user && <Project />}
//                 </Route>
//                 <Route path="/login">
//                   {user && <Redirect to="/" />}
//                   {!user && <Login />}
//                 </Route>
//                 <Route path="/signup">
//                   {user && <Redirect to="/" />}
//                   {!user && <Signup />}
//                 </Route>
//                 {/* <Route path={"*"}>
//                   {user && <Redirect to="/notfound" />}
//                   {!user && <LandingPage />}
//                 </Route> */}
//               </Switch>
//             </Container>
//             {user && <OnlineUser />}
//           </BrowserRouter>
//         </>
//       )}
//     </AppWrapper>
//   );
// }
