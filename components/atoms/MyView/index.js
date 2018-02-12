import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withNoStyleNames from '../../../hoc/withNoStyleNames';
import withInvalidStyleNames from '../../../hoc/withInvalidStyleNames';

// import utils
import filterStyles from '../../../utils/filterStyles';

const { width } = Dimensions.get('window');

function MyView({ children, styleNames }) {
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

MyView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  styleNames: PropTypes.arrayOf(PropTypes.string),
};

export default withNoStyleNames(withInvalidStyleNames(['circle', 'completedCircle', 'uncompletedCircle', 'iconContainer', 'row', 'toDoItemRow', 'toDoItemFirstColumn'])(MyView));