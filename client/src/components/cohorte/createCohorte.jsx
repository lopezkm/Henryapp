import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormControl, Button, Input, InputLabel, FormHelperText} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import '../../css/forms.css';
import useForm from '../forms/useForm'; 
import validate from '../forms/validateLogin';
import useStyles from '../forms/stylesRegister'; 


// const ADD_USER= gql `
//       mutation createUser($name: string!, $lastname:string!, $email: !string, $password: !string){
//         createUser(input:{name: $name, lastname: $lastname, email: $email, password: $ password}){

//         }
// ` ;


export default function Register2() {
 const classes = useStyles();
//  const [createUser] = useMutation(ADD_USER)
 const {  values, handleChange, handleSubmit,  errors 
}= useForm(submit, validate);

function submit(){
  console.log('submitted')
}

  return (
    <React.Fragment>
        <Grid container spacing={5} className={classes.main} >
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid item xs={12} sm={8} className={classes.form}>
                    <Typography variant="h4" gutterBottom >
                        Nuevo Cohorte
                    </Typography>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <Grid item xs={12} sm={10}>
                            <FormControl>
                                <InputLabel htmlFor='firstName'></InputLabel>
                                <Input id="firstName" 
                                name='name'
                                type='text' 
                                aria-describedby='fn-helper'
                                onChange={(e) =>handleChange(e)}
                                value={values.name}/>
                                {errors.name && <p className='error'>{errors.name}</p>}
                                <FormHelperText id='fn-helper'>Nombre del cohorte</FormHelperText>
                            </FormControl >
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <FormControl >
                                <InputLabel htmlFor='lastName'></InputLabel>
                                <Input id="lastname" 
                                name='lastname'
                                type='text' 
                                aria-describedby='ln-helper'
                                onChange={(e) =>handleChange(e)}
                                value={values.lastname}/>
                                {errors.lastname && <p className='error'>{errors.lastname}</p>}
                                <FormHelperText id='ln-helper'>Fecha de inicio (dd/mm/aaaa)</FormHelperText>
                            </FormControl >
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}