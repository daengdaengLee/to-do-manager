import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../../atoms/Button';
import CompleteCircle from '../../atoms/CompleteCircle';

function CompleteButton({ isCompleted, eventFunc }) {
  return (
    <Button ownEvent={{ onPressOut: eventFunc}}>
      <CompleteCircle isCompleted={isCompleted} />
    </Button>
  );
}

CompleteButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  eventFunc: PropTypes.func.isRequired,
};

export default CompleteButton;