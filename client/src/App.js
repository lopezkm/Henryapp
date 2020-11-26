import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/functions";
import Home from "./components/home/home.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Footer from "./components/footer/footer";
import Register2 from "./components/forms/register2.jsx";
import Login from "./components/forms/login.jsx";
import UserProfile from "./components/userProfile/views/perfil";
//import Student from "./components/students/students.jsx";
import { Cohort } from "./components/containers/cohort";
import { Student } from "./components/students";
import Invite from "./components/forms/invite.jsx";
import AddStudents from "./components/cohorte/addStudents.jsx";
import { Groups } from "./components/groups";
import GroupsToCohorts from "./components/groups/views";

//import UserProfile2 from "./components/container-profile/components/views";
import { Profile } from "./components/container-profile";
import ResetPassword from "./components/forms/resetpassword";
import FileUpload from "./components/container-uploads/apolloCSV";

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
          <Route path="/root" render={() => <Navbar />} />
          {/* <Route
            exact
            path="/root/userprofile"
            render={() => <UserProfile />}
          /> */}
          <Route exact path="/root/profile" render={() => <Profile />} />
          <Route exact path="/root/profilee" render={() => <UserProfile />} />
          <Route exact path="/root/home" render={() => <Home />} />
          <Route exact path="/root/student" render={() => <Student />} />
          <Route exact path="/root/register" render={() => <Register2 />} />
          <Route exact path="/root/password" render={() => <ResetPassword />} />
          <Route exact path="/root/login" render={() => <Login />} />
          <Route exact path="/root/invite" render={() => <Invite />} />
          <Route exact path="/root/cohorte" render={() => <Cohort />} />
          <Route exact path="/root/groups" render={() => <Groups />} />
          <Route exact path="/root/groups/toCohorts" render={() => <GroupsToCohorts />} />
          <Route
            exact
            path="/root/addStudents"
            render={() => <AddStudents />}
          />
        </div>
        <Route path="/root" render={() => <Footer />} />
        <Route exact path="/root/upload" render={() => <FileUpload />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
