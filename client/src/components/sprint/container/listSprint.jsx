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
import { useStyles } from '../stylesSprint';
import DemoCard from "../demoCard/index";

export default ({
  sprints
}) => {

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {sprints && sprints.map((sprint, i) => (
        <Grid key={i} item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <Divider className={classes.dividerH} orientation="horizontal" />
                  <DemoCard
                  sprint={sprint}
                  ></DemoCard>
            </CardContent>
            <CardActions>
              <Link to="/root/lectures">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.ButtonMod}>
                  Ver lectures
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Box>
  );

};
