import React from 'react';
import PropTypes from 'prop-types';

// import Components;
import ActionButton from '../ActionButton';
import Row from '../../atoms/Row';

function NonEditingButtonGroup({ startEditing, deleteItem }) {
  return (
    <Row>
      <ActionButton icon="✏️" eventFunc={startEditing} />
      <ActionButton icon="❌" eventFunc={deleteItem} />
    </Row>
  );
}

NonEditingButtonGroup.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default NonEditingButtonGroup;