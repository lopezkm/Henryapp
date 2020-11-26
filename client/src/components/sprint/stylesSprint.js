import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  containerRoot: {
    marginTop: 100,
  },
  root: {
    minWidth: 340,
    maxWidth: 345,
    marginTop: 40,
    borderRadius: 15,
    marginBottom: 30,
    marginRight: 10,
    marginLeft: 10
  },
  /*  media: {
       height: 0,
       paddingTop: '56.25%', // 16:9
   }, */
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    marginRight: 10,
    marginLeft: 30
  },
  divider: {
    height: 28,
    margin: 4,
  },
  dividerH: {
    height: 2,
    marginBottom: 6,
    marginTop: -20,
  },
  action: {
    marginTop: -20,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    fontSize: 10,
    marginLeft: 2,
    color: theme.palette.common.black,
  },
  footer: {
    textAlign: 'center',
    color: theme.palette.common.black,
  },
  info: {
    color: theme.palette.common.black,
    marginBottom: 2,
  },
  buttonI: {
    marginBottom: -10,
    marginTop: -10,
  },
  ButtonMod: {
    marginLeft: 70,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    textDecoration: "none"
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cohortButton: {
    marginTop: 80,
    color: theme.palette.common.white,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  media: {
    minHeight: 120,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
  adjust: {
    marginLeft: 10,
    marginRight: 10
  }
}));