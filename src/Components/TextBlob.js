import styled from "styled-components";

const StyledTextBlob = styled.div`
    font-size: 30px;
    font-weight: 400;
    padding: 30px 100px;
    text-align: justify;

    @media only screen and (max-width: 1024px) {
        font-size: 24px;
        transition: ease all .5s;
    }

    @media only screen and (max-width: 760px) {
        font-size: 18px;
        transition: ease all .5s;
        text-align: left;
    }
`;

const TextBlob = ({text}) => {
    return (
        <StyledTextBlob>{text}</StyledTextBlob>
    )
}

export default TextBlob;