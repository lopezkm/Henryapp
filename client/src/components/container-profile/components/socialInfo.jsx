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

export default function SocialInfo({user}) {
  // console.log("mi data", data);
  // ``;
  const classes = useStyles();
  const [values, setValues] = useState({
    gitHub: "",
    linkedin: "",
    personalPage: ""
  });


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
                  placeholder="Ingresa link de Github"
                />
              ) : (
                <a href={user.user.gitHubLink}>{user.user.gitHubLink}</a>
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoGit ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditG()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditG()} />
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
                  placeholder="Ingresa link de Linkedin"
                />
              ) : (
                <a href={user.user.link}>{user.user.link}</a>
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoLinkedin ? (
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
            <TableCell className={classes.font}>Pagina personal:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoPerPage ? (
                <TextField
                  name="personalPage"
                  onChange={handleChange}
                  placeholder="Ingresa un link"
                />
              ) : (
                
                user.user.link
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoPerPage ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditP()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditP()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
