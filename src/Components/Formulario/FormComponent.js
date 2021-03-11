import React, { useState } from 'react';
import InputComponent from '../../Components/Imput';
import TextareaComponent from '../../Components/Textarea';
import {ContenedorBoton, TernimosCondiciones, Error, MensajeExito} from '../../Element/Form';


const FormComponent = () => {

    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [sujeto, cambiarSujeto] = useState({campo: '', valido: null});
    const [mensaje, cambiarMensaje] = useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
   

    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/,
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		password: /^.{4,12}$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/,
        sujeto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        mensaje: /^[a-zA-ZÀ-ÿ\s]{1,1000}$/
	}

    const onchangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if( 
            nombre.valido === 'true' && 
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            sujeto.valido === 'true' &&
            mensaje.valido === 'true' &&
            terminos

        ) {
            cambiarFormularioValido(true);
            cambiarNombre({campo: '', valido: null});
            cambiarCorreo({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarSujeto({campo: '', valido: null});
            cambiarMensaje({campo: '', valido: null});
            cambiarTerminos(false);
        } else {
            cambiarFormularioValido(false);
        }

    }

    return(
        <main>
            <form action="" onSubmit={onSubmit}>
                <div>
                    
                    <InputComponent
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        label="Name and surname"
                        placeholder="Name and surname"
                        tipo="text"
                        name="usuario"
                        leyendaError="The username must be 4 to 16 digits long and can only have numbers, letters, and underscore."
                        expresionRegular={expresiones.nombre}
                    />

                    <InputComponent
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        label="Your email address"
                        placeholder="Email"
                        tipo="email"
                        name="correo"
                        leyendaError="The mail must have @ and .com spelled out the mail type."
                        expresionRegular={expresiones.correo}
                    />

                    <InputComponent
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        label="Your phone number"
                        placeholder="Phone"
                        tipo="text"
                        name="telefono"
                        leyendaError="Only numbers please thanks from 7 to 14 numerical digits."
                        expresionRegular={expresiones.telefono}
                    />

                    <InputComponent
                        estado={sujeto}
                        cambiarEstado={cambiarSujeto}
                        label="Subject"
                        placeholder="Subject"
                        tipo="text"
                        name="sujeto"
                        leyendaError="please only text no numbers any other characters"
                        expresionRegular={expresiones.sujeto}
                    />

                    <TextareaComponent 
                        estado={mensaje}
                        cambiarEstado={cambiarMensaje}
                        label="Your message"
                        placeholder="Mensaje"
                        tipo="text"
                        name="mensaje"
                        leyendaError="please only text no numbers any other characters"
                        expresionRegular={expresiones.mensaje}
                    />

                    <TernimosCondiciones>
                        <label>
                            <input 
                                type="checkbox" 
                                name="terminos" 
                                id="terminos" 
                                checked={terminos}
                                onChange={onchangeTerminos}
                            />
                        </label>
                        <p>I accept terms and conditions</p>
                    </TernimosCondiciones>

                    {formularioValido === false && <div>
                        <Error><b>Error:</b> Please fill in the form correctly</Error>
                    </div>}

                    <ContenedorBoton className="containerBoton">
                        <button className="boton" type="submit">SUBMIT</button>
                        {formularioValido === true && <MensajeExito>Successfully sent!</MensajeExito>}
                    </ContenedorBoton>
                </div>
            </form>
        </main>
    )
}

export default FormComponent;