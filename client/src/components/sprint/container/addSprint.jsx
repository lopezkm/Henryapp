import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../stylesSprint';

export default ({
  anchorEl,
  handleChange,
  handleClick,
  onCreateSprint,
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
        Nueva Sprint
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
          <form onSubmit={onCreateSprint} noValidate autoComplete="off">
            <div>
            <TextField
              type='text'
              name="name"
              onChange={handleChange}
              id="name"
              label="Nombre Sprint" 
              />
            </div>
            <div>
            <TextField
              type='text'
              name="duration"
              onChange={handleChange}
              id="duration"
              label="Duración ..." 
              />
            </div>
            <div>
            <TextField
              type='text'
              name="description"
              onChange={handleChange}
              id="description"
              label="Descripción ..." 
              />
            </div>
            
            <Button
              type="submit"
              onClick={handleClose}
              color="secondary"
              className={classes.ButtonMod}>
              Crear Sprint
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </div>
  );
  
};
