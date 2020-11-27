import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import TablePaginationActions from './actionsPagination';
import TableHeader from './headerTable';
import TableBodyContent from './bodyTable';
import DialogActions from './actionsCohort';

export default ({
  cohorts,
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
    <TableContainer component={Paper} className={classes.tableMargin}>
      <Table stickyHeader className={classes.table} size='small'>
        <TableHeader />
        <TableBody>
          <TableBodyContent
            page={page}
            rowsPerPage={rowsPerPage}
            rows={cohorts}
            handleOpenDialog={handleOpenDialog}
            setCohort={setCohort}
            handleCohortDelete={handleCohortDelete}
          />
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
              colSpan={5}
              count={cohorts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage={'Cohortes por página:'}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <DialogActions
        handleCloseDialog={handleCloseDialog}
        open={open}
        cohortSelected={cohortSelected}
        handleSubmitEditForm={handleSubmitEditForm}
        setCohort={setCohort}
      />
    </TableContainer>
  );
}