import React from 'react';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

const StyledHeaderDiv = styled.div`
    padding: 100px;
    text-transform: uppercase;
`;

const Header = () => {
    return (
        <StyledHeaderDiv>
            <Logo />
            <HeaderMenu/>
        </StyledHeaderDiv>
    )
}

export default Header;