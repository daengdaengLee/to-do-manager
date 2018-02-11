import React from 'react';

const withNoStyleNames = Comp => props => {
  if(!props.styleNames) return <Comp styleNames={[]} {...props} />
  return <Comp {...props} />
};

export default withNoStyleNames;