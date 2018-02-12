/**
 * styleNames prop 이 있는 Component 의 경우 styleNames 배열 중 올바르지 않은 styleName 들을 걸러낸다.
 */

import React from 'react';

// validStyleNames: 올바른 styleName(string) 들을 담고 있는 배열
const withInvalidStyleNames = validStyleNames => Comp => props => {
  const filterdStyleNames = props.styleNames.filter(styleName => validStyleNames.indexOf(styleName) !== -1);
  const exceptStyleNamesProps = { ...props };
  delete exceptStyleNamesProps.styleNames;
  return <Comp styleNames={filterdStyleNames} {...exceptStyleNamesProps} />;
};

export default withInvalidStyleNames;