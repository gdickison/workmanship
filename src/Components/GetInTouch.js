import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.li`
    padding: 16px 0;
    display: inline-block;
`;

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 16px;
    text-decoration: none;

    &:hover {
        background-color: #E5E5E5;
        color: #000000;
        cursor: pointer;
    }
`;

const NavMenu = styled.ul`
    @media only screen and (maxWidth: 860px){
        display: none;
    }

    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    text-align: center;
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
    )
}

const GetInTouchMenu = () => {
    return (
        <NavMenu>
            <MenuItem>
                <MenuLink text="get in touch" href="#"/>
            </MenuItem>
        </NavMenu>
    )
}

const StyledGetInTouchDiv = styled.div`
    padding: 10px;
    text-transform: uppercase;
`;

const GetInTouchHeader = () => {
    return (
        <StyledGetInTouchDiv>
            <GetInTouchMenu/>
        </StyledGetInTouchDiv>
    )
}

export default GetInTouchHeader;