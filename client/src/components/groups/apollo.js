import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import GroupsContainer from "./container";

const LIST_COHORTS = gql`
  query cohorts { 
      cohorts {
          name
          startingDate
          users {
              _id
              name
            }
        }
  }
`;

export const GroupsApollo = () => {
    const {loading, error, data, fetchMore} = useQuery(LIST_COHORTS);

    let response;

    if(loading) {
        console.log('cargando');
    } else if(error) {
        console.log('ocurrió un error');
    } else {
       const response = data.cohorts;
        console.log(response);
    }


  //   const listUsers = useQuery(FIND_USER, {
  //     variables: {
  //       query: ''
  //     }
  //   });

  //   const [search, { loading, data, error }] = useLazyQuery(FIND_USER);

  //   const findStudent = (query) => {
  //     search({
  //       variables: {
  //         query
  //       }
  //     });
  //   }

  //   if (error) {
  //     console.log(error)
  //     return (
  //       "Error: Something went wrong!"
  //     )
  //   }

  return (
    <GroupsContainer
    //   findStudent={findStudent}
    //   results={data ? data.search : listUsers.data ? listUsers.data.search : []}
    //   loading={loading}
    response={data && data.cohorts}
    />
  );
};
