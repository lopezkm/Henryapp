import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  Button,
  TextField,
  Input,
  InputLabel,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "../../css/forms.css";
import useForm from "./useForm";
import validate from "./validateLogin";
import useStyleslog from "./stylesLogin"; //import styles
import { gql, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import ModalPass from "./modalResetPass";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        name
      }
      token
      refreshToken
    }
  }
`;

export default function Login() {
  const classes = useStyleslog();
  const [open, setOpen] = useState(false);
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const [loadingUserQuery, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  if (data) {
    const token = data.login.token;
    localStorage.setItem("token", token);
    history.push("/root/home");
    Toast.fire({
      icon: "success",
      title: "¡Bienvenido" + " " + data.login.user.name + "!",
    });
  }

  async function submit() {
    const { email, password } = values;

    await loadingUserQuery({
      variables: {
        email,
        password,
      },
    });
  }

  // if (error) return <div>"Error: Something went wrong!"</div>;
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
              Login
            </Typography>
            <br></br>

            <form onSubmit={(e) => handleSubmit(e)}>
              <Grid item xs={12} sm={8}>
                <FormControl>
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
              <br></br>
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
                  {error ? (
                    <p className="error">Ha ingresado mal la contraseña</p>
                  ) : null}
                  <FormHelperText id="pass-helper">Password</FormHelperText>
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
            <br></br>

            <Grid container>
              <Grid item xs>
                <Typography
                  onClick={handleOpen}
                  className={classes.button}
                  style={{ cursor: "pointer" }}
                >
                  ¿Olvidaste tu contraseña?
                </Typography>
                <ModalPass handleClose={handleClose} open={open} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
