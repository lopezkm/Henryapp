import { makeStyles } from "@material-ui/core/styles";

const useStylesHome = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(6),
        minHeight: 300
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      card: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
      },
      eslogan: {
          fontSize: 25,
          backgroundColor: "black",
          color: "yellow",
          height: 60,
          paddingTop: 50,
          textAlign:"center",
      }
}));

export default useStylesHome;
