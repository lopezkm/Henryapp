import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import GroupsContainer from "./container";

// const FIND_USER = gql`
// query search($query: String!) {
//   search(query: $query)
//   {
//     name
//     lastname
//     email
//     inscriptionDate
//   }
// }`;

export const GroupsApollo = () => {

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
    />
  );

}
