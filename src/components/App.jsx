import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Config from './Config';
import Options from './Options';
import { media } from '../style-utils';
import { DISPLAY_OPTIONS } from '../constants';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 0;
`;

const Main = styled.main`
  display: flex;
  align-items: flex-start;

  ${media.tablet`
    flex-direction: column;
    align-items: stretch;
  `};
`;

const App = (props) => {
  const optionsComponent = props.mode === DISPLAY_OPTIONS ? <Options /> : null;

  return (
    <Wrapper>
      <Header />
      <Main>
        <Config />
        {optionsComponent}
      </Main>
      <Footer />
    </Wrapper>
  );
};

App.propTypes = {
  // from connect
  mode: PropTypes.string.isRequired,
};

export default connect(state => ({
  mode: state.get('mode'),
}))(App);
