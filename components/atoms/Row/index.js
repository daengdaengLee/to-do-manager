import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function Row({ children }) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Row;