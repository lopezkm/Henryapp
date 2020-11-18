import React, { useState } from 'react';
import StudentsView from './views/index';

const StudentsContainer = ({
  findStudent,
  results,
  loading
}) => {

  const [values, setValues] = useState(" ");

  const handleChange = e => {
    const value = e.target.value;
    setValues(value);
    findStudent(e.target.value);
  }

  return (
    <StudentsView
      handleChange={handleChange}
      results={results}
      loading={loading}
    />
  )

};

export default StudentsContainer;