import styled from "styled-components";

const StyledTextBlob = styled.div`
    font-size: 30px;
    font-weight: 400;
    padding: 30px 100px;
    text-align: justify;
`;

const TextBlob = ({text}) => {
    return (
        <StyledTextBlob>{text}</StyledTextBlob>
    )
}

export default TextBlob;