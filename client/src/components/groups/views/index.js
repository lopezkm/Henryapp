import React from "react";
import ListGroups from "./listGroups";
import AddGroup from "./addGroups";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import ListGroupsPM from "./listGroupsPM";
//import CircularProgress from "@material-ui/core/CircularProgress";
//import WarningIcon from '@material-ui/icons/Warning';

const GroupsView = ({
  response,
  rows,
  anchorEl,
  onCreateGroup,
  handleChange,
  handleClick,
  handleClose,
  listgroups,
}) => {
  const classes = useStyles();
  console.log(listgroups);

  return (
    <div>
      <section>
        <Container className={classes.containerRoot}>
          <section>
            <AddGroup
              anchorEl={anchorEl}
              onCreateGroup={onCreateGroup}
              handleChange={handleChange}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          </section>

          <section>
            <ListGroupsPM
            listgroups={listgroups}
            />
          </section>

          <section>
            <ListGroups response={response} rows={rows} />
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
    </div>
  );
};
export default GroupsView;
