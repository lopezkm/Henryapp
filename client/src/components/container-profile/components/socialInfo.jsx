import React from "react";
import Link from "@material-ui/core/Link";
import { useState, useEffect } from "react";
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
import Tooltip from "@material-ui/core/Tooltip";

export default function SocialInfo({ user }) {
  // console.log("mi data", data);
  // ``;
  const classes = useStyles();
  const [values, setValues] = useState({
    gitHub: "",
    linkedin: "",
    personalPage: "",
  });

  useEffect(() => {
    setValues({
      gitHub: user.user.gitHubLink,
      linkedin: user.user.link,
      personalPage: user.user.link,
    });
  }, [values]);

  const [state, setState] = useState({
    editandoGit: false,
    editandoLinkedin: false,
    editandoPerPage: false,
  });

  const startEditG = () => {
    setState({
      editandoGit: true,
    });
  };
  const stopEditG = () => {
    setState({
      editandoGit: false,
    });
  };
  const startEditL = () => {
    setState({
      editandoLinkedin: true,
    });
  };
  const stopEditL = () => {
    setState({
      editandoLinkedin: false,
    });
  };
  const startEditP = () => {
    setState({
      editandoPerPage: true,
    });
  };
  const stopEditP = () => {
    setState({
      editandoPerPage: false,
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
              Redes Sociales
            </Typography>
          </TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.font}>Github:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoGit ? (
                <TextField
                  name="gitHub"
                  onChange={handleChange}
                  placeholder={values.gitHub}
                />
              ) : (
                user.user.gitHubLink
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoGit ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={() => stopEditG()} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditG()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>LinkedIn:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoLinkedin ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="linkedin"
                  placeholder={values.linkedin}
                />
              ) : (
                user.user.link
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoLinkedin ? (
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
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Pagina personal:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoPerPage ? (
                <TextField
                  name="personalPage"
                  onChange={handleChange}
                  placeholder={values.personalPage}
                />
              ) : (
                user.user.link
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoPerPage ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={() => stopEditP()} />
                  </Tooltip>
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Editar campo">
                    <EditIcon onClick={() => startEditP()} />
                  </Tooltip>
                </Fab>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
