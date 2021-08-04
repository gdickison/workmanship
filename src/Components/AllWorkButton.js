import React from "react";
import styled from "styled-components";

const MenuItem = styled.li`
    padding: 16px 0;
    display: inline-block;
`;

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 12px;
    text-decoration: none;
    letter-spacing: .1rem;
    border: 1px solid #E5E5E5;
    border-radius: 25px;

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

const AllWorkButton = () => {
    return (
        <NavMenu>
            <MenuItem>
                <MenuLink text="ALL WORK" href="#"/>
            </MenuItem>
        </NavMenu>
    )
}

export default AllWorkButton;