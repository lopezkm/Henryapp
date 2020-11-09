import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormControl, Button, TextField, Input, InputLabel, FormHelperText, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(2),
      marginLeft:theme.spacing(6),
      marginRight:theme.spacing(2),
      button: {
        marginTop: theme.spacing(7),
        marginLeft: theme.spacing(7),
      },
    },
  }));

export default function Login() {
 const classes = useStyles();

  return (
    <React.Fragment>
        <Container className={classes.main} >
        <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Grid container spacing={5}>
     
      <Grid item xs={12} >
             <FormControl >
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input id="email" type='email' aria-describedby='email-helper'/>
            <FormHelperText id='email-helper'>email</FormHelperText>
            </FormControl >
        </Grid>

            <Grid item xs={12} >
            <FormControl >
             <InputLabel htmlFor='pass'>Password</InputLabel>
             <Input id="pass" type='password' aria-describedby='pass-helper'/>
             <FormHelperText id='pass-helper'>Password</FormHelperText>
             </FormControl >
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
         </Container>

    
    </React.Fragment>
  );
}