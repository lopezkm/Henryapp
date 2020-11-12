import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyleslog from '../forms/stylesLogin.jsx';
import {gql, useQuery, useMutation} from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
   /*  backgroundColor: theme.palette.background.paper,  */
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    borderRadius:15,
  },
}));

const STUDENTS = gql`
    {users {
            name
            lastname
        }
    }`;

export default function AddStudents() {
    const classesE = useStyleslog();
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const [students, setStudents] = useState([]);
    const [load, setLoad] = useState(true);
    const {loading, error, data} = useQuery(STUDENTS);
    console.log(checked);
    console.log(checked[0]);

    if(loading) {
        console.log('cargando');
    } else if(error) {
        console.log('ocurrió un error');
    } else {
        console.log('ok');
        var response = data.users;
    }

    useEffect( () => {
        setStudents(response)
        setLoad(false)
    })

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <React.Fragment>
        <Grid container spacing={5} className={classesE.main} style={{margin:'0px' }}>
            <Grid item xs={false} sm={4} md={7} className={classesE.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid item xs={12} sm={8} className={classesE.form}>
                    <Typography variant="h4" gutterBottom >
                        Seleccionar Alumnos
                    </Typography>
                    <br></br>
                    <List dense className={classes.root}>
                        {students && students.map((student, i) => {
                            const labelId = `checkbox-list-secondary-label-${i}`;
                            return (
                            <ListItem key={i} button>
                                <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${i + 1}`}
                                    src={`/static/images/avatar/${i + 1}.jpg`}
                                />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Alumno: ${student.name}, ${student.lastname}`} />
                                <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(student)}
                                    checked={checked.indexOf(student) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemSecondaryAction>
                            </ListItem>
                            );
                        })}
                    </List>
                    <br/>
                    <Grid item md={10}>
                        <Button
                            onSubmit={(e) => {
                                e.preventDefault();
                                
                            }}
                            variant="contained"
                            color="primary"
                            size='large'
                            className={classesE.button}
                            >Agregar
                        </Button>
                    </Grid>
                    <Grid container>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}