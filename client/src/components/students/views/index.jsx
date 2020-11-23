import React from 'react';
import SearchStudents from './searchStudents';
import ResultsStudents from "./resultsStudents";
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import WarningIcon from '@material-ui/icons/Warning';
//import UserProfile from '../../userProfile/views/perfil';

const StudentsView = ({
  handleChange,
  results,
  loading
}) => {
  const classes = useStyles();
  console.log(results);

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section>
          <SearchStudents
            handleChange={handleChange}
          />
        </section>
        <section>
          {
            loading ?
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
                <CircularProgress color="inherit" />
                <span style={{ display: 'block', marginTop: '2rem' }}>Buscando</span>
              </div>
              :
              <ResultsStudents
                results={results}
              />
          }
             {/* <UserProfile results={results} /> */}
        </section>
      </Container>
    </section>
  );

}
export default StudentsView;
