import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EditButtonContent from './components/EditButtonContent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.test}>
          <EditButtonContent />
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
