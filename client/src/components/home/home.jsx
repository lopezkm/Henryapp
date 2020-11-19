import React from 'react'
import image from './images/juan.png'
import pedro from './images/prueba2.png'
import huevo from './images/huevo.png'
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
          <Grid container spacing={4}>
          <Grid item xs={12}>
              <Paper className={classes.eslogan}>
              INVERTIMOS EN TU FUTURO
              </Paper>
          </Grid>
          <Grid item xs={12} >
                  <HomeCard
                  className={classes.card}
                  title={'Descubre tu cohorte'} 
                  description={"podes ver tu cohorte, fecha de inicio y fecha de finalizacion, consultar profesor y compañeros"}
                  image={image}/>
            </Grid>
            <Grid item xs={6} >
                  <HomeCard
                  className={classes.card}
                  title={'Charla con tus compañeros'} 
                  description={"consulta tus dudas en el chat grupal, o envia mensajes privado a tu profesor"}
                  image={pedro}/>
            </Grid>
            <Grid item xs={6} >
                  <HomeCard
                  className={classes.card}
                  title={'Egg App'} 
                  description={"comprueba tu mesa de pair programming y consulta tus compañeros"}
                  image={huevo}/>
            </Grid>
          </Grid>
        </div>
        </React.Fragment>
      );
}

