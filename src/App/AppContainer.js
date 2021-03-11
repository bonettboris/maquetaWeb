import React from 'react';
import NavbarComponent from '../Components/Common/Navbar';
import SectionComponent from '../Components/Common/Section';
import FooterComponent from '../Components/Common/Footer';
import '../Theme/Global.scss';

const AppContainer = () => {

    return(
        <div className="global">
            <NavbarComponent/>
            <SectionComponent />
            <FooterComponent />
        </div>
    )
}

export default AppContainer;