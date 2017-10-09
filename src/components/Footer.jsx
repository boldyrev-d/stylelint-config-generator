import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const Footer = () => (
  <Wrapper>
    <a
      href="https://github.com/boldyrev-d/stylelint-config-generator"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Logo src={`${PUBLIC_URL}/github.png`} alt="Stylelint Config Generator Page" />
    </a>
  </Wrapper>
);

export default Footer;
