import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function ButtonContent({ content }) {
  return (
    <View style={styles.buttonContainer}>
      <Text>
        {content}
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

ButtonContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ButtonContent;