import React from 'react';
import { Leyenda, Label, Textarea, ContainerTextarea } from '../../Element/Form';

const TextareaComponent = ({estado, cambiarEstado, label, placeholder, tipo, name, leyendaError, expresionRegular}) => {
    //valor del input estado actualiza
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
        if(expresionRegular.test(estado.campo)){
            cambiarEstado({...estado, valido: 'true'});
        }else {
            cambiarEstado({...estado, valido: 'false'});
        }
        }
    }

    return(
        <ContainerTextarea>
            <Label htmlFor="{name}" valido={estado.valido}>{label}</Label>
            <div>
                <Textarea 
                    type={tipo} 
                    placeholder={placeholder} 
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
            </div>
            <Leyenda className="leyenda" valido={estado.valido}>{leyendaError}</Leyenda>
        </ContainerTextarea>
    )
}

export default TextareaComponent;