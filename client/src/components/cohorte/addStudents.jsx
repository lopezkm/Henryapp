import React, {useState} from 'react';
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

export default function AddStudents() {
  const classesE = useStyleslog();
  const classes = useStyles();
  const [checked, setChecked] = useState([]);

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
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                            <ListItem key={value} button>
                                <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Alumno ${value + 1}`} />
                                <ListItemSecondaryAction>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
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
                            type="submit"
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