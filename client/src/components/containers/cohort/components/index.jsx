import React from 'react';
import AddCohortButton from './addCohort';
import ListCohorts from './listCohorts';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

export default ({
  cohorts,
  anchorEl,
  handleChange,
  handleClick,
  onCreateCohort,
  handleClose
}) => {

  const classes = useStyles();

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section>
          <AddCohortButton
            anchorEl={anchorEl}
            onCreateCohort={onCreateCohort}
            handleChange={handleChange}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </section>
        <section>
          <ListCohorts cohorts={cohorts} />
        </section>
      </Container>
    </section>
  );

}
