import styled from 'styled-components';

const TeamContainer = styled.div`
    background-color: #C4C4C4;
    height: 400px;
`;

const TeamContainerHeader = styled.p`
    color: black;
    text-align: center;
    padding: 40px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
`;

const TeamRow = styled.div`
    display: flex;
    clear: both;
`;

const TeamCol = styled.div`
    width: 25%;
    height: 300px;
    vertical-align: top;
    display: inline-block;
    padding-left: 0;
    text-align: right;
`;

const Team = () => {
    return (
        <TeamContainer>
            <TeamContainerHeader>
                the team
            </TeamContainerHeader>
            <TeamRow>
            <TeamCol />
            <TeamCol>
                <img src="images/james.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="project upland"></img>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0"}}>James</p>
                <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0 0 10px 0", fontStyle: "italic"}}>Chief, Dad</p>
            </TeamCol>
            <TeamCol>
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
