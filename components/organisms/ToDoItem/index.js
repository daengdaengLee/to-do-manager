import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyView from '../../atoms/MyView';
import CompleteButton from '../../molecules/CompleteButton';
import ToDoTextField from '../../molecules/ToDoTextField';
import ActionButtons from '../../molecules/ActionButtons';

function ToDoItem({
  id,
  isCompleted,
  toggleComplete,
  isEditing,
  toDoItem,
  controlInput,
  finishEditing,
  startEditing,
  deleteItem,
}) {
  return (
    <MyView styleNames={['row', 'toDoItemRow']}>
      <MyView styleNames={['toDoItemFirstColumn']}>
        <CompleteButton isCompleted={isCompleted} eventFunc={toggleComplete} />
        <ToDoTextField
          isEditing={isEditing}
          trueProps={{
            isCompleted: isCompleted,
            toDoValue: toDoItem,
            controlInput: controlInput,
            finishEditing: finishEditing,
          }}
          falseProps={{
            isCompleted: isCompleted,
            toDoText: toDoItem,
          }}
        />
      </MyView>
      <ActionButtons
        isEditing={isEditing}
        trueProps={{ finishEditing }}
        falseProps={{ startEditing, deleteItem }}
      />
    </MyView>
  );
}

ToDoItem.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  toDoItem: PropTypes.string.isRequired,
  controlInput: PropTypes.func.isRequired,
  finishEditing: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ToDoItem;