import React from "react";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { useStyles } from "../styles";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";

export default function PersonalInfo({data}) {
  console.log('Mi data en Personal Info',data)
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [state, setState] = useState({
    editando: false,
  });

  const rows = ["Pedro", "gonzales", "email@email.com"];
  const startEdit = () => {
    setState({
      editando: true,
    });
  };
  const stopEdit = () => {
    setState({
      editando: false,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableCell className={classes.rowStyle}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Perfil del Alumno
            </Typography>
          </TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.font}>Nombre:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editando ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  placeholder={rows[0]}
                />
              ) : (
                data.name
                //rows[0]
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editando ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEdit()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEdit()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Apellido:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editando ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="name"
                  value={rows[1]}
                />
              ) : (
                data.lastname
                //rows[1]
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editando ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEdit()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEdit()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Email:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editando ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  value={rows[2]}
                />
              ) : (
                data.email
                //rows[2]
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editando ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEdit()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEdit()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
