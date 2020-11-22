import React from "react";
import Link from "@material-ui/core/Link";
import { useState} from "react";
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
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";

export default function PersonalInfo({ user }) {

  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [state, setState] = useState({
    editandoName: false,
    editandoLastName: false,
    editandoEmail: false,
  });

  const startEditN = () => {
    setState({
      editandoName: true,
    });
  };
  const stopEditN = () => {
    setState({
      editandoName: false,
    });
  };
  const startEditL = () => {
    setState({
      editandoLastName: true,
    });
  };
  const stopEditL = () => {
    setState({
      editandoLastName: false,
    });
  };
  const startEditE = () => {
    setState({
      editandoEmail: true,
    });
  };
  const stopEditE = () => {
    setState({
      editandoEmail: false,
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
              {/* {state.editandoName ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                />
              ) : ( */}
                {user.user.name}
            </TableCell>
            {/* <TableCell className={classes.font}>
              {state.editandoName ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={() => stopEditN()} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditN()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Apellido:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {/* {state.editandoLastName ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="lastname"
                  placeholder="Ingresa tu apellido"
                />
              ) : ( */}
                {user.user.lastname}
            </TableCell>
            {/* <TableCell className={classes.font}>
              {state.editandoLastName ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={() => stopEditL()} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditL()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Email:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {/* {state.editandoEmail ? (
                <TextField
                  name="email"
                  onChange={handleChange}
                  placeholder="Ingresa un email"
                />
              ) : ( */}
                {user.user.email}
            </TableCell>
            {/* <TableCell className={classes.font}>
              {state.editandoEmail ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={() => stopEditE()} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditE()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
