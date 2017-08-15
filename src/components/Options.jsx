import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Variant from './Variant';
import BasicButton from './BasicButton';
import { media } from '../style-utils';
import { nextStep, prevStep, skipStep } from '../AC';

const Section = styled.section`
  flex-basis: 50%;
  padding: 30px 50px;
  background-color: #fff;
  color: #444;

  ${media.tablet`
    order: -1;
    margin-bottom: 30px;
  `};

  ${media.mobile`
    padding: 15px 20px;
  `};
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 20px;
`;

const Pagination = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const Options = (props) => {
  const { rules, currentStep } = props;
  const rule = rules[currentStep];

  /* eslint-disable react/no-array-index-key */
  const variants = rule.variants.map((variant, index) =>
    <Variant key={index} variant={variant} id={rule.id} nextStep={props.nextStep} />,
  );
  /* eslint-enable react/no-array-index-key */

  const backButtonDisabled = !currentStep;

  return (
    <Section>
      <Title>Choose the code sample you prefer:</Title>
      {variants}
      <BasicButton disabled={backButtonDisabled} onClick={props.prevStep}>
        Back
      </BasicButton>
      <BasicButton onClick={props.skipStep}>Skip</BasicButton>
      <Pagination>
        Page {currentStep + 1} of {rules.length}
      </Pagination>
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
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  skipStep: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    rules: state.rules,
    currentStep: state.currentStep,
  }),
  { nextStep, prevStep, skipStep },
)(Options);
