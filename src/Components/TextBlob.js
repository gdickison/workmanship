import styled from "styled-components";

const StyledTextBlob = styled.div`
    font-size: 30px;
    font-weight: 400;
    padding: 0 100px 10px 100px;
    text-align: ${props => props.justification};
    line-height: 45px;

    @media only screen and (max-width: 1024px) {
        font-size: 24px;
        transition: ease all .5s;
        line-height: 40px;
    }

    @media only screen and (max-width: 760px) {
        font-size: 18px;
        transition: ease all .5s;
        text-align: left;
        line-height: 30px;
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