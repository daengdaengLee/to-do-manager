import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import utils
import filterStyles from '../../../utils/filterStyles';
import validateStyleNames from '../../../utils/validateStyleNames';

// define validator function
const validatorForStyleNames = validateStyleNames(['circle', 'completedCircle', 'uncompletedCircle', 'iconContainer', 'row', 'toDoItemRow', 'toDoItemFirstColumn', 'toDosCard', 'toDoAppContainer']);

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
  toDosCard: {
    backgroundColor: '#FFFFFF', // white
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#323232',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  toDoAppContainer: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
});

const MyView = withValidProps(validatorForStyleNames)(MyViewTemp);

MyView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  styleNames: PropTypes.arrayOf(PropTypes.string),
};

export default MyView;