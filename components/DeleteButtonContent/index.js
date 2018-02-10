import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DeleteButtonContent() {
  return (
    <View style={styles.buttonContainer}>
      <Text>
        ❌
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DeleteButtonContent;