import React from 'react';
import PropTypes from 'prop-types';

// import Components;
import ActionButton from '../ActionButton';
import MyView from '../../atoms/MyView';

function NonEditingButtonGroup({ startEditing, deleteItem }) {
  return (
    <MyView styleNames={['row']}>
      <ActionButton icon="✏️" eventFunc={startEditing} />
      <ActionButton icon="❌" eventFunc={deleteItem} />
    </MyView>
  );
}

NonEditingButtonGroup.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default NonEditingButtonGroup;