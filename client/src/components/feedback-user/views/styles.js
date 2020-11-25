import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containerRoot: {
    marginTop: 100,
    paddingTop: theme.spacing(0),
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    minWidth: 275,
    paddingTop: theme.spacing(20),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    fontSize: 30,
    "&:hover": {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.primary.main,
    },
  },
  rootS: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    // marginBottom: 30,
    paddingTop: theme.spacing(0),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingTop: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
    paddingTop: theme.spacing(2),
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
