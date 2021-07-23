import { useState } from 'react';
import Hamburger from "./Hamburger";
import styled from 'styled-components';

const StyledMenuLinkA = styled.a`
    text-align: center;
    padding: 16px;
    text-decoration: none;

    &:hover {
        background-color: #E5E5E5;
        color: #000000;
        cursor: pointer;
        border-radius: 2px;
    }

    @media (max-width: 822px){
        padding: 5px;
    }
`;

const MenuLink = ({text}) => {
    return (
        <StyledMenuLinkA>{text}</StyledMenuLinkA>
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
                <li><MenuLink text="work" href="#"/></li>
                <li><MenuLink text="about" href="#"/></li>
                <li><MenuLink text="services" href="#"/></li>
                <li><MenuLink text="email us" href="#"/></li>
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
                        width: 50vw;
                        margin-top: 50px;
                        position: fixed;
                        
                    }

                    .navigation ul li{
                        padding: 5px;
                    }
                }
            `}</style>
        </div>
    )
}

export default NavMenu;