import styled from 'styled-components';

const BasicButton = styled.button`
  padding: 8px 15px;
  font-size: 16px;
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : 'crimson')};
  border: none;
  cursor: ${({ disabled }) => (disabled ? '#auto' : 'pointer')};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#c20b2b')};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default BasicButton;
