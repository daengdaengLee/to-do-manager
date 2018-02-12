import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyText from '../../atoms/MyText';

function NonEditingText({ isCompleted, toDoText }) {
  return (
    <MyText styleNames={['toDoItemText', isCompleted ? 'completedText' : 'uncompletedText']}>
      {toDoText}
    </MyText>
  );
}

NonEditingText.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  toDoText: PropTypes.string.isRequired,
};

export default NonEditingText;