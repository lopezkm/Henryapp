import React from 'react';
import { useQuery, useMutation, useLazyQuery, gql } from '@apollo/client';
import StudentsContainer from './container';
// import Autorenew from '@material-ui/icons/Autorenew';
// import Skeleton from '@material-ui/lab/Skeleton';

const FIND_USER = gql`
query search($query: String!) {
  search(query: $query)
  {
    name
    lastname
    email
    inscriptionDate
  }
}`;

export const StudentsApollo = () => {

  const listUsers = useQuery(FIND_USER, {
    variables: {
      query: ''
    }
  });

  const [search, { loading, data, error }] = useLazyQuery(FIND_USER);

  const findStudent = (query) => {
    search({
      variables: {
        query
      }
    });
  }

  if (error) {
    console.log(error)
    return (
      "Error: Something went wrong!"
    )
  }

  return (
    <StudentsContainer
      findStudent={findStudent}
      results={data ? data.search : listUsers.data ? listUsers.data.search : []}
      loading={loading}
    />
  );

}

