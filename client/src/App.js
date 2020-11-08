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
} from "@material-ui/core/styles";
import { yellow, grey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

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
        <Route path="/user" render={(theme) => <NavBar />} />

        <Route exact path="/user/home" render={() => <Home />} />

        <Route exact path="/user/dashboard" render={() => <DashBoard />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
