import React from 'react';
import SearchStudents from './searchStudents';
import ResultsStudents from "./resultsStudents";
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

const StudentsView= ({
    handleChange,
    handleClick,
    results
}) => {
const classes = useStyles();

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section>

          <SearchStudents 
          handleChange={handleChange} 
          handleClick={handleClick} 
          />
          
        </section>
        <section>

          <ResultsStudents
          results={results}
           />

        </section>
      </Container>
    </section>
  );

}
export default StudentsView;
