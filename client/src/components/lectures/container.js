import React, { useState } from 'react';
import LectureView from './container/index';

export default ({
  lectures,
  createNewLecture
}) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    decription: "",
    embededLink: "",
    teoriaLink: ""
  });

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateLecture = (e) => {
    e.preventDefault();
    createNewLecture(values.name, values.decription, values.embededLink, values.teoriaLink);
    setValues({
      name: '',
      description: '',
      embededLink: '',
      teoriaLink: ''
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <LectureView
        lectures={lectures}
        onCreateLecture={onCreateLecture}
        handleChange={handleChange}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  )
};
