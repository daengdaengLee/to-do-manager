import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button({ content }) {
  return (
    <TouchableOpacity>
      {content}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Button;