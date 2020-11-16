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


const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
      marginTop:100,
      marginLeft:20
    },
    media: {
      height: 140,
    },
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
            title="Alumno"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lio Messi
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Fecha de inscripcion:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Cohorte:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rol: 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Github: 
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
