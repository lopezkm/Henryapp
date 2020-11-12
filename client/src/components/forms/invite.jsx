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
import useForm from "./useForm";
import validate from "./validateInvite";
import useStyleslog from "./stylesLogin"; //import styles
import { gql, useQuery } from "@apollo/client";

const SEND_EMAIL = gql` 
sendEmail(
  email: String!
  url: String!
  ){
  sendEmail (email: $email,  url:"http://localhost:3000/register"){
    mailed
}`;

export default function Invite() {
  const classes = useStyleslog();
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );

  const [sendEmail, { data, loading, error }] = useQuery(SEND_EMAIL);

  async function submit() {
    console.log(data);

    const response = await sendEmail({
      variables: {
        email: values.email,
      },
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid item xs={12} sm={8} className={classes.form}>
            <Typography variant="h4" gutterBottom>
              Invite students
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

            <Grid container></Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
