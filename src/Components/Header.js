import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import NavMenu from './NavMenu';

const StyledHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
    text-transform: uppercase;
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <Logo />
            {/* <HeaderMenu/> */}
            <NavMenu />
        </StyledHeaderDiv>
    )
}

export default Header;