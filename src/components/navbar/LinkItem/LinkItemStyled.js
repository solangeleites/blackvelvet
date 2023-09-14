import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemStyled = styled(NavLink)`
  color: #D6D5C9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &.active {
    font-weight: 600;
    color: white;
  }

  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #D6D5C9;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:focus::after,
  &:active::after {
    transform-origin: bottom right;
    transform: scaleX(1);
  }
`;
