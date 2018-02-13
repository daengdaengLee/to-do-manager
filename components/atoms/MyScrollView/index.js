import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import utils
import filterStyles from '../../../utils/filterStyles';
import validateStyleNames from '../../../utils/validateStyleNames';

// define validator function
const validatorForStyleNames = validateStyleNames(['toDos']);

function MyScrollViewTemp({ children, styleNames }) {
  return (
    <ScrollView contentContainerStyle={filterStyles(styleNames, styles)}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  toDos: {
    alignItems: 'center',
  },
});

const MyScrollView = withValidProps(validatorForStyleNames)(MyScrollViewTemp);

MyScrollView.propTypes = {
  styleNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.string.isRequired,
};

export default MyScrollView;