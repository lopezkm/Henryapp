import React from 'react'
import codex from './images/codex.jpg'
import react from './images/react.png'
import galaxy from './images/galaxy.jpg'
import egg from './images/egg.jpg';
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import useStylesHome from "./stylesHome";
import HomeCard from './cardHome';


export default function Home() {
    const classes = useStylesHome();

    return (
        <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
              <Paper className={classes.eslogan}>
              INVERTIMOS EN TU FUTURO
              </Paper>
          </Grid>
          <Grid item xs={4} >
                  <HomeCard
                  className={classes.card}
                  title={'Descubre tu cohorte'} 
                  description={"podes ver tu cohorte, fecha de inicio y fecha de finalizacion, consultar profesor y compañeros"}
                  image={codex}
                  link={"/root/cohorte"}/>
            </Grid>
            <Grid item xs={4} >
                  <HomeCard
                  className={classes.card}
                  title={'Sprints'} 
                  description={"podes ver tu sprint actual, duración y temas a ver"}
                  image={react}
                  link={"/root/sprints"}/>
            </Grid>
            <Grid item xs={4} >
                  <HomeCard
                  className={classes.card}
                  title={'Chequea las lectures'} 
                  description={"podes ver todas las lectures e información al respecto"}
                  image={galaxy}
                  link={"/root/lectures"}/>
            </Grid>
            <Grid item xs={4} >
                  <HomeCard
                  className={classes.card}
                  title={'Egg App'} 
                  description={"comprueba tu mesa de pair programming y consulta tus compañeros"}
                  image={egg}
                  link={"https://beta.eggeducacion.com/login"}/>
            </Grid>
          </Grid>
        </div>
        </React.Fragment>
      );
}


