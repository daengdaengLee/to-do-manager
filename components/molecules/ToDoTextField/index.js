import React from 'react';
import PropTypes from 'prop-types';

// import Components
import IsEditingText from './IsEditingText';
import NonEditingText from './NonEditingText';

// import HOCs
import withConditionRender from '../../../hoc/withConditionRender';

// define Predicate function
function predicateIsEditing(props) { return props.isEditing }

const ToDoTextField = withConditionRender(predicateIsEditing)(NonEditingText)(IsEditingText);

ToDoTextField.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  trueProps: PropTypes.shape({
    isCompleted: PropTypes.bool,
    toDoValue: PropTypes.string,
    controlInput: PropTypes.func,
    finishEditing: PropTypes.func,
  }).isRequired,
  falseProps: PropTypes.shape({
    isCompleted: PropTypes.bool,
    toDoText: PropTypes.string,
  }).isRequired,
};

export default ToDoTextField;