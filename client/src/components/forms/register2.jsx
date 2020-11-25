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
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "../../css/forms.css";
import useForm from "./useForm"; //standard hooks for forms
import validate from "./validateRegister"; //validations
import useStyles from "./stylesRegister"; //import styles
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGoogle } from '@fortawesome/free-brands-svg-icons';

const CREATE_USER = gql`
  mutation register(
    $name: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    register(
      name: $name
      lastname: $lastname
      email: $email
      password: $password
    ) {
      user {
        _id
        email
      }
      token
      refreshToken
    }
  }
`;

export default function Register2() {
  const classes = useStyles();
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  // const [createUser] = useMutation(CREATE_USER)
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const history = useHistory();

  async function submit() {
    console.log("Estoy en el submit");
    // const {name, lastname, email, password} = values

    const response = await createUser({
      variables: {
        ...values,
      },
    });

    history.push("/");
  }

  const googleAuth = () => {
		window.location.href = "http://localhost:3001/google";
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid item xs={12} sm={8} className={classes.form}>
            <Typography variant="h4" gutterBottom>
              Register
              <Button
                  onClick={googleAuth}
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.buttonG}
                >
                 <FontAwesomeIcon className={classes.iconG} icon={faGoogle} />oo<FontAwesomeIcon className={classes.iconG2} icon={faGoogle} />le
            </Button>
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Grid item xs={12} sm={10}>
                <FormControl>
                  <InputLabel htmlFor="firstName"></InputLabel>
                  <Input
                    id="firstName"
                    name="name"
                    type="text"
                    aria-describedby="fn-helper"
                    onChange={(e) => handleChange(e)}
                    value={values.name}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                  <FormHelperText id="fn-helper">First name</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={10}>
                <FormControl>
                  <InputLabel htmlFor="lastName"></InputLabel>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    aria-describedby="ln-helper"
                    onChange={(e) => handleChange(e)}
                    value={values.lastname}
                  />
                  {errors.lastname && (
                    <p className="error">{errors.lastname}</p>
                  )}
                  <FormHelperText id="ln-helper">Last name</FormHelperText>
                </FormControl>
              </Grid>
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
            <br></br>

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.button}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
