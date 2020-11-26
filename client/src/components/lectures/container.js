import React, { useState } from 'react';
import LectureView from './container/index';

export const Contenedor = ({
  lectures,
  createNewLecture
}) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    embededLink: "",
    description: "",
    teoriaLink: ""
  });

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateLecture = (e) => {
    e.preventDefault();
    createNewLecture(values.name, values.embededLink, values.description, values.teoriaLink);
    setValues({
      name: '',
      embededLink: '',
      description: '',
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
