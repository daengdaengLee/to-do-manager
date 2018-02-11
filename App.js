import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CompleteButton from './components/molecules/CompleteButton';
import ActionButtons from './components/molecules/ActionButtons';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this._finishEditing = this._finishEditing.bind(this);
    this._startEditing = this._startEditing.bind(this);
  }

  _finishEditing() {
    this.setState({ isEditing: false });
  }

  _startEditing() {
    this.setState({ isEditing: true });
  }

  _deleteItem() {
    console.log('delete item!');
  }

  render() {
    const { isEditing } = this.state;
    const { _finishEditing, _startEditing, _deleteItem } = this;
    return (
      <View style={styles.container}>
        <CompleteButton isCompleted={false} eventFunc={() => console.log('CompleteButton false')} />
        <CompleteButton isCompleted={true} eventFunc={() => console.log('CompleteButton true')} />
        <ActionButtons
          isEditing={isEditing}
          trueProps={{ finishEditing: _finishEditing }}
          falseProps={{ startEditing: _startEditing, deleteItem: _deleteItem }}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
