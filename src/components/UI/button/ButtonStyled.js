import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background:var(--black);
  padding: 0.8rem 1rem;
  outline: none;
  border: 1px solid var(--red);
  border-radius: 8px;
  color: var(--dark-beige);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--red);
    transition: all 0.3s ease-in-out;
  }
`;