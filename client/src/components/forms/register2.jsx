import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormControl, Button, TextField, Input, InputLabel, FormHelperText, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
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
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(15),
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
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(15),
        }
    }));

export default function Register2() {
 const classes = useStyles();

  return (
    <React.Fragment>
        
      <Grid container spacing={5} className={classes.main}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid item xs={12} sm={8}className={classes.form}>
          <Typography variant="h4" gutterBottom >
            Register
          </Typography>
      <Grid item xs={12} sm={10}>
                <FormControl >
                <InputLabel htmlFor='firstName'>First Name</InputLabel>
                <Input id="firstName" type='text' aria-describedby='fn-helper'/>
                <FormHelperText id='fn-helper'>First name</FormHelperText>
                </FormControl >
            </Grid>

            <Grid item xs={12} sm={10}>
                <FormControl >
                <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                <Input id="lastName" type='text' aria-describedby='ln-helper'/>
                <FormHelperText id='ln-helper'>Last name</FormHelperText>
                </FormControl >
            </Grid>
            <Grid item xs={12} sm={10}>
                <FormControl >
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input id="email" type='email' aria-describedby='email-helper'/>
                <FormHelperText id='email-helper'>email</FormHelperText>
                </FormControl >
            </Grid>

            <Grid item xs={12} sm={10} >
            <FormControl >
             <InputLabel htmlFor='pass'>Password</InputLabel>
             <Input id="pass" type='password' aria-describedby='pass-helper'/>
             <FormHelperText id='pass-helper'>Password</FormHelperText>
             </FormControl >
            </Grid>
            <Grid item xs={12} sm={10}>
             <FormControl >
              <InputLabel htmlFor='pass2'> Re-enter password </InputLabel>
              <Input id="pass2" type='password' aria-describedby='pass-helper2'/>
              <FormHelperText id='pass-helper2'> Re-enter password </FormHelperText>
             </FormControl>
            </Grid>
      

      <Grid item md={10}>
      <Button
                    variant="contained"
                    color="primary"
                    size='large'
                    // onClick={handleNext}
                    className={classes.button}
                    >Submit
         </Button>
         </Grid>
         </Grid>
        </Grid>
         </Grid>

    
    </React.Fragment>
  )};