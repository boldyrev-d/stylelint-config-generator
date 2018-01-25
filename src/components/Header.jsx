import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 1.5rem 0;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  color: #fff;
  font-size: 24px;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #fff;
`;

const Mark = styled.mark`
  color: #fff;
  background-color: crimson;
`;

const Link = styled.a`
  color: #fff;
  border-bottom: 1px solid #fff;
`;

const SkipLink = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 10px 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  background: crimson;
  color: #fff;
  text-align: center;
  font-weight: bold;

  &:focus,
  &:active,
  &:hover {
    clip: auto;
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
  }
`;

const Header = () => (
  <Wrapper>
    <div>
      <SkipLink href="#config" title="Skip description and move to config">
        Skip description
      </SkipLink>
    </div>
    <Title>Stylelint Config Generator</Title>
    <Paragraph>
      <Link href="https://stylelint.io/" title="Stylelint Home Page">
        Stylelint
      </Link>{' '}
      is a modern CSS linter and fixer that helps you avoid errors and enforce consistent
      conventions in your stylesheets.
    </Paragraph>
    <Paragraph>
      Create your own configuration by either extending{' '}
      <Link
        href="https://github.com/stylelint/stylelint-config-standard"
        title="stylelint-config-standard at GitHub"
      >
        stylelint-config-standard
      </Link>.
    </Paragraph>
    <Paragraph>
      Step by step choose the rule variants you prefer and paste config object to{' '}
      <Mark>.stylelintrc</Mark>. Read more about it in{' '}
      <Link href="https://stylelint.io/user-guide/configuration/" title="Stylelint User Guide">
        docs
      </Link>.
    </Paragraph>
  </Wrapper>
);

export default Header;
