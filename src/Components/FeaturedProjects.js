import React from 'react';
import styled from 'styled-components';
import AllWorkButton from './AllWorkButton';
import {FeaturedProjectPhotos} from './FeaturedProjectPhotos';

const StyledFeaturedProjectsDiv = styled.div`
    padding: 0 100px;
`;

const FeaturedProjects = () => {
    return (
        <StyledFeaturedProjectsDiv>
            <span style={{fontWeight: "900", padding: "16px 0", float: "left", height: "50px"}}>FEATURED PROJECTS</span>
            <AllWorkButton/>
            <FeaturedProjectPhotos xRepeat="3"/>
        </StyledFeaturedProjectsDiv>
    )
}

export default FeaturedProjects;