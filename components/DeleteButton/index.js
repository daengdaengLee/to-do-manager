import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import DeleteButtonContent from '../DeleteButtonContent';

function DeleteButton({ ownEvent }) {
  return (
    <Button ownEvent={ownEvent}>
      <DeleteButtonContent />
    </Button>
  );
}

DeleteButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default DeleteButton;