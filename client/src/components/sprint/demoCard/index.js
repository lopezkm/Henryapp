import React from "react";
import ReactDOM from "react-dom";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {Component} from "./Component.js";

import "./styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const muiBaseTheme = createMuiTheme();

function DemoCard(props) {
  return (
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: Component.getTheme(muiBaseTheme)
        })}
      >
        <Component 
        name={props.sprint.name}
        duration={props.sprint.duration}
        description={props.sprint.description}/>
      </MuiThemeProvider>
  );
}

export default DemoCard;