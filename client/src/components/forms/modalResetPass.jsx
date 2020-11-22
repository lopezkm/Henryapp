import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import "../../css/forms.css";
import validate from "./validateInvite";
import useStyleslog from "./stylesLogin"; //import styles
import Swal from "sweetalert2";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import useForm from "./useForm";
import { gql, useQuery } from "@apollo/client";

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

const RESET_PASS = gql`
  query resetPass($email: String!, $url: String!) {
    resetPass(email: $email, url: $url) {
      mailed
    }
  }
`;

export default function ModalPass({ handleClose, open }) {
  const classes = useStyleslog();
  const { loading, error, data, fetchMore } = useQuery(RESET_PASS, {
    variables: { email: " ", url: "" },
  });
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );
  async function submit() {
    const data = values;

    console.log(values);
    const resp = await fetchMore({
      variables: {
        email: values.email,
        url: "http://localhost:3000/root/login",
      },
    });
    console.log("mi respuesta", resp);

    Toast.fire({
      icon: "success",
      title: "Se envio enlace para resetear contraseña al correo electronico.",
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
          <Typography> Ingresa tu email</Typography>
          <form>
            <Grid item xs={12} sm={8}>
              <FormControl onSubmit={handleSubmit}>
                <InputLabel htmlFor="email"></InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  aria-describedby="email-helper"
                  onChange={(e) => handleChange(e)}
                  value={values.email}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <FormHelperText id="email-helper">Email </FormHelperText>
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
