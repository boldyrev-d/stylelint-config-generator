import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BasicButton from './BasicButton';
import { resetConfig } from '../AC';
import { media } from '../style-utils';
import { DISPLAY_CONFIG, DISPLAY_OPTIONS } from '../constants';

const Section = styled.section`
  flex-basis: ${props => (props.mode === DISPLAY_OPTIONS ? '50%' : '100%')};
  padding: 30px 50px;
  margin-right: ${props => (props.mode === DISPLAY_OPTIONS ? '20px' : '0')};
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

const Config = (props) => {
  // console.log(this.props.config);
  const configObject = JSON.stringify(props.config, null, 4);

  const resetButton =
    props.mode === DISPLAY_CONFIG
      ? <BasicButton onClick={props.resetConfig}>Reset</BasicButton>
      : null;

  return (
    <Section mode={props.mode}>
      <Title>Your config:</Title>
      <Code>
        {configObject}
      </Code>
      {resetButton}
    </Section>
  );
};

Config.propTypes = {
  // from connect
  config: PropTypes.shape({
    extends: PropTypes.string.isRequired,
    rules: PropTypes.shape({}),
  }).isRequired,
  mode: PropTypes.string.isRequired,
  resetConfig: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    config: state.config,
    mode: state.mode,
    currentStep: state.currentStep,
  }),
  { resetConfig },
)(Config);
