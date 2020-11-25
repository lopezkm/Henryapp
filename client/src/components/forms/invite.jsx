import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "../../css/forms.css";
import useForm from "./useForm";
import validate from "./validateInvite";
import useStyleslog from "./stylesLogin"; //import styles
import { gql, useLazyQuery } from "@apollo/client";
import Swal from "sweetalert2";
import FileUpload from "../container-uploads/apolloCSV";

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

const SEND_MAIL = gql`
  query sendEmail($email: String!, $url: String!) {
    sendEmail(email: $email, url: $url) {
      mailed
    }
  }
`;
//"http://localhost:3000/root/register"
export default function Invite() {
  const [open, setOpen]=useState(false);

  const classes = useStyleslog();
  const [sendEmailQuery,{ loading, error, data}] = useLazyQuery(SEND_MAIL);
  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    validate
  );
  
  async function submit() {
    const data = values;
    const resp = await sendEmailQuery({
      variables: {
        email: values.email,
        url: "http://localhost:3000/root/register",
      },
    });
    console.log("mi respuesta", resp);

    Toast.fire({
      icon: "success",
      title: "Se envio un mensaje al correo electronico.",
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
            <Typography variant="h5" gutterBottom>
              Invita un Alumno
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
                  Enviar
                </Button>
              </Grid>
            </form>
            <br></br>

            <Grid container style={{marginTop:"17vh"}}>
            <br></br>
            <Typography variant="p" >
            o carga una 
            <Button 
            onClick={()=> setOpen(true)}
            color="primary"
            variant="contained"
            size="small"
            style={{marginLeft:"7px"}}
            >
            lista
            </Button>
            </Typography>
            </Grid>
            
          </Grid>
          
        </Grid>
        
      </Grid>
      {open?<FileUpload setOpen={setOpen}/>:<></>}
    </React.Fragment>
  );
}
