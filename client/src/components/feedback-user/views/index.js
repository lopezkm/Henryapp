import React from 'react';
import Partner from './partner'
import { useStyles } from './styles';

const FeedbackView = ({
  
}) => {
  const classes = useStyles();

  return (
      <div>
        <p>Mi componente Feedback</p>
        <Partner />
      </div>
  );

}
export default FeedbackView;