import React from 'react';
import { Text } from 'react-native';

import Button from '../Button';
import CompleteButtonContent from '../CompleteButtonContent';

function CompleteButton() {
  return (
    <Button ownEvent={{ onPress: () => console.log('test')}} >
      <CompleteButtonContent isCompleted={false} />
    </Button>
  );
}

export default CompleteButton;