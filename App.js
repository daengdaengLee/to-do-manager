import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import makeActionButtons from './hoc/makeActionButtons';
import ActionButton from './components/ActionButton';

const ActionButtons = makeActionButtons(
  () => <ActionButton content="✅" ownEvent={{ onPress: () => console.log('test sleeppppyyppy finishEditing') }} />,
  () => <ActionButton content="✏️" ownEvent={{ onPress: () => console.log('test sleeppppyyppy edit') }} />,
  () => <ActionButton content="❌" ownEvent={{ onPress: () => console.log('test sleeppppyyppy delete') }} />,
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <View style={styles.test}>
          <ActionButtons
            isEditing={false}
            finishEditing={() => console.log('finishEditing')}
            startEditing={() => console.log('startEditing')}
            deleteItem={() => console.log('deleteItem')}
          />
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
