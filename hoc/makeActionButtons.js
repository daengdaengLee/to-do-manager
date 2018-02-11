import React from 'react';
import { View, StyleSheet } from 'react-native';

const makeActionButtons = (FinishEditingButton, StartEditingButton, DeleteButton) => ({
  isEditing,
  finishEditing,
  startEditing,
  deleteItem,
}) => isEditing ? (
  <View style={styles.actions}>
    <FinishEditingButton ownEvent={{ onPressOut: finishEditing }} />
  </View>
) : (
  <View style={styles.actions}>
    <StartEditingButton ownEvent={{ onPressOut: startEditing }} />
    <DeleteButton ownEvent={{ onPressOut: deleteItem }} />
  </View>
);

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
});

export default makeActionButtons;