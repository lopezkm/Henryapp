import { makeStyles } from "@material-ui/core/styles";
import useStyles from "./stylesRegister";

const useStyleslog = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "90vh",
  },
  main: {
    marginTop: theme.spacing(3),
    height: "86vh",
    backgroundColor: theme.palette.secondary.main,
    maxWidth: "100%",
  },
  button: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(7),
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
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  form: {
    width: "80%",
    marginTop: theme.spacing(12),
    marginLeft: theme.spacing(12),
  },
  modalDisplay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyleslog;
