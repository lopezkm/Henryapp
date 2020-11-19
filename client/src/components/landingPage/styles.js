import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingButton: {
    "& > *": {
      padding: theme.spacing(1),
      width: "350px",
      marginLeft: "30px",
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
