import React from 'react'
import codex from './images/codex.jpg'
import react from './images/react.png'
import galaxy from './images/galaxy.jpg'
import egg from './images/egg.jpg';
import image from './images/cohorte.jpg'
import lecture from './images/lectures2.jpg'
import huevo from './images/egg.png'
import sprint from './images/sprints.jpg'
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
          <Grid item xs={5} className={classes.card}>
                  <HomeCard
                  className={classes.card}
                  title={'Descubre tu cohorte'} 
                  description={"Conoce tu cohorte, profesor y compañeros"}
                  image={codex}
                  link={"/root/cohorte"}/>
            </Grid>
            <Grid item xs={5} className={classes.card}>
                  <HomeCard
                  //className={classes.card}
                  title={'Sprints'} 
                  description={"Consulta tu sprint actual, duración y contenido"}
                  image={sprint}
                  link={"/root/sprints"}/>
            </Grid>
            <Grid item xs={5} className={classes.card}>
                  <HomeCard
                  //className={classes.card}
                  title={'Chequea las lectures'} 
                  description={"Accede a ver todas las lectures e información de clases"}
                  image={lecture}
                  link={"/root/lectures"}/>
            </Grid>
            <Grid item xs={5} className={classes.card}>
                  <HomeCard
                  //className={classes.card}
                  title={'Egg App'} 
                  description={"Comprueba tu mesa de pair programming y consulta tus compañeros"}
                  image={egg}
                  link={"https://beta.eggeducacion.com/login"}/>
            </Grid>
          </Grid>
        </div>
        </React.Fragment>
      );
}


