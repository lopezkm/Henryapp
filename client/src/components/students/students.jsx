import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Student() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          marginTop:90,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
          fontSize: 30,
            '&:hover': {
              color: theme.palette.common.black,
              backgroundColor: theme.palette.primary.main,
            }
        },
      }));    

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>Alumnos Activos: 1150</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 1 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 2 - 120 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 3 - 170 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 4 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 5 - 125 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 6 - 110 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 7 - 150 alumnos</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>COHORTE 8 - 175 alumnos</Paper>
                </Grid>
            </Grid>
        </div>
    );
} 