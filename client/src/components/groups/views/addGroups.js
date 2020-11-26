import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';

const AddGroup= ({
  anchorEl,
  handleChange,
  handleClick,
  onCreateGroup,
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
        Crear Grupos
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
          <form onSubmit={onCreateGroup} noValidate autoComplete="off">
            <TextField
              type='text'
              name="name"
              onChange={handleChange}
              id="name"
              label="Nombre grupo, ejem: 'grupo2' " />
            <br />
            <TextField
              type='text'
              name="PM"
              onChange={handleChange}
              id="PM"
              label="Nombre del PM" />
            <Button
              type="submit"
              onClick={handleClose}
              color="secondary"
              className={classes.ButtonMod}>
              Crear Grupo
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </div>
  );
  
};
export default AddGroup;