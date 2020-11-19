import React, { useEffect } from "react";
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

export default function MoreInfo({user}) {
   //console.log("mi user", user);
  const classes = useStyles();
  const [values, setValues] = useState({description: ""});
  const [state, setState] = useState({
    editandoDescription: false
  });

  useEffect (() => {
    setValues({description: user.user.description})
  }, [values])

  const startEditD = () => {
    setState({
      editandoDescription: true
    });
  };
  const stopEditD = () => {
    setState({
      editandoDescription: false
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValues(value);
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
                  placeholder={values.description}
                />
              ) : (
                user.user.description
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoDescription ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditD()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditD()} />
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
              <Button color="primary" variant="contained">
                Editar{" "}
              </Button>
            </TableCell>
            <TableCell className={classes.font}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
