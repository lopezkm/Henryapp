import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/home/landingPage.jsx";
import Home from "./components/home/home.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { yellow, grey } from "@material-ui/core/colors";
import Footer from "./components/footer/footer";
import Register2 from "./components/forms/register2.jsx";
import Login from "./components/forms/login.jsx";
import UserProfile from "./components/userProfile/index.jsx";
//import Student from "./components/students/students.jsx";
import { Cohort } from "./components/containers/cohort";
import { Student } from './components/students';
import Invite from "./components/forms/invite.jsx";
import AddStudents from "./components/cohorte/addStudents.jsx";
import UserProfile2 from "./components/container-profile/components/views";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffff01",
    },
    secondary: grey,
  },
  display: "flex",
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div
          className="ppal"
          style={{
            minHeight: "calc(100vh - 130px)",
          }}
        >
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/root" render={() => <NavBar />} />
          <Route
            exact
            path="/root/userprofile"
            render={() => <UserProfile />}
          />
          <Route exact path="/root/profile" render={() => <UserProfile2 />} />
          <Route exact path="/root/profilee" render={() => <UserProfile />} />

          <Route exact path="/root/home" render={() => <Home />} />
          <Route exact path="/root/student" render={() => <Student />} />
          <Route exact path="/root/register" render={() => <Register2 />} />
          <Route exact path="/root/login" render={() => <Login />} />
          <Route exact path="/root/invite" render={() => <Invite />} />
          <Route exact path="/root/cohorte" render={() => <Cohort />} />
          <Route
            exact
            path="/root/addStudents"
            render={() => <AddStudents />}
          />
        </div>
        <Route path="/root" render={() => <Footer />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
