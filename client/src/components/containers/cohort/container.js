import React, { useState } from 'react';
import CohortView from './components';

export default ({
  cohorts,
  createNewCohort,
  getCohortById,
  updateCohort,
  deleteCohortById
}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    startingDate: ""
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [cohortSelected, setCohort] = useState({});
  // const [cohort, setCohortEdit] = useState({});

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setCohort({
      name: '',
      startingDate: '',
      instructor: ''
    })
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateCohort = (e) => {
    e.preventDefault();
    createNewCohort(values.name, values.startingDate);
    setValues({
      name: '',
      startingDate: ''
    });
  }

  const handleCohortDelete = (id) => {
    deleteCohortById(id);
  }


  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSubmitEditForm = (e) => {
    handleCloseDialog();
    e.preventDefault();
    const { _id, name, startingDate, instructor } = cohortSelected;
    updateCohort(_id, name, startingDate, instructor);
  }

  return (
    <>
      <CohortView
        cohorts={cohorts}
        onCreateCohort={onCreateCohort}
        handleChange={handleChange}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        handleCloseDialog={handleCloseDialog}
        handleOpenDialog={handleOpenDialog}
        open={open}
        getCohortById={getCohortById}
        cohortSelected={cohortSelected}
        setCohort={setCohort}
        handleSubmitEditForm={handleSubmitEditForm}
        handleCohortDelete={handleCohortDelete}
      />
    </>
  )
};
