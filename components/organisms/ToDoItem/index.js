import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Components
import ToDoItemPresenter from './presenter';

// id, isCompleted, toggleComplete, deleteItem props 받아서 presenter Comp 에 그대로 전달
// text props 는 받아서 toDoItem state 에 할당
// updateToDo props 는 받아서 _finishEditing methods 내부에서 호출

class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      toDoItem: props.text,
    };
    this._startEditing = this._startEditing.bind(this);
    this._finishEditing = this._finishEditing.bind(this);
    this._controlInput = this._controlInput.bind(this);
  }

  render() {
    const { isEditing, toDoItem } = this.state;
    const { id, isCompleted, toggleComplete, deleteItem } = this.props;
    const presenterProps = {
      isEditing,
      toDoItem,
      id,
      isCompleted,
      toggleComplete,
      deleteItem,
      startEditing: this._startEditing,
      finishEditing: this._finishEditing,
      controlInput: this._controlInput,
    };
    return <ToDoItemPresenter {...presenterProps} />;
  }

  _startEditing() {
    this.setState({ isEditing: true });
  }

  _finishEditing() {
    const { toDoItem } = this.state;
    const { id, updateToDo } = this.props;
    updateToDo(id, toDoItem);
    this.setState({ isEditing: false });
  }

  _controlInput(text) {
    this.setState({ toDoItem: text });
  }

};

ToDoItem.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateToDo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;