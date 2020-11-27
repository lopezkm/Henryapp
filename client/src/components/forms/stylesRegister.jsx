import { colors } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(3),
    height: "86vh",
    backgroundColor: theme.palette.secondary.main,
    maxWidth: "100%",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(7),
  },
  iconG:{
    marginBottom: theme.spacing(0.5),
    color:"rgb(255,0,0)"
  },
  iconG2:{
    marginBottom: theme.spacing(0.5),
    color:"rgb(0,0,255)"
  },
  buttonG:{
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(8),
    /* backgroundColor: "rgb(128,128,128)", */
    color:"rgb(255,255,255)",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random/?code)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "70%",
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(12),
  },
}));

export default useStyles;
