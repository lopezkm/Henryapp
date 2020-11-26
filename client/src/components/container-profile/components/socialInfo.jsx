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
import Tooltip from "@material-ui/core/Tooltip";
import { useMutation, gql } from "@apollo/client";

const UPDATE_PROFILE = gql`
  mutation updateUser($gitHubLink: String $link: String) {
    updateUser(gitHubLink: $gitHubLink link: $link){
      gitHubLink
      link
    }
  }
`;

export default function SocialInfo({ user }) {
  
  const [updateUser, {data}] = useMutation(UPDATE_PROFILE);

  const classes = useStyles();
  const [values, setValues] = useState({
    gitHub: user.user.gitHubLink,
    linkedin: user.user.link,
  });

  const [state, setState] = useState({
    editandoGit: false,
    editandoLinkedin: false,
  });

  const startEditG = () => {
    setState({
      editandoGit: true,
    });
  };
  const stopEditG = (e) => {
    return (e.preventDefault(),
    setState({
      editandoGit: false,
    }),
    updateUser({variables: {gitHubLink: values.gitHub, link: values.linkedin}}),
    window.location.reload())
  };
  const startEditL = () => {
    setState({
      editandoLinkedin: true,
    });
  };
  const stopEditL = (e) => {
    return (e.preventDefault(),
    setState({
      editandoLinkedin: false,
    }),
    updateUser({variables: {gitHubLink: values.gitHub, link: values.linkedin}}),
    window.location.reload())
  };
  /* const startEditP = () => {
    setState({
      editandoPerPage: true,
    });
  };
  const stopEditP = () => {
    setState({
      editandoPerPage: false,
    });
  }; */
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
                user.user.gitHubLink.length !== 0 ? <a style= {{textDecoration:"none", color:"black"}} href={user.user.gitHubLink}>{user.user.gitHubLink}</a> :
                data && <a style= {{textDecoration:"none", color:"black"}} href={data.updateUser.gitHubLink}>{data.updateUser.gitHubLink}</a>
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoGit ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={(e) => stopEditG(e)} />
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
                  placeholder="Ingresa link de Linkedin"
                />
              ) : (
                user.user.link.length !== 0 ? <a style= {{textDecoration:"none", color:"black"}} href={user.user.link}>{user.user.link}</a> :
                data && <a style= {{textDecoration:"none", color:"black"}} href={data.updateUser.link}>{data.updateUser.link}</a>
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoLinkedin ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <Tooltip title="Enviar">
                    <CheckIcon onClick={(e) => stopEditL(e)} />
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
         {/*  <TableRow>
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
          </TableRow> */}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
