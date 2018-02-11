import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../Button';
import ActionButtonContent from '../ActionButtonContent';

// import HOCs
import withButtonContent from '../../hoc/withButtonContent';

const ActionButton = withButtonContent(Button, ActionButtonContent);

ActionButton.propTypes = {
  ...ActionButton.propTypes,
  contentProps: PropTypes.shape({ content: PropTypes.string.isRequired }).isRequired,
};

export default ActionButton;