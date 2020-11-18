import React, { useState } from 'react';
import StudentsView from './views/index';

const StudentsContainer= ({
    findStudent,
    results,
  }) => {
    
    const [values, setValues] = useState("");
    
    const handleChange= e => {
        setValues(e.target.value);
    }
    
    const handleClick= e => {
        e.preventDefault();
        findStudent(values);
        
    }
    
    // console.log(values);

    return (
            <>
        <StudentsView
          handleChange={handleChange}
          handleClick={handleClick}
          results={results}
        
        />
      </>
    )
  };

  export default StudentsContainer;