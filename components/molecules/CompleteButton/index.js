import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../../atoms/Button';
import MyView from '../../atoms/MyView';

function CompleteButton({ isCompleted, eventFunc }) {
  return (
    <Button ownEvent={{ onPressOut: eventFunc}}>
      <MyView styleNames={['circle', isCompleted ? 'completedCircle' : 'uncompletedCircle']} />
    </Button>
  );
}

CompleteButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  eventFunc: PropTypes.func.isRequired,
};

export default CompleteButton;