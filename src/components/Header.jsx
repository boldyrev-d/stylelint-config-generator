import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`margin: 1.5rem 0 .5rem;`;

const Title = styled.h1`
  margin: 0 0 1rem;
  color: #fff;
  font-size: 24px;
`;

const Link = styled.a`
  color: crimson;
  text-decoration: none;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #fff;
`;

const Mark = styled.mark`
  color: #fff;
  background-color: crimson;
`;

const Header = () =>
  (<Wrapper>
    <Title>Stylelint Config Generator</Title>
    <Paragraph>
      <Link href="https://stylelint.io/">Stylelint</Link> is a modern CSS linter and fixer that
      helps you avoid errors and enforce consistent conventions in your stylesheets.
    </Paragraph>
    <Paragraph>
      Create your own configuration by either extending{' '}
      <Link href="https://github.com/stylelint/stylelint-config-standard">
        stylelint-config-standard
      </Link>.
    </Paragraph>
    <Paragraph>
      Step by step choose the rule variants you prefer and paste config object to{' '}
      <Mark>.stylelintrc</Mark>. Read more about it in{' '}
      <Link href="https://stylelint.io/user-guide/configuration/">docs</Link>.
    </Paragraph>
  </Wrapper>);

export default Header;
