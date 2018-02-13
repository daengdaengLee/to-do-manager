import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ToDoItem from './components/organisms/ToDoItem';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDos: {
        testToDo1: {
          id: 'testToDo1',
          text: 'this is an example to-do-item 1.',
          isCompleted: false,
        },
        testToDo2: {
          id: 'testToDo2',
          text: 'this is an example to-do-item 2',
          isCompleted: false,
        }
      },
    };
    this._toggleComplete = this._toggleComplete.bind(this);
    this._updateToDo = this._updateToDo.bind(this);
  }

  render() {
    const { _toggleComplete, _deleteItem, _updateToDo } = this;
    const { toDos } = this.state;
    return (
      <View style={styles.container}>
        {Object.values(toDos).reverse().map(toDo => <ToDoItem
          {...toDo}
          toggleComplete={_toggleComplete}
          deleteItem={_deleteItem}
          updateToDo={_updateToDo}
          key={id}
        />)}
      </View>
    );
  }
  
  _toggleComplete(id) {
    this.setState(prevState => {
      const toDos = {
        ...prevState.toDos,
        [id]: {
          ...prevState.toDos[id],
          isCompleted: !prevState.toDos[id].isCompleted,
        },
      };
      return { toDos };
    });
  }

  _deleteItem(id) {
    alert(`Delete ${id} To Do?`);
  }

  _updateToDo(id, text) {
    this.setState(prevState => {
      const toDos = {
        ...prevState.toDos,
        [id]: {
          ...prevState.toDos[id],
          text,
        },
      };
      return { toDos };
    });
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});
