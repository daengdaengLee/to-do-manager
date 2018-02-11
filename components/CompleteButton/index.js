import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../Button';
import CompleteButtonContent from '../CompleteButtonContent';

// import HOCs
import withButtonContent from '../../hoc/withButtonContent';

const CompleteButton = withButtonContent(Button, CompleteButtonContent);

CompleteButton.propTypes = {
  ...CompleteButton.propTypes,
  contentProps: PropTypes.shape({ isCompleted: PropTypes.bool.isRequired }).isRequired,
};

export default CompleteButton;