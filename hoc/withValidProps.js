import React from 'react';

const withValidProps = validator => Comp => props => {
  const validProps = validator(props);
  return <Comp {...validProps} />;
}

export default withValidProps;