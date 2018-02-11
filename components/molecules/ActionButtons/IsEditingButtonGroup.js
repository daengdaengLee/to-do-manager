import React from 'react';

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

export default IsEditingButtonGroup;