import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Section = styled.section`
  flex-basis: ${props => (props.mode === 'displayOptions' ? '50%' : '100%')};
  padding: 30px 50px;
  margin-right: ${props => (props.mode === 'displayOptions' ? '20px' : '0')};
  color: #444;
  background-color: #fff;
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

  return (
    <Section mode={props.mode}>
      <Title>Your config:</Title>
      <Code>
        {configObject}
      </Code>
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
};

export default connect(state => ({
  config: state.config,
  mode: state.mode,
}))(Config);
