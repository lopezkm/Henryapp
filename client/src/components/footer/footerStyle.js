import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    
    footer: {
      backgroundColor: theme.palette.grey[900],
      height: '180px',
      [theme.breakpoints.down('xs')]: {
        height: '400px'
      }
    },
    column: {
      width: '33.3%',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8em'
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        fontSize: '1em',
        height: '100px'
      }
    },
    columnList: {
      display: 'flex',
      width: '90%',
      height: '100%',
      position: 'relative',
      top: '-17px',
      left: '20px',
    },
    links: {
      display: 'flex',
      width: '100%',
      height: '140px',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        position:'relative',
        top:'30px',
      }
    },
    reserved: {   
        height:'30px',
        [theme.breakpoints.down('xs')]: {
        position:'relative',
        top:'200px',
      }
    }
  }));

