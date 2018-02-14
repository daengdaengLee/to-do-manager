import React from 'react';
import PropTypes from 'prop-types';

// import Components
import IsEditingButtonGroup from './IsEditingButtonGroup';
import NonEditingButtonGroup from './NonEditingButtonGroup';

// import HOCs
import withConditionRender from '../../../hoc/withConditionRender';

// define Predicate function
function predicateIsEditing(props) { return props.isEditing }

const ActionButtons = withConditionRender(predicateIsEditing)(NonEditingButtonGroup)(IsEditingButtonGroup);

ActionButtons.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  trueProps: PropTypes.shape({ finishEditing: PropTypes.func }).isRequired,
  falseProps: PropTypes.shape({ startEditing: PropTypes.func, deleteItem: PropTypes.func }).isRequired,
};

export default ActionButtons;