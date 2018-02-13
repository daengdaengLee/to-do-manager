import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyView from '../../atoms/MyView';
import InputToDo from '../../molecules/InputToDo';
import ToDoList from '../ToDoList';

function ToDosCard({
  newToDo,
  onChangeText,
  onSubmitEditing,
  toDos,
  toggleComplete,
  deleteItem,
  updateToDo,
}) {
  return (
    <MyView styleNames={['toDosCard']}>
      <InputToDo
        newToDo={newToDo}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <ToDoList
        toDos={toDos}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
        updateToDo={updateToDo}
      />
    </MyView>
  );
}

ToDosCard.propTypes = {
  newToDo: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  toDos: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired,
};

export default ToDosCard;