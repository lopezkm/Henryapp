import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { gql } from '@apollo/client';
import { useQuery, useLazyQuery } from '@apollo/client';


const GET_USER_PROFILE = gql `
query Profile($id: String!) {
  profile(id: $id)
  {
    name
    email
    lastname
    inscriptionDate
  }
}`;

export default function Student() {
  const [id, setId] = useState("");

  const {loading, error, data , fetchMore} = useQuery(GET_USER_PROFILE, {
    variables: { id : id } 
  });

  if (loading) {
    console.log("loading")
  } if (error) {
    console.log("error")
  } if (data) {
    console.log(data);
  }

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
        rootS: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          marginBottom: 30,
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding: 10,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      }));    
      
      const classes = useStyles();

  
      const UserProfile= async (e)=> {
        e.preventDefault();
        setId(e.target.value);

        const response = await fetchMore({
          variables: {
            id: id
          }
        });

        console.log(response)
      }
      

      return (
    <div className={classes.root}>
      <Paper component="form" className={classes.rootS}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <PermIdentityIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Buscar alumno por ID"
          inputProps={{ 'aria-label': 'Buscar alumno' }}
          onChange={event =>{
            setId(event.target.value);
          }}
          value= {id}
          />
        <IconButton  
        className={classes.iconButton} 
        aria-label="search"
        onClick= {(e)=>{
          UserProfile(e); 
        }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
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