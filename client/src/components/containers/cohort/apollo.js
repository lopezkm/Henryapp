import React from "react";
import { useQuery, useMutation, gql, useApolloClient } from "@apollo/client";
import CohortContainer from "./container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./components/styles";

const GET_COHORTS = gql`
  query cohorts {
    cohorts {
      _id
      name
      startingDate
      instructor 
      students {
        name
      }
    }
  }
`;

// const GET_ONE_COHORT = gql`
// query getCohort($cohortId: String!) {
//   cohorts{
//     _id
//     name
//     startingDate
//   }
// }
// `;

const CREATE_COHORT = gql`
  mutation createCohort($name: String!, $startingDate: String!) {
    createCohort(name: $name, startingDate: $startingDate) {
      name
      startingDate
      _id
    }
  }
`;

const UPDATE_COHORT = gql`
mutation updateCohort($_id: String! $name: String!, $startingDate: String!, $instructor: String!) {
  updateCohort(_id: $_id ,name: $name, startingDate: $startingDate, instructor: $instructor) {
    name
    startingDate
    _id
    instructor
  }
}
`;

const DELETE_COHORT = gql`
mutation deleteCohort($id: String!) {
  deleteCohort(id: $id) {
    name
    _id
  }
}
`;

export const CohortApollo = () => {
  const client = useApolloClient();
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_COHORTS);

  const [createCohortMutation] = useMutation(CREATE_COHORT, {
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

  const [updateCohortMutation] = useMutation(UPDATE_COHORT, {
    update: (cache, { data: { updateCohort } }) => {
      cache.modify({
        fields: {
          cohorts(existingCohorts = []) {
            const newCohortRef = cache.writeFragment({
              data: updateCohort,
              fragment: gql`
                fragment modifyCohort on Cohort {
                  _id
                  name
                  startingDate
                  instructor
                }
              `,
            });
            console.log(existingCohorts)
            const listCohorts = existingCohorts.filter(item => item.__ref !== `Cohort:${updateCohort._id}`)
            return [...listCohorts, newCohortRef];
          },
        },
      });
    },
  });

  const [deleteCohortMutation] = useMutation(DELETE_COHORT, {
    update: (cache, { data: { deleteCohort } }) => {
      cache.modify({
        fields: {
          cohorts(existingCohorts = []) {
            const listCohorts = existingCohorts.filter(item => item.__ref !== `Cohort:${deleteCohort._id}`)
            return listCohorts;
          },
        },
      });
    },
  });

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

  const updateCohort = (_id, name, startingDate, instructor) => {
    updateCohortMutation({
      variables: {
        _id,
        name,
        startingDate,
        instructor
      },
      optimisticResponse: {
        _id: `optimisticId_${Date.now()}`,
        name,
        startingDate,
        instructor
      },
    });
  };

  const deleteCohortById = (id) => {
    deleteCohortMutation({
      variables: {
        id: id
      }
    });
  }


  const getCohortById = (id) => {
    const { cohorts } = client.readQuery({
      query: GET_COHORTS
    });
    return cohorts.find(item => item._id === id);
  }

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

  return (
    <CohortContainer
      cohorts={data.cohorts}
      createNewCohort={createNewCohort}
      updateCohort={updateCohort}
      getCohortById={getCohortById}
      deleteCohortById={deleteCohortById}
    />
  );
};
