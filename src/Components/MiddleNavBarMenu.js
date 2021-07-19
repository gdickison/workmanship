import React from "react";
import styled from "styled-components";

const MenuItem = styled.li`
    /* float: right; */
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
    float: right;
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
    )
}

const MiddleNavBar = () => {
    return (
        <NavMenu>
            <MenuItem>
                <MenuLink text="all work" href="#"/>
            </MenuItem>
        </NavMenu>
    )
}

export default MiddleNavBar;