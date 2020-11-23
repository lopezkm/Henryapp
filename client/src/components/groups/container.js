import React, { useState } from 'react';
import GroupsView from './views/index';

const GroupsContainer = ({
  
}) => {
  
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [values, setValues] = useState({
//     name: "",
//     startingDate: ""
//   });

//   const handleChange = (e) => setValues({
//     ...values,
//     [e.target.name]: e.target.value
//   });

//   const onCreateCohort = (e) => {
//     e.preventDefault();
//     createNewCohort(values.name, values.startingDate);
//     setValues({
//       name: '',
//       startingDate: ''
//     });
//   }

//   const handleClick = (e) => {
//     e.preventDefault();
//     setAnchorEl(e.currentTarget);
//   };

//   const handleClose = () => setAnchorEl(null);

  return (
    <>
      <GroupsView
        // cohorts={cohorts}
        // onCreateCohort={onCreateCohort}
        // handleChange={handleChange}
        // handleClick={handleClick}
        // handleClose={handleClose}
        // anchorEl={anchorEl}
      />
    </>
  )
};
 export default GroupsContainer;