import React from 'react';
import styled from 'styled-components';
import MiddleNavBarMenu from './MiddleNavBarMenu';

const StyledMiddleHeaderDiv = styled.div`
    padding: 0 100px;
    text-transform: uppercase;
`;

const MiddleHeader = () => {
    return (
        <StyledMiddleHeaderDiv>
            <span style={{fontWeight: "900", padding: "16px 0", float: "left", height: "50px"}}>featured projects</span>
            <MiddleNavBarMenu/>
        </StyledMiddleHeaderDiv>
    )
}

export default MiddleHeader;