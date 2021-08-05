import { useState } from 'react';
import Hamburger from "./Hamburger";
import styled from 'styled-components';

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 12px;
    text-decoration: none;
    letter-spacing: .1rem;

    &:hover {
        border: 1px solid var(--link-border-color);
        padding: 11px;
        cursor: pointer;
        border-radius: 25px;
    }

    @media (max-width: 822px){
        padding: 5px;
    }

    @media (max-width: 480px){
        font-size: 16px;
    }
`;

const StyledEmailLinkA = styled.a`
    text-align: center;
    padding: 12px;
    text-decoration: none;
    letter-spacing: .1rem;
    border: 1px solid var(--link-border-color);
    border-radius: 25px;

    &:hover {
        color: var(--background-color);
        background-color: var(--link-border-color);
        cursor: pointer;
    }

    @media (max-width: 822px){
        padding: 5px;
    }

    @media (max-width: 480px){
        font-size: 16px;
    }
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
    )
}

const EmailLink = () => {
    return (
        <StyledEmailLinkA>email us</StyledEmailLinkA>
    )
}

const NavMenu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div className="navigation">
            <ul>
                <li style={{paddingRight: "2px"}}><MenuLink text="work" href="#"/></li>
                <li style={{paddingRight: "2px"}}><MenuLink text="about" href="#"/></li>
                <li style={{paddingRight: "2px"}}><MenuLink text="services" href="#"/></li>
                <li><EmailLink href="#"/></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            <style jsx>{`
                .navigation{
                    display: flex;
                    height: 60px;
                }

                .navigation ul{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                    list-style-type: none;
                }

                .hamburger{
                    display: none;
                    z-index: 6;
                }

                @media (max-width: 822px){
                    .hamburger{
                        display: flex;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }

                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        height: 100vh;
                        margin-top: 50px;
                        position: absolute;
                        
                    }

                    .navigation ul li{
                        padding: 5px;
                    }
                }

                @media (max-width: 480px){
                    .navigation ul li{
                        padding: 2px;
                    }
                }
            `}</style>
        </div>
    )
}

export default NavMenu;