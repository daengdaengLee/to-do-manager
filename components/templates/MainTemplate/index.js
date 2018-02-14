import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyView from '../../atoms/MyView';
import MyStatusBar from '../../atoms/MyStatusBar';
import MyAppLoading from '../../atoms/MyAppLoading';

function MainTemplate({ mainTitle, mainContent, isLoading }) {
  if(isLoading) return <MyAppLoading />;
  return (
    <MyView styleNames={['toDoAppContainer']}>
      <MyStatusBar />
      {mainTitle}
      {mainContent}
    </MyView>
  );
}

MainTemplate.propTypes = {
  mainTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  mainContent: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MainTemplate;