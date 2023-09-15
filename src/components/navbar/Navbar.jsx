import React from 'react';
import { LinkContainer, Logo, NavbarStyled } from './NavbarStyled';
import { LinkItemStyled } from './LinkItem/LinkItemStyled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import { LinkItemPickStyled } from './LinkItemPick/LinkItemPickStyled';
import BarsMenu from './BarsMenu/BarsMenu';
const Navbar = () => {
  const navigate = useNavigate();
  const ctx = useContext(MenuContext);
  return (
    <NavbarStyled>
      <Logo onClick={() => navigate('/')}>BLACK VELVET</Logo>
      <LinkContainer isOpen={ctx.isMenuOpen} >
        <LinkItemStyled to="/">Inicio</LinkItemStyled>
        <LinkItemStyled to="Products">Productos</LinkItemStyled>
        <LinkItemStyled to="Contact">Contacto</LinkItemStyled>
        <LinkItemPickStyled to="https://api.whatsapp.com/send?phone=5491164072744&text=Hola!">Hacer pedido</LinkItemPickStyled>
      </LinkContainer>
      <BarsMenu />
    </NavbarStyled> 
  );
};


export default Navbar;
