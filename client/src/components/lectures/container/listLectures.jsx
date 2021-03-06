import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { shadows } from '@material-ui/system';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Box from '@material-ui/core/Box';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { useStyles } from '../stylesGeneral';

export default ({
  lectures
}) => {

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {lectures && lectures.map((lecture, i) => (
        <Grid key={i} item xs={3.5}>
          <Card className={classes.root} shadows={3}>
            <CardHeader
              title={`Lecture: ${lecture.name}`}
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}>
                  C-{i}
                </Avatar>
              }
              className={classes.adjust}
            />
            <CardMedia 
            className={classes.media}
            image="https://www.thelawyerportal.com/wp-content/uploads/GettyImages-1069239598.jpg"
            title="Contemplative Reptile"/>
            <CardContent>
              <Divider className={classes.dividerH} orientation="horizontal" />
              <Box>
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
                  <LocalLibraryIcon />
                </IconButton> Material recomendado: <a href={lecture.embededLink}>{lecture.embededLink}</a>
                    </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <PeopleIcon />
                </IconButton> Description: {lecture.description}
                    </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <LocalLibraryIcon />
                </IconButton>Link de la clase: <a href={lecture.teoriaLink}>{lecture.teoriaLink}</a> 
                    </Typography>
                    </Box>
            </CardContent>
            <CardActions>
              <a href={lecture.teoriaLink}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.ButtonMod}>
                  Ir a la clase
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Box>
  );

};
