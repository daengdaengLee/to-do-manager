import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonContent from '../ButtonContent';

function DeleteButton({ ownEvent }) {
  return (
    <Button ownEvent={ownEvent}>
      <ButtonContent content="❌" />
    </Button>
  );
}

DeleteButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default DeleteButton;