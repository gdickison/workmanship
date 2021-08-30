import styled from 'styled-components';

const ProjectRow = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.xRepeat}, 1fr);
    grid-gap: 20px;
    clear: both;
    padding-bottom: 15px;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCol = styled.div`
    display: flex;
    flex-flow: column;
    font-size: 12px;
    font-weight: 700;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;

const ProjectLink = ({linkRef, children}) => {
    return (
        <a href={linkRef} className="work-link">
            {children}
        </a>
    )
}

const ProjectImage = ({source, altText}) => {
    return (
        <img src={source} className="project-image" alt={altText}></img>
    )
}

const ProjectImageTitle = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px 0 0 0;
    letter-spacing: .1rem;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }
`;

const ProjectImageSubtitle = styled.p`
    font-family: "Playfair Display";
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    margin: 5px 0;
    letter-spacing: .05rem;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
        padding-bottom: 5px;
    }
`;

const FeaturedProjectPhotos = ({xRepeat}) => {
    return (
        <ProjectRow xRepeat={xRepeat}>
            <ProjectCol>
                <ProjectLink linkRef="#">
                    <ProjectImage
                        source="images/project_upland.png"
                        altText="project upland"
                    />
                </ProjectLink>
                <ProjectImageTitle>
                    Project Upland
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Brand, Print, Apparel
                </ProjectImageSubtitle>
            </ProjectCol>
            <ProjectCol>
                <ProjectLink linkRef="#">
                    <ProjectImage
                        source="images/first_fruits_wine.png"
                        altText="first fruits wine"
                    />
                </ProjectLink>
                <ProjectImageTitle>
                    First Fruits Wine
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Logo, Packaging
                </ProjectImageSubtitle>
            </ProjectCol>
            <ProjectCol>
                <ProjectLink linkRef="#">
                    <ProjectImage
                        source="images/parakeet_records.png"
                        altText="parakeet records"
                    />
                </ProjectLink>
                <ProjectImageTitle>
                    Parakeet Records
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Logo, Apparel
                </ProjectImageSubtitle>
            </ProjectCol>
        </ProjectRow>
    )
}

export {
    ProjectRow,
    ProjectCol,
    ProjectLink,
    ProjectImage,
    ProjectImageTitle,
    ProjectImageSubtitle,
    FeaturedProjectPhotos
};