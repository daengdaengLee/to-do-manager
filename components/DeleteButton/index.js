import React from 'react';

import Button from '../Button';
import DeleteButtonContent from '../DeleteButtonContent';

function DeleteButton() {
  return (
    <Button ownEvent={{ onPress: () => console.log('test hi') }}>
      <DeleteButtonContent />
    </Button>
  );
}

export default DeleteButton;