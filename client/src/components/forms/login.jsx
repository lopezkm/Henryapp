import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormControl, Button, TextField, Input, InputLabel, FormHelperText, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import '../../css/forms.css'
import  useForm from './useForm'
import validate from './validateLogin'

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
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(12),
        marginLeft: theme.spacing(12),
        },
    }));

export default function Login() {
 const classes = useStyles();
 const {  values, handleChange, handleSubmit,  errors 
}= useForm(submit, validate);

function submit(){
  console.log('submitted')
}

  return (
    <React.Fragment>
        <Grid container spacing={5} className={classes.main}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid item xs={12} sm={8} className={classes.form}>
          <Typography variant="h4" gutterBottom >
        Login
      </Typography>
      <br></br>

      <form onSubmit={(e)=>handleSubmit(e)}>
      <Grid item xs={12} sm={8} >
             <FormControl>
            <InputLabel htmlFor='email'></InputLabel>
            <Input id="email" 
            name='email'
            type='text'
            aria-describedby='email-helper' 
            onChange={(e) =>handleChange(e)}
            value={values.email}/>
            {errors.email && <p className='error'>{errors.email}</p>}
            <FormHelperText id='email-helper'>Email </FormHelperText>
            </FormControl >
            
        </Grid>
          <br></br>
            <Grid item xs={12} sm={8} >
            <FormControl >
             <InputLabel htmlFor='pass'></InputLabel>
             <Input id="pass" 
             name='password'
             type='password' 
             aria-describedby='pass-helper'
             onChange={(e) =>handleChange(e)}
             value={values.password}/>
            {errors.password && <p className='error'>{errors.password}</p>}
             <FormHelperText id='pass-helper'>Password</FormHelperText>
             </FormControl >

            </Grid>
      

      <Grid item md={10}>
      <Button
                  type="submit"
                  variant="contained"
                    color="primary"
                    size='large'
                    className={classes.button}
                    >Submit
         </Button>
         </Grid>
         </form>
         <br></br>

         <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"className={classes.form}>
                  Forgot password?
                </Link>
              </Grid>
              </Grid>
         </Grid>
         </Grid>

         </Grid>

    
    </React.Fragment>
  );
}