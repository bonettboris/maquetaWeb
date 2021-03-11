import React from "react";
import { Leyenda, Label, Input, ContainerInput } from '../../Element/Form';

const InputComponet = ({estado, cambiarEstado, label, placeholder, tipo, name, leyendaError, expresionRegular}) => {
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

  return (
    <ContainerInput>
        <Label htmlFor="{name}" valido={estado.valido} >{label}</Label>
        <div>
            <Input
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
    </ContainerInput>
  );
};

export default InputComponet;
