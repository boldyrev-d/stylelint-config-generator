import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
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

class Options extends Component {
  static propTypes = {
    // from connect
    rules: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      hint: PropTypes.string,
      variants: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string,
        invalidCode: PropTypes.string,
        validCode: PropTypes.string,
        hint: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
      })).isRequired,
    })).isRequired,
    currentStep: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    skipStep: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (ev) => {
    if (ev.key === 'ArrowRight') {
      ev.preventDefault();
      this.props.skipStep(this.props.rules[this.props.currentStep].id);
    }

    if (ev.key === 'ArrowLeft') {
      ev.preventDefault();
      this.props.prevStep();
    }
  };

  render() {
    const { rules, currentStep } = this.props;
    const rule = rules[currentStep];

    /* eslint-disable react/no-array-index-key */
    const variants = rule.variants.map((variant, index) => (
      <Variant key={index} variant={variant} id={rule.id} nextStep={this.props.nextStep} />
    ));
    /* eslint-enable react/no-array-index-key */

    const backButtonDisabled = !currentStep;

    return (
      <Section>
        <Title>Choose the rule variant you like more:</Title>
        {rule.hint && <p>{renderHTML(rule.hint)}</p>}
        {variants}
        <BasicButton disabled={backButtonDisabled} onClick={this.props.prevStep}>
          Back
        </BasicButton>
        <BasicButton onClick={() => this.props.skipStep(rule.id)}>Skip</BasicButton>
        <Pagination>
          Rule {currentStep + 1} of {rules.length}
        </Pagination>
      </Section>
    );
  }
}

export default connect(
  state => ({
    rules: state.get('rules'),
    currentStep: state.get('currentStep'),
  }),
  { nextStep, prevStep, skipStep },
)(Options);
