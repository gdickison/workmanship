import styled from 'styled-components';

const ProjectRow = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.xRepeat}, 1fr);
    clear: both;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ProjectCol = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0 5px;
    font-size: 12px;
    font-weight: 700;
`;

const WorkLink = ({linkRef, children}) => {
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
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 10px 0 0 0;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }
`;

const ProjectImageSubtitle = styled.p`
    font-family: "Playfair Display";
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    margin: 0;

    @media only screen and (max-width: 1024px) {
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 900px) {
        font-size: 12px;
    }
`;

const FeaturedProjectPhotos = ({xRepeat}) => {
    return (
        <ProjectRow xRepeat={xRepeat}>
            <ProjectCol style={{paddingLeft: "0"}}>
                <WorkLink linkRef="#">
                    <ProjectImage
                        source="images/project_upland.png"
                        altText="project upland"
                    />
                </WorkLink>
                <ProjectImageTitle>
                    Project Upland
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Brand, Print, Apparel
                </ProjectImageSubtitle>
            </ProjectCol>
            <ProjectCol>
                <WorkLink linkRef="#">
                    <ProjectImage
                        source="images/first_fruits_wine.png"
                        altText="first fruits wine"
                    />
                </WorkLink>
                <ProjectImageTitle>
                    First Fruits Wine
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Logo, Packaging
                </ProjectImageSubtitle>
            </ProjectCol>
            <ProjectCol style={{paddingRight: "0"}}>
                <WorkLink linkRef="#">
                    <ProjectImage
                        source="images/parakeet_records.png"
                        altText="parakeet records"
                    />
                </WorkLink>
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

export default FeaturedProjectPhotos;