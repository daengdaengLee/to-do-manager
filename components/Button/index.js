import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

function Button({ content, ownEvent }) {
  return (
    <TouchableOpacity {...ownEvent}>
      {content}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  content: PropTypes.object.isRequired,
  ownEvent: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Button;