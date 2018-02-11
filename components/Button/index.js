import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <TouchableOpacity>
      {children}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Button;