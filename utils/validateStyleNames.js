const validateStyleNames = validStyleNames => beforeProps => {
  if(!beforeProps.styleNames) return { ...beforeProps, styleNames: [] };
  return {
    ...beforeProps,
    styleName: beforeProps.styleNames.filter(styleName => validStyleNames.includes(styleName))
  };
};

export default validateStyleNames;