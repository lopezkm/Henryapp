import React, { useState } from 'react';
import SprintView from './container/index';

export default ({
  sprints,
  createNewSprint
}) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    duration: "",
    description: ""
  });

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateSprint = (e) => {
    e.preventDefault();
    createNewSprint(values.name, values.duration, values.description);
    setValues({
      name: '',
      duration: '',
      description: ''
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <SprintView
        sprints={sprints}
        onCreateSprint={onCreateSprint}
        handleChange={handleChange}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  )
};
