import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withNoStyleNames from '../../../hoc/withNoStyleNames';
import withInvalidStyleNames from '../../../hoc/withInvalidStyleNames';

// import utils
import filterStyles from '../../../utils/filterStyles';

function MyText({ styleNames, children }) {
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

MyText.propTypes = {
  styleNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.string.isRequired,
};

export default withNoStyleNames(withInvalidStyleNames(['toDoItemText', 'completedText', 'uncompletedText'])(MyText));