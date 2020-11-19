import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "../../css/footer.css";
import Logo from "../home/images/logonegro.png";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   minHeight: '100vh',
  // },
  // main: {
  //   marginTop: theme.spacing(0),
  //   marginBottom: theme.spacing(2),
  // },
  footer: {
    //  bottom: 0,
    // padding: theme.spacing(3, 2),
    // marginTop: 'auto',
    backgroundColor: theme.palette.grey[900],
    //  position: 'sticky',
    height: "130px",
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        {/* <Container maxWidth="sm"> */}
        <img
          src={Logo}
          style={{ height: "50px", marginTop: "40px", marginLeft: "30px" }}
        />
        {/* <ul style={{color:'white'}}>
          <li>Info sobre Henry AQUI</li>
          <li>Contacto a redes</li>
          <li >Contacto a redes</li>
          </ul> 
        {/* </Container> */}
      </footer>
    </div>
  );
}
