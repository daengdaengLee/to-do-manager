import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyTextInput from '../../atoms/MyTextInput';

function IsEditingText({ isCompleted, toDoValue, controlInput, finishEditing }) {
  return <MyTextInput
    styleNames={['itemInput', isCompleted ? 'completedText' : 'uncompletedText']}
    multiline={true}
    value={toDoValue}
    onChangeText={controlInput}
    onBlur={finishEditing}
  />;
}

IsEditingText.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  toDoValue: PropTypes.string.isRequired,
  controlInput: PropTypes.func.isRequired,
  finishEditing: PropTypes.func.isRequired,
};

export default IsEditingText;