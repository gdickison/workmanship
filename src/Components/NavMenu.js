import { useState } from 'react';
import Hamburger from "./Hamburger";

const NavMenu = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div className="navigation">
            <ul>
                <li>work</li>
                <li>about</li>
                <li>services</li>
                <li>email us</li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            <style jsx>{`
                .navigation{
                    display: flex;
                    width: 100%;
                    height: 50px;
                }

                .navigation ul{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }

                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }

                .hamburger{
                    display: none;
                    z-index: 6;
                }

                @media (max-width: 767px){
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
                }
            `}</style>
        </div>
    )
}

export default NavMenu;