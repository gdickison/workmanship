import React from 'react';
import styled from 'styled-components';
import AllWorkButton from './AllWorkButton';
import {FeaturedProjectPhotos} from './FeaturedProjectPhotos';

const StyledFeaturedProjectsDiv = styled.div`
    padding: 30px 100px 60px 100px;
`;

const FeaturedProjects = () => {
    return (
        <StyledFeaturedProjectsDiv>
            <span style={{ fontSize: "24px", letterSpacing: ".1rem", fontWeight: "900", padding: "16px 0", float: "left", height: "30px"}}>FEATURED PROJECTS</span>
            <AllWorkButton/>
            <FeaturedProjectPhotos xRepeat="3"/>
        </StyledFeaturedProjectsDiv>
    )
}

export default FeaturedProjects;