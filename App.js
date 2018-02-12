import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButton from './components/molecules/ActionButton';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false, isCompleted: false, toDoItem: 'to do item' };
    this._finishEditing = this._finishEditing.bind(this);
    this._startEditing = this._startEditing.bind(this);
    this._toggleComplete = this._toggleComplete.bind(this);
    this._controlInput = this._controlInput.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
  }

  _finishEditing() {
    this.setState({ isEditing: false });
  }

  _startEditing() {
    this.setState({ isEditing: true });
  }

  _deleteItem() {
    this.setState({ toDoItem: 'deleted!' })
  }

  _toggleComplete() {
    this.setState((prevState) => ({ isCompleted: !prevState.isCompleted }));
  }

  _controlInput(text) {
    this.setState({
      toDoItem: text,
    })
  }

  render() {
    const { isEditing, isCompleted, toDoItem } = this.state;
    const { _finishEditing, _startEditing, _deleteItem, _toggleComplete, _controlInput } = this;
    return (
      <View style={styles.container}>
        <ActionButton
          icon="❌"
          eventFunc={() => alert('event func')}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});
