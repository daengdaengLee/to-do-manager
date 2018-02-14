import React from 'react';
import PropTypes from 'prop-types';

// import Components;
import ActionButton from '../ActionButton';
import MyView from '../../atoms/MyView';

function NonEditingButtonGroup({ startEditing, deleteItem }) {
  return (
    <MyView styleNames={['row']}>
      <ActionButton eventFunc={startEditing} icon="✏️" />
      <ActionButton eventFunc={deleteItem} icon="❌" />
    </MyView>
  );
}

NonEditingButtonGroup.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default NonEditingButtonGroup;