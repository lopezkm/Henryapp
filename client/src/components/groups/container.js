import React, { useState } from "react";
import GroupsView from "./views/index";

const GroupsContainer = ({
   response, 
   createNewGroup,
   listgroups
  }) => {
  console.log(listgroups);
  

  const [anchorEl, setAnchorEl] = useState(null);
  const [values, setValues] = useState({
    name: "",
    PM: ""
  });

  const handleChange = (e) => setValues({
    ...values,
    [e.target.name]: e.target.value
  });

  const onCreateGroup = (e) => {
    e.preventDefault();
    createNewGroup(values.name, values.PM);
    setValues({
      name: '',
      PM: ''
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);


  return (
    <>
      <GroupsView
        response={response}
        anchorEl={anchorEl}
        onCreateGroup={onCreateGroup}
        handleChange={handleChange}
        handleClick={handleClick}
        handleClose={handleClose}
        listgroups={listgroups}
      />
    </>
  );
};
export default GroupsContainer;
