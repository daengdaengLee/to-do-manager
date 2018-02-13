import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyScrollView from '../../atoms/MyScrollView';
import ToDoItem from '../ToDoItem';

function ToDoList({ toDos, toggleComplete, deleteItem, updateToDo }) {
  return (
    <MyScrollView styleNames={['toDos']}>
      {Object.values(toDos).reverse().map(toDo => <ToDoItem
        {...toDo}
        key={toDo.id}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
        updateToDo={updateToDo}
      />)}
    </MyScrollView>
  );
}

ToDoList.propTypes = {
  toDos: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired,
};

export default ToDoList;