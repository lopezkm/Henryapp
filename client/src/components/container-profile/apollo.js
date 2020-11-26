import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import UserContainer from "./container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";
import { Input } from "@material-ui/core";

const GET_PROFILE = gql`
  query me {
    me {
      inscriptionDate
      name
      lastname
      email
      rol
      title
      shortDescription
      description
      gitHubLink
      link
      picture
    }
  }
`;

const MODIFY_PROFILE = gql`
  mutation createCohort($name: String!, $startingDate: String!) {
    createCohort(name: $name, startingDate: $startingDate) {
      name
      startingDate
      _id
    }
  }
`;

export const ProfileApollo = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_PROFILE);

  const [createCohortMutation] = useMutation(MODIFY_PROFILE, {
    update: (cache, { data: { createCohort } }) => {
      cache.modify({
        fields: {
          cohorts(existingCohorts = []) {
            const newCohortRef = cache.writeFragment({
              data: createCohort,
              fragment: gql`
                fragment NewCohort on Cohort {
                  _id
                  name
                  startingDate
                }
              `,
            });
            return [...existingCohorts, newCohortRef];
          },
        },
      });
    },
  });

  if (loading)
    return (
      <Backdrop className={classes.backdrop} open={true}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" />
          <span style={{ display: "block", marginTop: "2rem" }}>Cargando</span>
        </div>
      </Backdrop>
    );

  if (error) return "Error: Something went wrong!";

  const createNewCohort = (name, startingDate) => {
    createCohortMutation({
      variables: {
        name,
        startingDate,
      },
      optimisticResponse: {
        _id: `optimisticId_${Date.now()}`,
        name,
        startingDate,
      },
    });
  };

  return <UserContainer user={data.me} />;
};
