import React, {Fragment} from 'react';
import FormComponent from '../../Formulario/FormComponent';
import '../../../Theme/Section.scss';
import mapa from '../../../Images/mapa.png';

const SectionComponent = ({MapComponent}) => {
    return (
        <Fragment>
            <section>
                <div className="containerTitle">
                    <h1>CONTAC US</h1>
                </div>
                <div className="contaienerText">
                    <div className="text">
                        <p className="p">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló <b className="b">1500, cuando un impresor N. del T. persona que se dedica</b></p>
                        <p>
                        con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                        </p>

                        <div className="containerVictoria">
                            <h4>WE SPEAKERS BC INC</h4>
                            <h4>394 4 WILKINSON RB. VICTORIA, BC V8Z 5A2</h4>
                            <hr></hr>
                        </div>

                        <img src={mapa} alt="mapa" className="mapa" />

                        <div className="containerVictoria">
                            <h4>Phone: +571 111 1000 00</h4>
                            <h4>E-mail info@wespeakers.com</h4>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="formulario">
                        <FormComponent />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default SectionComponent;