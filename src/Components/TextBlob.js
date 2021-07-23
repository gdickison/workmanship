import styled from "styled-components";

const StyledTextBlob = styled.div`
    font-size: 30px;
    font-weight: 400;
    padding: 30px 100px;
    text-align: ${props => props.justification};

    @media only screen and (max-width: 1024px) {
        font-size: 24px;
        transition: ease all .5s;
    }

    @media only screen and (max-width: 760px) {
        font-size: 18px;
        transition: ease all .5s;
        text-align: left;
    }

    @media (max-width: 480px){
        padding: 50px 50px;
    }
`;

const TextBlob = ({justification, text}) => {
    return (
        <StyledTextBlob justification={justification}>{text}</StyledTextBlob>
    )
}

export default TextBlob;