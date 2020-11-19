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
import {
  FormControl,
  Grid,
  Button,
  TextField,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

export default function MoreInfo({ user }) {
  //console.log("mi user", user);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ description: "" });
  const [state, setState] = useState({
    editandoDescription: false,
  });

  const startEditD = () => {
    setState({
      editandoDescription: true,
    });
  };
  const stopEditD = () => {
    setState({
      editandoDescription: false,
    });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValues(value);
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
              <Button color="primary" variant="contained" onClick={handleOpen}>
                Editar
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modalDisplay}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paperModal}>
                    <Typography>Cambiar contraseña</Typography>
                    <form>
                      <Grid item xs={12} sm={8}>
                        <FormControl>
                          <InputLabel htmlFor="pass"></InputLabel>
                          <Input
                            id="pass"
                            name="password"
                            type="password"
                            aria-describedby="pass-helper"
                            value=""
                          />
                          <FormHelperText id="pass-helper">
                            Contraseña actual
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <FormControl>
                          <InputLabel htmlFor="pass"></InputLabel>
                          <Input
                            id="pass"
                            name="password"
                            type="password"
                            aria-describedby="pass-helper"
                            value=""
                          />
                          <FormHelperText id="pass-helper">
                            Nueva contraseña
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={10}>
                        <FormControl>
                          <InputLabel htmlFor="pass2"> </InputLabel>
                          <Input
                            id="pass"
                            name="password2"
                            type="password"
                            aria-describedby="pass-helper"
                            value=""
                          />
                          <FormHelperText id="pass-helper2">
                            {" "}
                            Reingrese nueva contraseña{" "}
                          </FormHelperText>
                        </FormControl>
                      </Grid>

                      <Grid item md={10}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          className={classes.button}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </form>
                  </div>
                </Fade>
              </Modal>
            </TableCell>
            <TableCell className={classes.font}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
