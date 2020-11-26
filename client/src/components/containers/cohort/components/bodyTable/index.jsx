import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PeopleIcon from '@material-ui/icons/People';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const BodyTableContent = ({
  rowsPerPage,
  page,
  rows,
  handleOpenDialog,
  handleCohortDelete,
  setCohort
}) => {

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const handleCohortSelected = (cohortSelected) => {
    setCohort(cohortSelected);
    handleOpenDialog();
  }

  return (
    <>
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((rowCohort, index) => {
        const { _id, name, instructor, students, startingDate } = rowCohort;
        const cohort = { _id, name, instructor, startingDate };
        return (
          <>
            <TableRow hover key={index}>
              <TableCell style={{ width: 160 }}>
                {name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {instructor ? instructor : 'Sin instructor'}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {students.length > 0 ? students.length : 'Sin alumnos'}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {startingDate}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Tooltip title="Editar cohorte" TransitionComponent={Zoom} arrow placement='left'>
                  <IconButton aria-label="delete" onClick={() => handleCohortSelected(cohort)} >
                    <EditIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
                {/* <Tooltip title="Agregar alumno/s" TransitionComponent={Zoom} arrow placement='left'>
                  <IconButton aria-label="delete" >
                    <GroupAddIcon fontSize='small' />
                  </IconButton>
                </Tooltip> */}
                <Tooltip title="Eliminar cohorte" TransitionComponent={Zoom} arrow placement='left'>
                  <IconButton aria-label="delete" onClick={() => handleCohortDelete(_id)} >
                    <DeleteIcon fontSize='small' />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </>
        );
      })}

      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  )
}

export default BodyTableContent;
