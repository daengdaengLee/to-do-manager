import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonContent from '../ButtonContent';

function ActionButton({ ownEvent, content }) {
  return (
    <Button ownEvent={ownEvent}>
      <ButtonContent content={content} />
    </Button>
  );
}

ActionButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
  content: PropTypes.string.isRequired,
};

export default ActionButton;