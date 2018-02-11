import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ActionButtonContent from '../ActionButtonContent';

function ActionButton({ content }) {
  return (
    <Button>
      <ActionButtonContent content={content} />
    </Button>
  );
}

ActionButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ActionButton;