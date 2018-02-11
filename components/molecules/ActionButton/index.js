import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../../atoms/Button';
import IconContainer from '../../atoms/IconContainer';
import MyText from '../../atoms/MyText';

function ActionButton({ icon, eventFunc }) {
  return (
    <Button ownEvent={{ onPressOut: eventFunc }}>
      <IconContainer>
        <MyText>
          {icon}
        </MyText>
      </IconContainer>
    </Button>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  eventFunc: PropTypes.func.isResquired,
};

export default ActionButton;