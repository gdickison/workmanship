import React from "react";
import styled from "styled-components";

const MenuItem = styled.span`
    float: right;
    padding: 16px 0;
`;

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 16px;
    text-decoration: none;

    &:hover {
        background-color: #111111;
        cursor: pointer;
    }
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
    )
}

const HeaderMenu = () => {
    return (
        <>
            <MenuItem>
                <MenuLink text="email us" href="#"/>
            </MenuItem>
            <MenuItem>
                <MenuLink text="services" href="#"/>
            </MenuItem>
            <MenuItem>
                <MenuLink text="about" href="#"/>
            </MenuItem>
            <MenuItem>
                <MenuLink text="work" href="#"/>
            </MenuItem>
        </>
    )
}

export default HeaderMenu;