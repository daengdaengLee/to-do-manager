import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button({ children, ownEvent }) {
  return (
    <TouchableOpacity {...ownEvent}>
      {children}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.object.isRequired,
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Button;