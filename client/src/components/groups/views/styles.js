import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  containerRoot: {
    marginTop: 100,
    paddingTop: theme.spacing(0),
  },
  root: {
    flexGrow: 1,
    marginTop:90,
    marginBottom: 20,
    paddingTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    fontSize: 30,
    '&:hover': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.primary.main,
    }
  },
  rootS: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
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
  ButtonMod: {
    marginLeft: 70,
    marginTop: -10,
    marginBottom: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    textDecoration: "none"
  },
}));