import { useEffect } from 'react';
import { reatomComponent } from '@reatom/react';
import { styled } from 'styled-components';
import BasicButton from './BasicButton';
import { DISPLAY_CONFIG, DISPLAY_OPTIONS, type Mode } from '../constants';
import { config, mode, resetConfig } from '../state';
import { media } from '../style-utils';

const Section = styled.section<{ $mode: Mode }>`
  flex-basis: ${({ $mode }) => ($mode === DISPLAY_OPTIONS ? '50%' : '100%')};
  padding: 30px 50px;
  margin-right: ${({ $mode }) => ($mode === DISPLAY_OPTIONS ? '20px' : '0')};
  color: #444;
  background-color: #fff;

  ${media.tablet`
    margin-right: 0;
  `};

  ${media.mobile`
    padding: 15px 20px;
  `};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Code = styled.pre`
  font-family: 'Inconsolata', monospace;
  overflow: auto;
  word-wrap: normal;
  white-space: pre;
`;

const Config = reatomComponent(function Config() {
  const currentMode = mode();
  const configObject = JSON.stringify(config(), null, 4);

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (mode() === DISPLAY_CONFIG && ev.key === 'r') {
        ev.preventDefault();
        resetConfig();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const resetButton = currentMode === DISPLAY_CONFIG ? (
    <BasicButton onClick={resetConfig}>Reset</BasicButton>
  ) : null;

  return (
    <Section $mode={currentMode}>
      <Title>Your config:</Title>
      <Code>{configObject}</Code>
      {resetButton}
    </Section>
  );
}, 'Config');

export default Config;
