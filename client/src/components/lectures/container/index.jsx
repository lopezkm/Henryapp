import React from 'react';
import AddLectureButton from './addLecture';
import ListLectures from './listLectures';
import Container from '@material-ui/core/Container';
import { useStyles } from '../stylesGeneral';

export default ({
  lectures,
  anchorEl,
  handleChange,
  handleClick,
  onCreateLecture,
  handleClose
}) => {

  const classes = useStyles();

  return (
    <section>
      <Container className={classes.containerRoot}>
        <section>
          <AddLectureButton
            anchorEl={anchorEl}
            onCreateLecture={onCreateLecture}
            handleChange={handleChange}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </section>
        <section>
          <ListLectures lectures={lectures} />
        </section>
      </Container>
    </section>
  );

}