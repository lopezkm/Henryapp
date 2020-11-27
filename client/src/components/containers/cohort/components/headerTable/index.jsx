import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const HeaderTable = () => {

  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ minWidth: 170 }}>
          <Typography>
            Nombre
          </Typography>
        </TableCell>
        <TableCell align="left">
          <Typography>
            Instructor
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography style={{ padding: '0px' }}>
            Alumnos
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography style={{ padding: '0px' }}>
            Fecha Inicio
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography style={{
            paddingRight: '2rem'
          }}>
            Acciones
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );

}

export default HeaderTable;
