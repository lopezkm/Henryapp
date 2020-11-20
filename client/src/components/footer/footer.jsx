import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Logo from "../home/images/index.png";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import useStyles from "./footerStyles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer} style={{ display: "inline-flex" }}>
      <div className={classes.marginF}>
        <Link href="/">
          <img src={Logo} style={{ height: "50px" }} />
        </Link>
      </div>
      <div className={classes.marginF}>
        <h1 className={classes.marginB}>Hecho con 💛 por alumnos de Henry.</h1>
        <h1 className={classes.marginB}>
          Henry © 2020 | Todos los derechos reservados.
        </h1>
      </div>
      <div className={classes.marginF}>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.marginB}
        >
          <LinkedIn />
        </Fab>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.marginB}
        >
          <Facebook />
        </Fab>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.marginB}
        >
          <Twitter />
        </Fab>
      </div>
    </div>
  );
}
