import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyTextInput from '../../atoms/MyTextInput';

function InputToDo({ newToDo, onChangeText, onSubmitEditing }) {
  return <MyTextInput
    styleNames={['inputNewToDo']}
    placeholder={'New To DO'}
    placeholderTextColor={'#999999'}
    value={newToDo}
    onChangeText={onChangeText}
    autoCorrect={false}
    onSubmitEditing={onSubmitEditing}
  />;
}

InputToDo.propTypes = {
  newToDo: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default InputToDo;