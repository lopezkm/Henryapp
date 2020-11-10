import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Student() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
        },
        /* main: {
            marginTop: 15
        } */
      }));    

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>Cantidad de alumnos activos: 1150</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 1 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 2 - 120 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 3 - 170 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 4 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 5 - 125 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 6 - 110 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 7 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>Cohorte 8 - 175 alumnos</Paper>
                </Grid>
            </Grid>
        </div>
    );
} 