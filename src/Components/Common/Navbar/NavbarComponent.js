import React, { Fragment } from 'react';
import '../../../Theme/Navbar.scss';
import LupaIcon from '../../../Images/Screen Shot2.png';
import Lista from '../../../Images/lista.png';
import Usa from '../../../Images/usa.png';
import LogoTipo from '../../../Images/Screen Shot.png';

const NavbarComponent = () => {
    return(
        <Fragment>
            <header>
                <nav className="container">
                    <div className="containerUl">
                        <ul className="enlaces">
                            <li>HOME</li>
                            <li>SPEAKERS</li>
                            <li>EXPERIENCES</li>
                            <li>CONTACT</li>
                            <li>ABOUT</li>
                        </ul>
                    </div>

                    <div className="containerIcon">
                        <div className="containersearch"><img className="search" src={LupaIcon} alt="seact"/></div>
                        <div className="containerlista"><img className="lista" src={Lista} alt="list"/><p>MY LIST</p></div>
                        <div className="containerbandera"><img className="bandera" src={Usa} alt="bandera" /><p>+</p></div>
                    </div>

                    <div className="containerlogo">
                        <img className="logotipo" src={LogoTipo} alt="logotipo"/>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default NavbarComponent;