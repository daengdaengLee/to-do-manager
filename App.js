import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DeleteButton from './components/DeleteButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.test}>
          <DeleteButton ownEvent={{ onPress: () => console.log('test hi') }} />
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
    flex: 1,
    flexDirection: 'row',
  },
});
