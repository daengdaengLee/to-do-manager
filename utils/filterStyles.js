function filterStyles(styleNames, styleObj) {
  return styleNames.map(styleName => styleObj[styleName]);
}

export default filterStyles;