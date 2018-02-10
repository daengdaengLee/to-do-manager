import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function CompleteButtonContent({ isCompleted }) {
  return (
    <View
      style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20,
  },
  completedCircle: {
    borderColor: '#BBBBBB',
  },
  uncompletedCircle: {
    borderColor: '#F23657',
  },
});

CompleteButtonContent.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

export default CompleteButtonContent;