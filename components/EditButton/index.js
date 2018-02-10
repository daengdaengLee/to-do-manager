import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import EditButtonContent from '../EditButtonContent';

function EditButton({ ownEvent }) {
  return (
    <Button ownEvent={ownEvent}>
      <EditButtonContent />
    </Button>
  );
}

EditButton.propTypes = {
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default EditButton;