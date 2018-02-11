import React from 'react';
import PropTypes from 'prop-types';

// import Components
import ActionButton from '../ActionButton';
import Row from '../../atoms/Row';

function IsEditingButtonGroup({ finishEditing }) {
  return (
    <Row>
      <ActionButton icon="✅" eventFunc={finishEditing} />
    </Row>
  );
}

IsEditingButtonGroup.propTypes = {
  finishEditing: PropTypes.func.isRequired,
};

export default IsEditingButtonGroup;