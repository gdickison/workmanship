import styled from 'styled-components';

const TeamContainer = styled.div`
    background-color: #C4C4C4;
    height: 400px;
`;

const TeamRow = styled.div`
    display: flex;
    clear: both;
`;

const TeamCol = styled.div`
    width: 25%;
    height: 300px;
    font-size: 12px;
    font-weight: 700;
`;

const Team = () => {
    return (
        <TeamContainer>
            <p style={{color: "black", textAlign: "center", padding: "40px", textTransform: "uppercase", fontSize: "24px", fontWeight: "700"}}>the team</p>
            <TeamRow>
            <TeamCol />
            <TeamCol style={{verticalAlign: "top", display: "inline-block", paddingLeft: "0", textAlign: "right"}}>
                <img src="images/james.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="project upland"></img>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0"}}>James</p>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0 0 10px 0", fontStyle: "italic"}}>Chief, Dad</p>
            </TeamCol>
            <TeamCol style={{verticalAlign: "top", display: "inline-block", textAlign: "left"}}>
                <img src="images/samuel.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="first fruits wine"></img>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0"}}>Samuel</p>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0 0 10px 0", fontStyle: "italic"}}>Designer, Dad</p>
            </TeamCol>
            <TeamCol />
        </TeamRow>
        </TeamContainer>
    )
}

export default Team;
