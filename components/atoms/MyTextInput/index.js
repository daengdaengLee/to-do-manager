import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import utils
import filterStyles from '../../../utils/filterStyles';
import validateStyleNames from '../../../utils/validateStyleNames';

// define validator function
const validatorForStyleNames = validateStyleNames(['mainInput', 'itemInput', 'completedText', 'uncompletedText']);

const { width } = Dimensions.get('window');

function MyTextInputTemp({
  styleNames,
  multiline,
  value,
  onChangeText,
  onBlur,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  onSubmitEditing,
}) {
  return <TextInput
    style={filterStyles(styleNames, styles)}
    underlineColorAndroid={'transparent'}
    returnKeyType={'done'}
    multiline={multiline}
    value={value}
    onChangeText={onChangeText}
    onBlur={onBlur}
    placeholder={placeholder}
    placeholderTextColor={placeholderTextColor}
    autoCorrect={autoCorrect}
    onSubmitEditing={onSubmitEditing}
  />;
}

const styles = StyleSheet.create({
  mainInput: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBBB',
    fontSize: 25,
  },
  itemInput: {
    marginVertical: 15,
    width: width / 2,
    paddingBottom: 5,
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 20,
  },
  completedText: {
    color: '#BBBBBB',
    textDecorationLine: 'line-through',
  },
  uncompletedText: {
    color: '#353839',
  },
});

const MyTextInput = withValidProps(validatorForStyleNames)(MyTextInputTemp);

MyTextInput.propTypes = {
  styleNames: PropTypes.arrayOf(PropTypes.string),
  multiline: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  autoCorrect: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
};

export default MyTextInput;