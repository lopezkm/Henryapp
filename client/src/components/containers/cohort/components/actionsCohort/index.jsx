import React, { useState } from 'react';
import 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import SchoolIcon from '@material-ui/icons/School';
import TodayIcon from '@material-ui/icons/Today';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  DatePicker,
  DateTimePicker
} from '@material-ui/pickers';
import { useStyles } from '../styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({
  open,
  handleCloseDialog,
  getCohortById,
  cohortSelected,
  handleSubmitEditForm,
  setCohort
}) => {
  const classes = useStyles();
  console.log(cohortSelected)

  const handleChange = (e) => {
    setCohort({
      ...cohortSelected,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth={"sm"}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{
          maxWidth: '510px',
          margin: 'auto'
        }}
      >
        <DialogTitle id="alert-dialog-slide-title" style={{
          textAlign: 'center'
        }}>
          <EditIcon fontSize='small' style={{ marginRight: '5px' }} />
          {"Editar Cohorte"}
        </DialogTitle>
        <hr />
        <DialogContent>
          <form
            className={classes.form}
            noValidate
          >
            <TextField
              color='secondary'
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Nombre del cohorte"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SchoolIcon color='disabled' style={{
                      marginRight: '10px'
                    }} />
                  </InputAdornment>
                ),
              }}
              name='name'
              value={cohortSelected.name}
              onChange={handleChange}
            />

            <TextField
              className={classes.formControl}
              id="date"
              label="Fecha de inicio"
              type="date"
              name='startingDate'
              value={cohortSelected.startingDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              color='secondary'
              className={classes.formControl}
              id="input-with-icon-textfield"
              label="Instructor"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle color='disabled' style={{
                      marginRight: '10px'
                    }} />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
              name='instructor'
              value={cohortSelected.instructor}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            size='small'
            onClick={handleCloseDialog}
            color="default"
            variant="contained"
            color="secondary"
          >
            cancelar
          </Button>
          <Button
            size='small'
            type="submit"
            onClick={handleSubmitEditForm}
            variant="contained"
            color="primary"
          >
            <SaveIcon fontSize='small' style={{ marginRight: '5px' }} />
            guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
