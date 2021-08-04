import styled from 'styled-components';

const TeamContainer = styled.div`
    background-color: #C4C4C4;
    height: 500px;
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
`;

const TeamContainerHeader = styled.p`
    color: black;
    text-align: center;
    padding: 60px 40px 40px 40px;
    margin: 0;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: .15rem;
    height: 30px;
`;

const TeamRow = styled.div`
    display: grid;
    grid-template-columns: auto minmax(100px, 300px) minmax(100px, 300px) auto;
    justify-items: center;
`;

const TeamCol = styled.div`
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
                <div/>
                <TeamCol>
                    <img src="images/james.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="james"></img>
                    <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0"}}>James</p>
                    <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0 0 10px 0", fontStyle: "italic"}}>Chief, Dad</p>
                </TeamCol>
                <TeamCol>
                    <img src="images/samuel.png" style={{maxWidth: "100%", maxHeight: "100%"}} alt="samuel"></img>
                    <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0"}}>Samuel</p>
                    <p style={{color: "black", textAlign: "center", maxWidth: "300px", margin: "0 0 10px 0", fontStyle: "italic"}}>Designer, Dad</p>
                </TeamCol>
                <div/>
            </TeamRow>
        </TeamContainer>
    )
}

export default Team;
