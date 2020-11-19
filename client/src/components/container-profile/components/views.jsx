import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../styles";
import PersonalInfo from "./personalInfo";
import PictureProfile from "./pictureProfile";

//import { useQuery, useMutation, gql } from "@apollo/client";

const drawerWidth = 240;
/*
const GET_PROFILE = gql`
  query profile($id: String!) {
    profile(id: $id) {
      inscriptionDate
      name
      lastname
      email
      rol
      picture
      title
      shortDescription
      description
      gitHubLink
      link
    }
  }
`;*/

export default ({ user }) => {
  // export default function UserProfile2(
  //   user
  // ) {
/*  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { id: "5fb562eac3c83b23c123e552" },
  });
*/

  console.log("User en views", user);
  //console.log('data.profile', data.profile)
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={6}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <PersonalInfo user={user}/>
              </Paper>

            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <PictureProfile />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>Info academica</Paper>
            </Grid>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
};
