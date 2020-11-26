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
  handleClose,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
  handleCloseDialog,
  handleOpenDialog,
  open,
  cohortSelected,
  setCohort,
  handleSubmitEditForm,
  handleCohortDelete
}) => {

  const classes = useStyles();

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section className={classes.sectionButtonCohort}>
          <AddCohortButton
            anchorEl={anchorEl}
            onCreateCohort={onCreateCohort}
            handleChange={handleChange}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </section>
        <section>
          <ListCohorts
            cohorts={cohorts}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            handleCloseDialog={handleCloseDialog}
            handleOpenDialog={handleOpenDialog}
            open={open}
            cohortSelected={cohortSelected}
            setCohort={setCohort}
            handleSubmitEditForm={handleSubmitEditForm}
            handleCohortDelete={handleCohortDelete}
          />
        </section>
      </Container>
    </section>
  );

}
