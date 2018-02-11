import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

function MyText({ children }) {
  return (
    <Text>
      {children}
    </Text>
  );
}

MyText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MyText;