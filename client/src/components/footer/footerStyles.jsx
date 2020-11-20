import { makeStyles } from "@material-ui/core/styles";

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
    backgroundColor: theme.palette.grey[900],
    height: "130px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },

  marginF: {
    marginTop: "40px",
    color: "white",
    cursor: "pointer",
    marginRight: "40px",
  },
  marginB: {
    marginBottom: "7px",
    marginRight: "7px",
  },
}));

export default useStyles;
