import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../../atoms/Button';
import MyView from '../../atoms/MyView';
import MyText from '../../atoms/MyText';

function ActionButton({ icon, eventFunc }) {
  return (
    <Button ownEvent={{ onPressOut: eventFunc }}>
      <MyView styleNames={['iconContainer']}>
        <MyText>
          {icon}
        </MyText>
      </MyView>
    </Button>
  );
}

ActionButton.propTypes = {
  eventFunc: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ActionButton;