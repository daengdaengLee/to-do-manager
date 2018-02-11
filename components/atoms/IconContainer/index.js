import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

function IconContainer({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

IconContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default IconContainer;