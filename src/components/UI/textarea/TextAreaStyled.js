import styled from "styled-components";

export const TextAreaStyle = styled.textarea`
  border: 1px solid var(--dark-beige);
  border-color: ${({ error }) => (error ? "#902923" : "#B9BAA3")};
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  resize: none;
  background: transparent;
  outline: none;
  color: var(--dark-beige);
  font-family: 'Popins', sans-serif;
`;
export const Error = styled.span`
   padding-left: 5px;
  color: var(--red);
  font-size: 12px;
  font-weight: 500;
`;