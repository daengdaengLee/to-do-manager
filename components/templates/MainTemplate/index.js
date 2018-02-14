import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MyView from '../../atoms/MyView';
import MyStatusBar from '../../atoms/MyStatusBar';
import MyAppLoading from '../../atoms/MyAppLoading';

function MainTemplate({ MainTitle, MainContent, isLoading }) {
  if(isLoading) return <MyAppLoading />;
  return (
    <MyView styleNames={['toDoAppContainer']}>
      <MyStatusBar />
      <MainTitle />
      <MainContent />
    </MyView>
  );
}

MainTemplate.propTypes = {
  MainTemplate: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  MainContent: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MainTemplate;