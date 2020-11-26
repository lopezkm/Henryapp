import { makeStyles } from "@material-ui/core/styles";

const useStylesCard = makeStyles((theme) => ({
  root: {
    minHeight: 350,
    // color: "white",
    // backgroundColor: "black"
  },
  media: {
    height: 180,
    width: "100%",
    justifyItems: "center"
  },
  leftMargin: {
    marginLeft: theme.spacing(12),
  },
  button: {
    backgroundColor: "yellow" 
  }
}));

export default useStylesCard;
