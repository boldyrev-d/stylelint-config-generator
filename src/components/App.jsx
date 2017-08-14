import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px 0;
`;

const Main = styled.main`display: flex;`;

const App = () =>
  (<Wrapper>
    <Header />
    <Main>
      <div />
    </Main>
    <Footer />
  </Wrapper>);

export default App;
