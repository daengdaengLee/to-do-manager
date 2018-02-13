import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuidv1 from 'uuid/v1';

import InputToDo from './components/molecules/InputToDo';
import ToDoList from './components/organisms/ToDoList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newToDo: '',
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
    this._deleteItem = this._deleteItem.bind(this);
    this._controlNewToDo = this._controlNewToDo.bind(this);
    this._addToDo = this._addToDo.bind(this);
  }

  render() {
    const { _toggleComplete, _deleteItem, _updateToDo, _controlNewToDo, _addToDo } = this;
    const { toDos, newToDo } = this.state;
    return (
      <View style={styles.container}>
        <InputToDo
          newToDo={newToDo}
          onChangeText={_controlNewToDo}
          onSubmitEditing={_addToDo}
        />
        <ToDoList
          toDos={toDos}
          toggleComplete={_toggleComplete}
          deleteItem={_deleteItem}
          updateToDo={_updateToDo}
        />
      </View>
    );
  }
  
  _toggleComplete(id) {
    this.setState(prevState => ({
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: !prevState.toDos[id].isCompleted,
          },
        },
      })
    );
  }

  _deleteItem(id) {
    this.setState(prevState => {
      const toDos = { ...prevState.toDos };
      delete toDos[id];
      return { toDos };
    });
  }

  _updateToDo(id, text) {
    this.setState(prevState => ({
      toDos: {
        ...prevState.toDos,
        [id]: {
          ...prevState.toDos[id],
          text,
        },
      },
    }));
  }

  _controlNewToDo(text) {
    this.setState({
      newToDo: text,
    });
  }

  _addToDo() {
    const { newToDo } = this.state;
    if(newToDo !== '') {
      this.setState(prevState => {
        const ID = uuidv1();
        return {
          ...prevState,
          newToDo: '',
          toDos: {
            ...prevState.toDos,
            [ID]: {
              id: ID,
              isCompleted: false,
              text: newToDo,
              createdAt: Date.now(),
            },
          },
        };
      });
    }
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});
