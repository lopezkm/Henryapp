import React from 'react';
import { useQuery, useMutation, useLazyQuery, gql } from '@apollo/client';
import StudentsContainer from './container';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Autorenew from '@material-ui/icons/Autorenew';
// import Skeleton from '@material-ui/lab/Skeleton';
import { useStyles } from "./views/styles";

const FIND_USER = gql `
query search($query: String!) {
  search(query: $query)
  {
    name
    lastname
    email
  }
}`;

export const StudentsApollo = () => {
    const classes = useStyles();

    // const {loading, error, data } = useQuery(FIND_USER);

    const [search, {loading , data , error}] = useLazyQuery(FIND_USER);

    const findStudent = (query) => {
     search({
        variables: {
          query
        }
    });
}

      if (loading) {
          console.log("loading")
          return (
        <Backdrop
          className={classes.backdrop}
          open={true}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
            <CircularProgress color="inherit" />
            <span style={{ display: 'block', marginTop: '2rem' }}>Cargando</span>
          </div>
        </Backdrop>
      )
    }

      if (error){
          console.log(error)
          return (
              "Error: Something went wrong!"
              ) 
            }

    return <StudentsContainer 
        results={data ? data.search : []} 
        findStudent={findStudent}
        />;
    

}

