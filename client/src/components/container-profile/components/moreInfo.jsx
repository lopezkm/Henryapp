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
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

export default function MoreInfo() {
  // console.log("mi data", data);
  // ``;
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

  const rows = ["Cinthia Daira", "Pardos", "cinthia@email.com"];
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
              Info Adicional
            </Typography>
          </TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.font}>Descripción:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoLastName ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="lastname"
                  placeholder="Estudiante en henry"
                />
              ) : (
                "Estudiante Henry"
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoLastName ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditL()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditL()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Rol:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoName ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  placeholder={rows[0]}
                />
              ) : (
                // data.name
                "PM"
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Cambiar contraseña</TableCell>
            <TableCell className={classes.font}>
              <Button color="primary" variant="contained">
                Editar
              </Button>
            </TableCell>
            <TableCell className={classes.font}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
