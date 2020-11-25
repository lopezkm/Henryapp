import React from 'react';
import AddSprintButton from './addSprint';
import ListSprints from './listSprint';
import DemoCard from "../demoCard/index";
import Container from '@material-ui/core/Container';
import { useStyles } from '../stylesSprint';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default ({
  sprints,
  anchorEl,
  handleChange,
  handleClick,
  onCreateSprint,
  handleClose
}) => {

  const classes = useStyles();

  return (
    <section>
    <section>
        <Grid item xs={12} className={classes.header}>
          <Paper className={classes.eslogan}>
          ”El éxito en la vida no se mide por lo que logras sino por los obstáculos que superas.”
          </Paper>
        </Grid>
        </section>
      <Container className={classes.containerRoot}>
        <section>
          <AddSprintButton
            anchorEl={anchorEl}
            onCreateSprint={onCreateSprint}
            handleChange={handleChange}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </section>
        <section>
          <ListSprints sprints={sprints} className={classes.list}/>
        </section>
      </Container>
    </section>
  );
}
