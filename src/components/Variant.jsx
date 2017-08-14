import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderHTML from 'react-render-html';

const Item = styled.div`
  padding: 0 20px;
  border: 2px solid crimson;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Code = styled.pre`
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Inconsolata', monospace;
  background-color: rgba(68, 68, 68, 0.05);
`;

const Variant = props =>
  (<Item onClick={() => props.nextStep(props.id, props.variant.value)}>
    <p>
      {props.variant.hint}
    </p>
    <Code>
      {renderHTML(props.variant.code)}
    </Code>
  </Item>);

Variant.propTypes = {
  variant: PropTypes.shape({
    code: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool]).isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Variant;
