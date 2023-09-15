import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemPickStyled = styled(NavLink)`
  color: #d6d5c9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  background-color: var(--red);
`;
