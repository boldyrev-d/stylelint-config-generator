import { styled } from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
`;

const LogoImage = styled.div<{ $src: string }>`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-image: url(${({ $src }) => $src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Footer = () => (
  <Wrapper>
    <Logo
      href="https://github.com/boldyrev-d/stylelint-config-generator"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stylelint Config Generator at GitHub"
      title="Stylelint Config Generator at GitHub"
    >
      <LogoImage $src="./github-logo.svg" />
    </Logo>
  </Wrapper>
);

export default Footer;
