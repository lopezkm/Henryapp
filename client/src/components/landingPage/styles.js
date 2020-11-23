import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingButton: {
    "& > *": {
      padding: theme.spacing(1),
      width: "150px",
      marginLeft: "7.5vw",
      position: "absolute",
      zIndex: 100,
    },
  },
  bk: {
    backgroundColor: theme.palette.common.black,
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 9fr",
    alignItems: "center",
  },
}));
export default useStyles;
