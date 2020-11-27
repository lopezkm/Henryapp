import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../stylesGeneral';

export default ({
  anchorEl,
  handleChange,
  handleClick,
  onCreateLecture,
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
        Nueva Lecture
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
          <form onSubmit={onCreateLecture} noValidate autoComplete="off">
            <div>
              <TextField
              type='text'
              name="name"
              onChange={handleChange}
              id="name"
              label="Nombre Lecture" />
            </div>
            <div>
            <TextField
              type='text'
              name="embededLink"
              onChange={handleChange}
              id="embededLink"
              label="Link integrado ..." />
            </div>
            <div>
            <TextField
              type='text'
              name="description"
              onChange={handleChange}
              id="description"
              label="Description ..." />
            </div>
            <div>
              <TextField
              type='text'
              name="teoriaLink"
              onChange={handleChange}
              id="teoriaLink"
              label="Link de la teoría..." />
            </div>
            <Button
              type="submit"
              onClick={handleClose}
              color="secondary"
              className={classes.ButtonMod}>
              Crear Lecture
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </div>
  );
  
};
