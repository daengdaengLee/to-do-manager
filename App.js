import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyTextInput from './components/atoms/MyTextInput';

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
        <MyTextInput
          styleNames={['mainInput']}
          // placeholder={'New To DO'}
          // placeholderTextColor={'#999999'}
          value={'testadfafdsdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
        />
        <MyTextInput
          styleNames={['itemInput', 'uncompletedText']}
          value={'New To DO'}
        />
        <MyTextInput
          styleNames={['itemInput', 'completedText']}
          value={'New To DO'}
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
