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
import CheckIcon from "@material-ui/icons/Check";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Tooltip from "@material-ui/core/Tooltip";
import { useMutation, gql } from "@apollo/client";
import ModalPass from "./modalPass";

import {
  FormControl,
  Grid,
  Button,
  TextField,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

const UPDATE_PROFILE = gql`
  mutation updateUser($description: String) {
    updateUser(description: $description) {
      description
    }
  }
`;

export default function MoreInfo({ user }) {
  //console.log("mi user", user);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ description: user.user.description });
  const [state, setState] = useState({
    editandoDescription: false,
  });

  const [updateUser, { data }] = useMutation(UPDATE_PROFILE);

  const startEditD = () => {
    setState({
      editandoDescription: true,
    });
  };
  const stopEditD = (e) => {
    return (
      e.preventDefault(),
      setState({
        editandoDescription: false,
      }),
      updateUser({ variables: { description: values.description } }),
      window.location.reload()
    );
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValues({ description: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              {state.editandoDescription ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="Description"
                  placeholder="Ingresa una descripción"
                />
              ) : user.user.description.length !== 0 ? (
                user.user.description
              ) : (
                data && data.updateUser.description
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoDescription ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={(e) => stopEditD(e)} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditD()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Rol:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {user.user.rol}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Cambiar contraseña</TableCell>
            <TableCell className={classes.font}>
              <Button color="primary" variant="contained" onClick={handleOpen}>
                Editar
              </Button>
              <ModalPass handleClose={handleClose} open={open} />
            </TableCell>
            <TableCell className={classes.font}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
