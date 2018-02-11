import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withNoStyleNames from '../../../hoc/withNoStyleNames';

// import utils
import filterStyles from '../../../utils/filterStyles';

const { width } = Dimensions.get('window');

function MyTextInput({ styleNames, ...remainProps }) {
  return <TextInput
    style={filterStyles(styleNames, styles)}
    underlineColorAndroid={'transparent'}
    returnKeyType={'done'}
    {...remainProps}
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

MyTextInput.propTypes = {
  styleNames: PropTypes.arrayOf(PropTypes.string),
};

export default withNoStyleNames(MyTextInput);