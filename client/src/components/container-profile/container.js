import React, { useState } from 'react';
import UserViews from './components/views';

export default ({
  user,
}) => {
  console.log('User en container', user)
  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    startingDate: ""
  });

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateCohort = (e) => {
    e.preventDefault();
    createNewCohort(values.name, values.startingDate);
    setValues({
      name: '',
      startingDate: ''
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <UserViews
        user={user}
      />
    </>
  )
};