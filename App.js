import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EditButton from './components/EditButton';
import DeleteButton from './components/DeleteButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.test}>
          <EditButton ownEvent={{ onPress: () => console.log('test sleeppppyyppy edit') }} />
          <DeleteButton ownEvent={{ onPress: () => console.log('test sleeppppyyppy delete') }} />
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
