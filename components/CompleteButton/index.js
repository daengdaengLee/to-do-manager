import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';
import CompleteButtonContent from '../CompleteButtonContent';

function CompleteButton({ isCompleted }) {
  return (
    <Button>
      <CompleteButtonContent isCompleted={isCompleted} />
    </Button>
  );
}

CompleteButton.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

export default CompleteButton;