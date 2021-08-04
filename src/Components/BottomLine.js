import styled from "styled-components";

const StyledBottomLine = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 400px;
    text-transform: uppercase;
    letter-spacing: .1rem;
`;

const StyledContact = styled.p`
    font-size: 15px;
    text-align: right;
    margin: 0;
    padding: 1px 50px 1px 0;
    height: 18px;
`;

const Contact = ({text}) => {
    return (
        <StyledContact>{text}</StyledContact>
    )
}

const StyledNewsletter = styled.p`
    font-size: 15px;
    text-align: left;
    margin: 0;
    padding: 1px 0 1px 50px;
    height: 18px;
`;

const Newsletter = ({text}) => {
    return (
        <StyledNewsletter>{text}</StyledNewsletter>
    )
}

const MenuItem = styled.li`
    padding: 24px 0;
    display: inline-block;
`;

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 12px;
    text-decoration: none;
    border: 1px solid #BFBFBF;
    border-radius: 25px;
    font-size: 15px;

    &:hover {
        background-color: #E5E5E5;
        color: #000000;
        cursor: pointer;
    }
`;

const NavMenu = styled.ul`
    @media only screen and (maxWidth: 860px){
        display: none;
    }

    list-style-type: none;
    margin: 0;
    padding: 0 0 0 50px;
    position: relative;
    text-align: left;
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
    )
}

const SignUpMenu = () => {
    return (
        <NavMenu>
            <MenuItem>
                <MenuLink text="sign up" href="#"/>
            </MenuItem>
        </NavMenu>
    )
}

const BottomLine = () => {
    return (
        <StyledBottomLine>
            <div/>
            <div style={{margin: "75px 0", borderRight: "1px solid #BFBFBF"}}>
                <p style={{paddingTop: "20px", fontSize: "24px", textAlign: "right", paddingRight: "50px"}}>contact</p>
                <Contact text="208.768.8888" />
                <Contact text="hi@workmanship.com" />
                <Contact text="102 S. Main #104" />
                <Contact text="Moscow, Idaho 83843" />
                <p style={{textAlign: "right", paddingRight: "50px", marginTop: "10px"}}><a href="https://www.instagram.com/woostersmoscow/" target="_blank" rel="noreferrer" className="instagram"><i className="fab fa-instagram"></i></a></p>
            </div>
            <div style={{margin: "75px 0", borderLeft: "1px solid #BFBFBF"}}>
                <p style={{paddingTop: "20px", fontSize: "24px", textAlign: "left", paddingLeft: "50px"}}>newsletter</p>
                <Newsletter text="new projects"/>
                <Newsletter text="limited merch"/>
                <Newsletter text="exciting stuff"/>
                <SignUpMenu />
            </div>
            <div/>
        </StyledBottomLine>
    )
}

export default BottomLine;