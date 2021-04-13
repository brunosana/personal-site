import styled, { css } from 'styled-components';

import { Link, LinkProps } from 'react-router-dom';

interface MenuItemProps extends LinkProps {
    isActive: boolean;
}

export const MenuBar = styled.div`
    margin-top: 40px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
`;

export const StyledLink = styled(Link)<MenuItemProps>`
    text-decoration: none;
    transition: color 0.2s;
    ${props => props.isActive &&  css` color: #FFF;`}
    &:hover {
        color: white;
        cursor: pointer;
    }
    &:nth-child(n-1){
        margin-left: 15px;
    }
`;