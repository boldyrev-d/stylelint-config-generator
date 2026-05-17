import 'normalize.css';
import { reatomComponent } from '@reatom/react';
import { styled } from 'styled-components';
import Config from './Config';
import Footer from './Footer';
import Header from './Header';
import Options from './Options';
import { DISPLAY_OPTIONS } from '../constants';
import { mode } from '../state';
import { media } from '../style-utils';

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

const App = reatomComponent(function App() {
  const optionsComponent = mode() === DISPLAY_OPTIONS ? <Options /> : null;

  return (
    <Wrapper>
      <Header />
      <Main id="config">
        <Config />
        {optionsComponent}
      </Main>
      <Footer />
    </Wrapper>
  );
}, 'App');

export default App;
