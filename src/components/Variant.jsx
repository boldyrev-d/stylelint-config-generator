import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderHTML from 'react-render-html';

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

const InvalidCode = Code.extend`
  background-color: rgba(237, 20, 61, 0.05);
`;

const ValidCode = Code.extend`
  background-color: rgba(144, 238, 144, 0.2);
`;

const Variant = (props) => {
  const {
    variant: {
      code, invalidCode, validCode, value, hint,
    },
  } = props;

  const codeComponent = code ? (
    <Code>
      {renderHTML(code)}
    </Code>
  ) : (
    <section>
      {invalidCode && (
        <div>
          <p>
The following patterns are considered violations:
          </p>
          <InvalidCode>
            {renderHTML(invalidCode)}
          </InvalidCode>
        </div>
      )}

      {validCode && (
        <div>
          <p>
The following patterns are not considered violations:
          </p>
          <ValidCode>
            {renderHTML(validCode)}
          </ValidCode>
        </div>
      )}
    </section>
  );

  return (
    <Item onClick={() => props.nextStep(props.id, value)}>
      <Hint>
        {hint}
      </Hint>
      {codeComponent}
    </Item>
  );
};

Variant.propTypes = {
  variant: PropTypes.shape({
    code: PropTypes.string,
    invalidCode: PropTypes.string,
    validCode: PropTypes.string,
    hint: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Variant;
