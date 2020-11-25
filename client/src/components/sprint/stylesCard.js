import { makeStyles } from "@material-ui/core/styles";

const useStylesCard = makeStyles((theme) => ({
  root: {
    width: 250,
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
  },
  ancho: {
    width: "100%"
  }
}));

export default useStylesCard;
