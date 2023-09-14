import React from 'react';
import { LinkContainer, Logo, NavbarStyled } from './NavbarStyled';
import { LinkItemStyled } from './LinkItem/LinkItemStyled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../context/Context';

const Navbar = () => {
  const navigate = useNavigate();
  const ctx = useContext(MenuContext);
  return (
    <NavbarStyled>
      <Logo onClick={() => navigate('/')}>BLACK VELVET</Logo>
      <LinkContainer >
        <LinkItemStyled to="/">Inicio</LinkItemStyled>
        <LinkItemStyled to="Products">Productos</LinkItemStyled>
        <LinkItemStyled to="Contact">Contacto</LinkItemStyled>
        <LinkItemStyled to="https://api.whatsapp.com/send?phone=5491164072744&text=Hola!" style={{height:'40px', width:'150px',borderRadius:'20px' , background:'var(--red)'}}>Hacer pedido</LinkItemStyled>
      </LinkContainer>
    </NavbarStyled> 
  );
};


// isOpen={ctx.isMenuOpen} agregar esto al link container
export default Navbar;
