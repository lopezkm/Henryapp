import { makeStyles } from "@material-ui/core/styles";

const useStylesCard = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    // color: "white",
    // backgroundColor: "black"
  },
  media: {
    height: 180,
    width: 360
  },
  leftMargin: {
    marginLeft: theme.spacing(12),
  },
  button: {
    backgroundColor: "yellow" 
  }
}));

export default useStylesCard;
