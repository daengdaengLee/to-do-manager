import React from 'react';
import PropTypes from 'prop-types';

const withButtonContent = (ButtonComp, ContentComp) => {
  const EnhancedButton = ({ buttonProps, contentProps }) => (
    <ButtonComp {...buttonProps}>
      <ContentComp {...contentProps} />
    </ButtonComp>
  );
  EnhancedButton.propTypes = {
    buttonProps: PropTypes.object,
    contentProps: PropTypes.object,
  };
  return EnhancedButton;
};

withButtonContent.propTypes = {
  ButtonComp: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  ContentComp: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default withButtonContent;