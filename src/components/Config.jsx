import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import BasicButton from './BasicButton';
import { resetConfig } from '../AC';
import { media } from '../style-utils';
import { DISPLAY_CONFIG, DISPLAY_OPTIONS } from '../constants';

const Section = styled.section`
  flex-basis: ${({ mode }) => (mode === DISPLAY_OPTIONS ? '50%' : '100%')};
  padding: 30px 50px;
  margin-right: ${({ mode }) => (mode === DISPLAY_OPTIONS ? '20px' : '0')};
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

class Config extends Component {
  static propTypes = {
    // from connect
    config: PropTypes.instanceOf(Map).isRequired,
    mode: PropTypes.string.isRequired,
    resetConfig: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (ev) => {
    // eslint-disable-next-line no-shadow
    const { mode, resetConfig } = this.props;

    if (mode === DISPLAY_CONFIG && ev.key === 'r') {
      ev.preventDefault();
      resetConfig();
    }
  };

  render() {
    // eslint-disable-next-line no-shadow
    const { config, mode, resetConfig } = this.props;

    const configObject = JSON.stringify(config, null, 4);

    const resetButton = mode === DISPLAY_CONFIG ? (
      <BasicButton onClick={resetConfig}>
Reset
      </BasicButton>
    ) : null;

    return (
      <Section mode={mode}>
        <Title>
Your config:
        </Title>
        <Code>
          {configObject}
        </Code>
        {resetButton}
      </Section>
    );
  }
}

export default connect(
  state => ({
    config: state.get('config'),
    mode: state.get('mode'),
  }),
  { resetConfig },
)(Config);
