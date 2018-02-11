import React from 'react';

const withConditionRender = conditionFunc => FalseComp => TrueComp => props => conditionFunc(props)
  ? <TrueComp {...props.trueProps} /> : <FalseComp {...props.falseProps} />;

export default withConditionRender;