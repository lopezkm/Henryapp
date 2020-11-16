import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';

export default ({
  anchorEl,
  handleChange,
  handleClick,
  onCreateCohort,
  handleClose
}) => {

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="secondary"
        className={classes.ButtonMod}
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
        <MenuItem >
          <form onSubmit={onCreateCohort} noValidate autoComplete="off">
            <TextField
              type='text'
              name="name"
              onChange={handleChange}
              id="name"
              label="Nombre Cohorte" />
            <br />
            <TextField
              type='date'
              name="startingDate"
              onChange={handleChange}
              id="startingDate"
              label="Inicio (dd/mm/aaaa)" />
            <Button
              type="submit"
              onClick={handleClose}
              color="secondary"
              className={classes.ButtonMod}>
              Crear Cohorte
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </div>
  );
  
};
