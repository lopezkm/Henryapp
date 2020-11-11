import { makeStyles } from '@material-ui/core/styles';
import useStyles from './stylesRegister';


const useStyleslog = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(3),
      height: '100vh',
      backgroundColor: theme.palette.secondary.main,
    },
      button: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(7),
      },
      image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '90%', 
        marginTop: theme.spacing(12),
        marginLeft: theme.spacing(12),
        },
    }));

    export default useStyleslog