import type { ReactElement } from 'react';
import { styled } from 'styled-components';
import type { RuleValue, Variant as RuleVariant } from '../rules';

const renderHTML = (html: string) => <span dangerouslySetInnerHTML={{ __html: html }} />;

const Item = styled.button`
  display: block;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: left;
  line-height: inherit;
  background: transparent;
  border: 2px solid crimson;
  transition: box-shadow 0.2s ease;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:focus {
    outline: none;
    box-shadow: 0 2px 2px crimson, -2px 2px 2px crimson, 2px 2px 2px crimson;
  }

  &:hover {
    box-shadow: 0 2px 2px crimson, -2px 2px 2px crimson, 2px 2px 2px crimson;
    cursor: pointer;
  }
`;

const Hint = styled.h3`
  margin: 1rem 0;
  font-size: 17px;
  font-weight: bold;
`;

const Code = styled.pre`
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Inconsolata', monospace;
  background-color: rgba(68, 68, 68, 0.05);
  overflow-x: auto;
`;

const InvalidCode = styled(Code)`
  background-color: rgba(237, 20, 61, 0.05);
`;

const ValidCode = styled(Code)`
  background-color: rgba(144, 238, 144, 0.2);
`;

type VariantProps = {
  id: string;
  variant: RuleVariant;
  nextStep: (id: string, value: RuleValue) => void;
};

const renderCode = ({ code, invalidCode, validCode }: RuleVariant): ReactElement => {
  if (code) {
    return <Code>{renderHTML(code)}</Code>;
  }

  return (
    <section>
      {invalidCode && (
        <div>
          <p>The following patterns are considered violations:</p>
          <InvalidCode>{renderHTML(invalidCode)}</InvalidCode>
        </div>
      )}

      {validCode && (
        <div>
          <p>The following patterns are not considered violations:</p>
          <ValidCode>{renderHTML(validCode)}</ValidCode>
        </div>
      )}
    </section>
  );
};

const Variant = ({ id, variant, nextStep }: VariantProps) => (
  <Item onClick={() => nextStep(id, variant.value)}>
    <Hint>{variant.hint}</Hint>
    {renderCode(variant)}
  </Item>
);

export default Variant;
