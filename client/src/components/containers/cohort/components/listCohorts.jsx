import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Box from '@material-ui/core/Box';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default ({
  cohorts
}) => {

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {cohorts && cohorts.map((cohort, i) => (
        <Grid key={i} item xs={3.5}>
          <Card className={classes.root}>
            <CardHeader
              title={`Cohorte: ${cohort.name}`}
              subheader={`Inicio: ${cohort.startingDate}`}
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}>
                  C-{i}
                </Avatar>
              }
            />
            <CardContent>
              <Divider className={classes.dividerH} orientation="horizontal" />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <PersonIcon />
                </IconButton> Instructor: Agustin Amani
                    </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <PeopleIcon />
                </IconButton> PMs: Ricardo Freire y Marcelo Quiroga
                    </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <LocalLibraryIcon />
                </IconButton> Alumnos: 175
                    </Typography>
            </CardContent>
            <CardActions>
              <Link to="/root/addStudents">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.ButtonMod}>
                  Agregar Alumnos
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Box>
  );

};
