import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import utils
import filterStyles from '../../../utils/filterStyles';
import validateStyleNames from '../../../utils/validateStyleNames';

// define validator function
const validatorForStyleNames = validateStyleNames(['toDoItemText', 'completedText', 'uncompletedText']);

function MyTextTemp({ styleNames, children }) {
  return (
    <Text style={filterStyles(styleNames, styles)}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  toDoItemText: {
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

const MyText = withValidProps(validatorForStyleNames)(MyTextTemp);

MyText.propTypes = {
  styleNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.string.isRequired,
};

export default MyText;