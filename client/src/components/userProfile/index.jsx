import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import alumno from './alumno.jpg';
//import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    // button1: {
    //     background: theme.palette.black
    // },
    // button2: {    
    //  color: theme.palette.yellow,      
    // },
    //  button3: {
    //     background: theme.overrides
    // }
  }));

const theme = createMuiTheme({
  palette: {
    black: 'black',
    yellow: 'yellow',
        },  
 overrides: {
    MuiButton: {
          text: {
              background: 'yellow'
          }
      },
      MuiCardActions: {
          root: {
              background: 'black'
          }

      }
  }      

  })

  const UserProfile= () => {
    const classes = useStyles();
  
    return (
    <ThemeProvider theme={theme}>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={alumno}
            title="Contemplative Reptile"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lio Messi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Edad: 31 años
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Nacionalidad: Argentino
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Profesion: arquitecto
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rol: Alumno
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
          <Button size="small">
            Enviar mensaje
          </Button>
          <Button size="small" >
            Informacion Academica
          </Button>
        </CardActions>
      </Card>
     </ThemeProvider>
    );
  }
export default UserProfile;
