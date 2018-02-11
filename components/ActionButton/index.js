import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ActionButtonContent from '../ActionButtonContent';

function ActionButton({ ownEvent, content }) {
  return (
    <Button ownEvent={ownEvent}>
      <ActionButtonContent content={content} />
    </Button>
  );
}

ActionButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
  content: PropTypes.string.isRequired,
};

export default ActionButton;