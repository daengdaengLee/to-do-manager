import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonContent from '../ButtonContent';

function EditButton({ ownEvent }) {
  return (
    <Button ownEvent={ownEvent}>
      <ButtonContent content="✏️" />
    </Button>
  );
}

EditButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default EditButton;