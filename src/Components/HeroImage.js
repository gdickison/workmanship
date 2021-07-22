import {
    ProjectRow,
    ProjectCol,
    ProjectImage,
    ProjectImageTitle,
    ProjectImageSubtitle
} from './FeaturedProjectPhotos';



const HeroImage = ({xRepeat}) => {
    return (
        <ProjectRow xRepeat={xRepeat} style={{padding: "30px 100px"}}>
            <ProjectCol>
                <ProjectImage
                    source="images/niangua.jpg"
                    altText="niangua coffee"
                />
                <ProjectImageTitle>
                    NIANGUA COFEE
                </ProjectImageTitle>
                <ProjectImageSubtitle>
                    Brand, Packaging, Apparel
                </ProjectImageSubtitle>
            </ProjectCol>
        </ProjectRow>
    )
}

export default HeroImage;