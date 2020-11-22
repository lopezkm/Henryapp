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
import Paper from "@material-ui/core/Paper";
import "../../css/forms.css";
import useForm from "./useForm";
import validate from "./validateReset";
import useStyleslog from "./stylesLogin"; //import styles
import { gql, useQuery } from "@apollo/client";
import Swal from "sweetalert2";

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

const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
      }
      token
      refreshToken
    }
  }
`;

export default function ResetPassword() {
  const classes = useStyleslog();
  const [open, setOpen] = useState(false);
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  const { loading, error, data, fetchMore } = useQuery(LOGIN_USER, {
    variables: {
      password: "",
      password2: "",
    },
  });

  async function submit() {
    const { password } = values;

    console.log(values);
    const { data } = await fetchMore({
      variables: {
        password,
      },
    });

    Toast.fire({
      icon: "success",
      title: "¡Contraseña cambiada exitosamente!",
    });
  }

  return (
    <React.Fragment>
      <Grid
        container
        spacing={5}
        className={classes.main}
        style={{ margin: "0px" }}
      >
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className={classes.center}
        >
          <Grid item xs={12} sm={8} className={classes.form}>
            <Typography variant="h4" gutterBottom>
              Restablecer contraseña
            </Typography>
            <br></br>

            <form onSubmit={(e) => handleSubmit(e)}>
              <Grid item xs={12} sm={8}>
                <FormControl>
                  <InputLabel htmlFor="pass"></InputLabel>
                  <Input
                    id="pass"
                    name="password"
                    type="password"
                    aria-describedby="pass-helper"
                    onChange={(e) => handleChange(e)}
                    value={values.password}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                  <FormHelperText id="pass-helper">Password</FormHelperText>
                </FormControl>
              </Grid>
              <br></br>
              <Grid item xs={12} sm={8}>
                <FormControl>
                  {" "}
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
                    Re-enter password{" "}
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
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
