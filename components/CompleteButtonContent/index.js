import React from 'react';
import { View, StyleSheet } from 'react-native';

function CompleteButtonContent() {
  return (
    <View
      style={styles.circle}
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
});

export default CompleteButtonContent;