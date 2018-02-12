import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import utils
import filterStyles from '../../../utils/filterStyles';
import validateStyleNames from '../../../utils/validateStyleNames';

// define validator function
const validatorForStyleNames = validateStyleNames(['circle', 'completedCircle', 'uncompletedCircle', 'iconContainer', 'row', 'toDoItemRow', 'toDoItemFirstColumn']);

const { width } = Dimensions.get('window');

function MyViewTemp({ children, styleNames }) {
  return (
    <View style={filterStyles(styleNames, styles)}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20,
  },
  completedCircle: {
    borderColor: '#BBBBBB',
  },
  uncompletedCircle: {
    borderColor: '#F23657',
  },
  iconContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  toDoItemRow: {
    width: width - 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#BBBBBB',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toDoItemFirstColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 2,
  },
});

const MyView = withValidProps(validatorForStyleNames)(MyViewTemp);

MyView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  styleNames: PropTypes.arrayOf(PropTypes.string),
};

export default MyView;