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
import { useStyles } from '../stylesSprint';

export default ({
  sprints
}) => {

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {sprints && sprints.map((sprint, i) => (
        <Grid key={i} item xs={3.5}>
          <Card className={classes.root} shadows={3}>
            <CardHeader
              title={`Sprint: ${sprint.name}`}
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
            image="https://www.infobae.com/new-resizer/wNewuFFPsDff-YIQk-Y1poh_Ugg=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/08/13164503/inteligencia-artificial.jpg"
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
                </IconButton> Duración: {sprint.duration}
                    </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.info}>
                <IconButton aria-label="settings" className={classes.buttonI}>
                  <PeopleIcon />
                </IconButton> Descripción: {sprint.description}
                    </Typography>
                    </Box>
            </CardContent>
            <CardActions>
              <Link to="/root/lectures">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.ButtonMod}>
                  Ir a las lectures
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Box>
  );

};
