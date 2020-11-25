import React, { useState } from 'react';
import GroupsView from './views/index';


const GroupsContainer = ({
  response
}) => {
    console.log(response)
  return (
    <>
      <GroupsView
        response={response}
      />
    </>
  )
};
 export default GroupsContainer;