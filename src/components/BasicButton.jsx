import styled from 'styled-components';

const BasicButton = styled.button`
  padding: 8px 15px;
  font-size: 16px;
  color: ${props => (props.disabled ? '#666' : '#fff')};
  background-color: ${props => (props.disabled ? '#ccc' : 'crimson')};
  border: none;
  cursor: ${props => (props.disabled ? '#auto' : 'pointer')};
  transition: background-color .2s ease;

  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#c20b2b')};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default BasicButton;
