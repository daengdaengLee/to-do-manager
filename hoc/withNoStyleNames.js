import React from 'react';

const withNoStyleNames = Comp => props => {
  if(!props.styleNames) return <Comp styleNames={['no style names']} {...props} />
  return <Comp {...props} />
};

export default withNoStyleNames;