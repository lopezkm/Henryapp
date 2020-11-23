import React from 'react';
import ListGroups from './listGroups';
// import  from "./resultsStudents";
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//import WarningIcon from '@material-ui/icons/Warning';

const GroupsView = ({
  
}) => {
  const classes = useStyles();

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section>
          {/* <SearchStudents
            handleChange={handleChange}
          /> */}
        </section>
        <section>
        
        <ListGroups />
          {/* {
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
          } */}
        </section>
      </Container>
    </section>
  );

}
export default GroupsView;