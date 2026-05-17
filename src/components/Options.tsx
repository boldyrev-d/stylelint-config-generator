import { useEffect } from 'react';
import { reatomComponent } from '@reatom/react';
import { styled } from 'styled-components';
import BasicButton from './BasicButton';
import Variant from './Variant';
import { currentStep, nextStep, prevStep, rules, skipStep } from '../state';
import { media } from '../style-utils';

const renderHTML = (html: string) => <span dangerouslySetInnerHTML={{ __html: html }} />;

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

const Options = reatomComponent(function Options() {
  const step = currentStep();
  const rule = rules[step];

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'ArrowRight') {
        ev.preventDefault();
        const currentRule = rules[currentStep()];
        if (currentRule) skipStep(currentRule.id);
      }

      if (ev.key === 'ArrowLeft') {
        ev.preventDefault();
        prevStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!rule) return null;

  const variants = rule.variants.map(variant => (
    <Variant key={`${rule.id}-${variant.value}`} variant={variant} id={rule.id} nextStep={nextStep} />
  ));
  const backButtonDisabled = step === 0;

  return (
    <Section>
      <Title>Choose the rule variant you like more:</Title>
      {rule.hint && <p>{renderHTML(rule.hint)}</p>}
      {variants}
      <BasicButton disabled={backButtonDisabled} onClick={prevStep}>
        Back
      </BasicButton>
      <BasicButton onClick={() => skipStep(rule.id)}>Skip</BasicButton>
      <Pagination>
        Rule {step + 1} of {rules.length}
      </Pagination>
    </Section>
  );
}, 'Options');

export default Options;
