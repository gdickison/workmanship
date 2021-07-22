import styled from 'styled-components';

const ProjectRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

const FeaturedProjectPhotos = () => {
    return (
        <ProjectRow>
            <ProjectCol style={{paddingLeft: "0"}}>
                <img src="images/project_upland.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="project upland"></img>
                <p style={{margin: "0"}}>Project Upland</p>
                <p style={{margin: "0 0 10px 0", fontFamily: "Playfair Display", fontStyle: "italic"}}>Brand, Print, Apparel</p>
            </ProjectCol>
            <ProjectCol>
                <img src="images/first_fruits_wine.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="first fruits wine"></img>
                <p style={{margin: "0"}}>First Fruits Wine</p>
                <p style={{margin: "0 0 10px 0", fontFamily: "Playfair Display", fontStyle: "italic"}}>Logo, Packaging</p>
            </ProjectCol>
            <ProjectCol style={{paddingRight: "0"}}>
                <img src="images/parakeet_records.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="parakeet records"></img>
                <p style={{margin: "0"}}>Parakeet Records</p>
                <p style={{margin: "0 0 10px 0", fontFamily: "Playfair Display", fontStyle: "italic"}}>Logo, Apparel</p>
            </ProjectCol>
        </ProjectRow>
    )
}

export default FeaturedProjectPhotos;