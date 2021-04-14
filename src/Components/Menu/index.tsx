import React, { useState, useCallback } from 'react';

import { MenuBar,StyledLink } from './styles';

const Menu: React.FC = () => {

    const [activeMenuItem, setActiveMenuItem] = useState<Array<boolean>>([true, false, false, false]);

    const handleChangeActiveMenuItem = useCallback((id: number) => {
        let defaultVector = [false, false, false, false];
        defaultVector[id] = true; 
        setActiveMenuItem(defaultVector);
    },[])

    return (
        <MenuBar>
            <StyledLink isActive={activeMenuItem[0]} to="/" onClick={() => handleChangeActiveMenuItem(0)}>Home</StyledLink>
            <StyledLink isActive={activeMenuItem[1]} to="/about" onClick={() => handleChangeActiveMenuItem(1)}>About</StyledLink>
            <StyledLink isActive={activeMenuItem[2]} to="/portifolio" onClick={() => handleChangeActiveMenuItem(2)}>Portifolio</StyledLink>
            <StyledLink isActive={activeMenuItem[3]} to="/social" onClick={() => handleChangeActiveMenuItem(3)}>Social</StyledLink>
        </MenuBar>
    );
}

export default Menu;