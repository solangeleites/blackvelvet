import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../context/Context';
import  {ToggleContainer, Icon} from '../../../components/navbar/barsMenu/BarsMenuStyled'


const BarsMenu = () => {
  const ctx = useContext(MenuContext);
  return (
    <ToggleContainer onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen} />
    </ToggleContainer>
  );
};

export default BarsMenu;
