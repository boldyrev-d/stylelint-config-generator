import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Config from './Config';
import Options from './Options';
import store from '../store';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 0;
`;

const Main = styled.main`display: flex;`;

const App = () =>
  (<Provider store={store}>
    <Wrapper>
      <Header />
      <Main>
        <Config />
        <Options />
      </Main>
      <Footer />
    </Wrapper>
  </Provider>);

export default App;
