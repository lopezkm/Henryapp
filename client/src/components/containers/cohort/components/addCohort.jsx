import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./styles";

export default ({
  anchorEl,
  handleChange,
  handleClick,
  onCreateCohort,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >

        Nuevo Cohorte
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <form onSubmit={onCreateCohort} noValidate autoComplete="off">
            <TextField
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              color='secondary'
              label="Nombre Cohorte"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              style={{
                marginTop: '10px'
              }}
              type='date'
              label="Nombre Cohorte"
            />
            <br />
            <TextField
              type="date"
              name="startingDate"
              color='secondary'
              onChange={handleChange}
              id="startingDate"
              label="Fecha de inicio"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              type="submit"
              onClick={handleClose}
              // color="secondary"
              className={classes.ButtonMod}>
            >
              Crear Cohorte
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </div>
  );

};
