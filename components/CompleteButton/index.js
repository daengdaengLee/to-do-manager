import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';
import CompleteButtonContent from '../CompleteButtonContent';

function CompleteButton({ isCompleted, ownEvent }) {
  return (
    <Button ownEvent={ownEvent} >
      <CompleteButtonContent isCompleted={isCompleted} />
    </Button>
  );
}

CompleteButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  ownEvnet: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default CompleteButton;