import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Paper from "@material-ui/core/Paper";
import WarningIcon from "@material-ui/icons/Warning";
import PersonPinIcon from "@material-ui/icons/PersonPin";
//import { Profile } from './components/container-profile';
//import UserProfile from "../../../components/userProfile/index";
import UserProfile from "../../userProfile/views/perfil";
import { Link } from "react-router-dom";
import { NoFragmentCyclesRule } from "graphql";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(lastname, name, email) {
  return {
    lastname,
    name,
    email,
    datos: [{ date: "2020-01-05", customerId: "11", amount: 8 }],
  };
}

function Row(results, clicked) {
  console.log(results)
  const { row } = results;
  const [open, setOpen] = React.useState(false);
  const [openPerfil, setOpenPerfil] = React.useState(false);
  const classes = useRowStyles();
  const [buttonClicked, setButtonClicked] = React.useState(false);

  // const handleButtonClick = () => {
  //   setButtonClicked(true);
  // };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.lastname}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          {/* <Link
            to="/root/student/profilee"
            color="grey"
            style={{ textDecoration: "none", color: "black" }}
          > */}
          <IconButton >
            <PersonPinIcon onClick={()=> setButtonClicked(!buttonClicked)}/>
            {/* <PersonPinIcon aria-label="expand row" size="small" onClick={() => setOpenPerfil(!openPerfil)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
          {buttonClicked ? <UserProfile results={results} /> : (null)}
          </IconButton>
          {/* </Link> */}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Datos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha inicio/fin</TableCell>
                    <TableCell>Cohorte</TableCell>
                    <TableCell align="right">Promedio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell>{row.inscriptionDate}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  {/* {row.map((historyRow) => (
                    <TableRow key={historyRow.inscriptionDate}>
                      <TableCell component="th" scope="row">
                        {historyRow.inscriptionDate}
                      </TableCell>
                       <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>   
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
          
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openPerfil} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Perfil del Alumno
              </Typography>
              <UserProfile />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

const MessageErrorSearch = () => {
  return (
    <div>
      <Paper
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <WarningIcon
          color="secondary"
          style={{
            marginRight: "10px",
            marginTop: "3rem",
          }}
        />
        <p
          style={{
            paddingBottom: "3rem",
            marginTop: "0px",
          }}
        >
          No existen resultados para la búsqueda..
        </p>
      </Paper>
    </div>
  );
};

export default ({ results, loading }) => {

  // const [buttonClicked, setButtonClicked] = React.useState(false);

  // const handleButtonClick = () => {
  //   setButtonClicked(!buttonClicked);
  // };
//  const { row }= results;
  // {buttonClicked ? <UserProfile results={results} /> : (null)}
  // return results.length > 0 && buttonClicked ? <UserProfile results={results} /> : results.length > 0 && !buttonClicked ? (
    
    return results.length > 0 ? ( 
    <TableContainer component={Paper}>
      {/* <UserProfile results={results} /> */}
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Apellido</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Info Academica</TableCell>
            <TableCell align="right">Info de Perfil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="t-body-students">
          {results.map((user) => (
            <Row key={user.id} row={user} />
          ))}
          {/* {name.name && name.name.filter(user=> user.name === name.name).map(namefiltered => (
            <Row key={namefiltered.id} row={namefiltered} />
          ))}   */}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <MessageErrorSearch />
  );
};
