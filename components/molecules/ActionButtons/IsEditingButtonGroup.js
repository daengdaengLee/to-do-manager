import React from 'react';
import PropTypes from 'prop-types';

// import Components
import ActionButton from '../ActionButton';
import MyView from '../../atoms/MyView';

function IsEditingButtonGroup({ finishEditing }) {
  return (
    <MyView styleNames={['row']}>
      <ActionButton icon="✅" eventFunc={finishEditing} />
    </MyView>
  );
}

IsEditingButtonGroup.propTypes = {
  finishEditing: PropTypes.func.isRequired,
};

export default IsEditingButtonGroup;