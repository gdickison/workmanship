import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavMenu from './NavMenu';

const StyledHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 100px;
    text-transform: uppercase;

    @media (max-width: 480px){
        padding: 50px;
    }
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <Logo />
            <NavMenu />
        </StyledHeaderDiv>
    )
}

export default Header;