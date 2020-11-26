import React from "react";
import { useStyles } from "../styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { gql, useMutation } from "@apollo/client";
import validate from "../../forms/validateChanges"; //validations
import Swal from "sweetalert2";
import {
  FormControl,
  Grid,
  Button,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import useForm from "../../forms/useForm";

const Toast = Swal.mixin({
  toast: true,
  position: "start-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const CHANGE_PASS = gql`
  mutation changePass($password: String!) {
    changePass(password: $password)
  }
`;

export default function ModalPass({ handleClose, open }) {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  const [changePass, { data, loading, error }] = useMutation(CHANGE_PASS);

  async function submit() {
    console.log("Estoy en el submit");
    const { password } = values;

    const response = await changePass({
      variables: {
        ...values,
      },
    });
    handleClose();
    Toast.fire({
      icon: "success",
      title: "Su contraseña ha sido cambiada con éxito.",
    });
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalDisplay}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paperModal}>
          <Typography>Cambiar contraseña</Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid item xs={12} sm={8}>
              <FormControl>
                <InputLabel htmlFor="pass"></InputLabel>
                <Input
                  id="pass"
                  name="pass"
                  type="password"
                  aria-describedby="pass-helper"
                  onChange={(e) => handleChange(e)}
                  value={values.pass}
                />
                {errors.pass && <p className="error">{errors.pass}</p>}
                <FormHelperText id="pass-helper">
                  Contraseña actual
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormControl>
                <InputLabel htmlFor="pass"></InputLabel>
                <Input
                  id="pass"
                  name="password"
                  type="password"
                  aria-describedby="pass-helper"
                  value={values.password}
                  onChange={(e) => handleChange(e)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <FormHelperText id="pass-helper">
                  Nueva contraseña
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={10}>
              <FormControl>
                <InputLabel htmlFor="pass2"> </InputLabel>
                <Input
                  id="pass"
                  name="password2"
                  type="password"
                  aria-describedby="pass-helper"
                  onChange={(e) => handleChange(e)}
                  value={values.password2}
                />
                {errors.password2 && (
                  <p className="error">{errors.password2}</p>
                )}
                <FormHelperText id="pass-helper2">
                  {" "}
                  Reingrese nueva contraseña{" "}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item md={10}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}
