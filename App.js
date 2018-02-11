import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionButton from './components/ActionButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.test}>
          <ActionButton content="✏️" ownEvent={{ onPress: () => console.log('test sleeppppyyppy edit') }} />
          <ActionButton content="❌" ownEvent={{ onPress: () => console.log('test sleeppppyyppy delete') }} />
          <ActionButton content="✅" ownEvent={{ onPress: () => console.log('test sleeppppyyppy finishEditing') }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  test: {
    flexDirection: 'row',
  },
});
