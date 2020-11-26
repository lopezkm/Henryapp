import React from 'react';
//import {useStyles, theme} from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import alumno from './alumno.jpg';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
      marginTop:100,
      marginLeft:20
    },
    media: {
      height: 140,
    },
    marginAutoItem: {
        margin: 'auto'
      },
  }));

export const theme = createMuiTheme({
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

const UserProfile= (results) => {
    const classes = useStyles();
  
    return (
        <ThemeProvider theme={theme}>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // image={}
            title="Alumno"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {results.results.row.name} {results.results.row.lastname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {results.results.row.rol} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Fecha de inscripcion: {results.results.row.inscriptionDate}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cohorte: {results.results.row.cohort && results.results.row.cohort.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Nota: {results.results.row.qualifications && results.results.row.qualifications.grade}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Promedio:{results.results.row.qualifications && results.results.row.qualifications.average}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Github: {results.results.row.gitHubLink && results.results.row.gitHubLink}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            LinkedIn: 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions m="auto">
          <Button >
            Enviar mensaje
          </Button>
        </CardActions>
      </Card>
     </ThemeProvider>
    );
  }
export default UserProfile;