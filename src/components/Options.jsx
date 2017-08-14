import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Variant from './Variant';

const Section = styled.section`
  flex-basis: 50%;
  padding: 30px 50px;
  background-color: #fff;
  color: #444;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 20px;
`;

const Options = (props) => {
  const rule = props.rules[props.currentStep];

  /* eslint-disable react/no-array-index-key */
  const variants = rule.variants.map((variant, index) => <Variant key={index} variant={variant} />);
  /* eslint-enable react/no-array-index-key */

  return (
    <Section>
      <Title>Choose the code sample you prefer:</Title>
      {variants}
      <button disabled="disabled">Back</button>
      <button>Skip</button>
    </Section>
  );
};

Options.propTypes = {
  // from connect
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.string.isRequired,
          hint: PropTypes.string.isRequired,
          value: PropTypes.oneOfType([PropTypes.bool]).isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default connect(state => ({
  rules: state.rules,
  currentStep: state.currentStep,
}))(Options);
