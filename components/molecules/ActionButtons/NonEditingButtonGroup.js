import React from 'react';

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

export default NonEditingButtonGroup;