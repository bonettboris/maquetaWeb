import React, { Fragment } from 'react';
import '../../../Theme/Footer.scss';
import LogoTipo from '../../../Images/Screen Shot.png';
import Iasb from '../../../Images/iasb.png';

const FooterComponent = () => {
    return (
        <Fragment>
            <footer>
                <div className="footerContainer">

                    <div className="container">
                        <img src={LogoTipo} alt="lotipo" className="container__logotipo"/>
                        <div className="containerP">
                            <p>HOME</p>
                            <p>SPEAKERS</p>
                            <p>EXPERIENCES</p>
                            <p>CONTACT US</p>
                            <p>ABOUT</p>
                        </div>
                    </div>

                    <div className="containeIasb">
                        <img src={Iasb} alt="iasb" className="containeIasb__logotipoIasb"/>
                        <div className="textName">
                            <p>Menmber of the international Association of Speakers Bureaus</p>
                            <hr></hr>
                            <p className="p">Terms and Canditions - Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default FooterComponent;