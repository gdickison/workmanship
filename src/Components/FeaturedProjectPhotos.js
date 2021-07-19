import styled from 'styled-components';

const ProjectRow = styled.div`
    display: flex;
    clear: both;
`;

const ProjectCol = styled.div`
    width: 33%;
    padding: 0 10px;
    height: 300px;
    font-size: 12px;
    font-weight: 700;
`;

const FeaturedProjectPhotos = () => {
    return (
        <ProjectRow>
            <ProjectCol style={{paddingLeft: "0"}}>
                <img src="images/project_upland.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="project upland"></img>
                <p style={{margin: "0"}}>project upland</p>
                <p style={{margin: "0 0 10px 0", fontStyle: "italic"}}>Brand, Print, Apparel</p>
            </ProjectCol>
            <ProjectCol>
                <img src="images/first_fruits_wine.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="first fruits wine"></img>
                <p style={{margin: "0"}}>first fruits wine</p>
                <p style={{margin: "0 0 10px 0", fontStyle: "italic"}}>Logo, Packaging</p>
            </ProjectCol>
            <ProjectCol style={{paddingRight: "0"}}>
                <img src="images/parakeet_records.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="parakeet records"></img>
                <p style={{margin: "0"}}>parakeet records</p>
                <p style={{margin: "0 0 10px 0", fontStyle: "italic"}}>Logo, Apparel</p>
            </ProjectCol>
        </ProjectRow>
    )
}

export default FeaturedProjectPhotos;