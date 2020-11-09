import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/home/landingPage.jsx";
import Home from "./components/home/home.jsx";
import DashBoard from "./components/dashBoard.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import {
  createMuiTheme,
  darken,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { yellow, grey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";
import Footer from "./components/footer/footer";
import UserProfile from "./components/userProfile/index.jsx";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: grey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route path="/user" render={() => <NavBar />} />
        <Route path="/user" render={() => <Footer />} />

        <Route exact path= "/user/userprofile" render={()=> <UserProfile />} />
        <Route exact path="/user/home" render={() => <Home />} />

        <Route exact path="/user/dashboard" render={() => <DashBoard />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
