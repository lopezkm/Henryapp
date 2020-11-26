import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import SprintContainer from "./container.js";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Autorenew from "@material-ui/icons/Autorenew";
// import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./stylesSprint";

const GET_SPRINTS = gql`
  query sprints{
    sprints {
        name
        duration
        description
    }
  }
`;

const CREATE_SPRINT = gql`
  mutation createSprint($name: String!, $duration: String!, $description: String!) {
    createSprint(name: $name, duration: $duration, description: $description) {
      name
      duration
      description
      _id
    }
  }
`;

export const SprintApollo = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_SPRINTS);

  const [createSprintMutation] = useMutation(CREATE_SPRINT, {
    update: (cache, { data: { createSprint } }) => {
      cache.modify({
        fields: {
          sprints(existingSprints = []) {
            const newSprintRef = cache.writeFragment({
              data: createSprint,
              fragment: gql`
                fragment NewSprint on Sprint {
                  _id
                  name
                  duration
                  description
                }
              `,
            });
            return [...existingSprints, newSprintRef];
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

  const createNewSprint = (name, duration, description) => {
    createSprintMutation({
      variables: {
        name,
        duration,
        description
      },
      optimisticResponse: {
        _id: `optimisticId_${Date.now()}`,
        name,
        duration,
        description
      },
    });
  };

  return (
    <SprintContainer sprints={data.sprints} createNewSprint={createNewSprint} />
  );
};
