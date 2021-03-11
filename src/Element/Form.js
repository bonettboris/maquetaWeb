import styled, {css} from 'styled-components';

const MensajeExito = styled.p`
    font-size: 16px;
    color: green;
    margin-top: 10px;
    font-family: 'Nunito';
    
`

const ContenedorBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    button {
        background: #fba214;
        height: 45px;
        line-height: 45px;
        width: 38%;
        color: #ffffff;
        font-weight: bold;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: .1s ease all;
        outline: none;

        &:hover {
            box-shadow: 0px 0px 20px rgba(163, 163, 163, 1);
        }

        @media screen and (max-width: 767px) {
            height: 38px;
            line-height: 38px;
        }
    }
`

const TernimosCondiciones = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 5px;

    input {
        width: 15px;
        height: 20px;

        @media screen and (max-width: 767px) {
            height: 12px;
        }
    }
    
    label{
        height: 20px;
    }

    p {
        margin-left: 10px;
    }

`

const Error = styled.p`
    height: 45px;
    line-height: 45px;
    background: red;
    padding: 0px 15px;
    border-radius: 5px;
    margin-top: 10px;
    color: #000000;

    b {
        color: #ffffff;
        margin-right: 7px;
    }
`

const Leyenda = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 5px;
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}

`
const ContainerInput = styled.div`
    padding-bottom: 9px;
`

const Label = styled.label`
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    color: #134879;
    margin-left: 8px;


    ${props => props.valido === 'false' && css`
        color: red;
    `}

    @media screen and (max-width: 767px) {
        font-size: 12px;
    }

`
const Input = styled.input`
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 40px;
    line-height: 45px;
    padding: 0 45px 0 10px;
    transition: .2s ease all;
    border: 1px solid #aaaaaa;
    border-radius: 6px;

    &:focus {
        border: 2px solid #1883fe;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 2px solid #1883fe;
    `}

    ${props => props.valido === 'false' && css`
        border: 2px solid red !important;
    `}

    @media screen and (max-width: 767px) {
        height: 30px;
    }
`;

const Textarea = styled.textarea`
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 160px;
    transition: .2s ease all;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    padding: 10px 0 0 10px;

    &:focus {
        border: 2px solid  #1883fe;
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 2px solid  #1883fe;
    `}

    ${props => props.valido === 'false' && css`
        border: 2px solid red !important;
    `}

    @media screen and (max-width: 767px) {
        height: 122px;
    }
`;

const ContainerTextarea = styled.div`
    margin-top: 12px;
`

export {
    ContenedorBoton,
    TernimosCondiciones,
    Error,
    Leyenda,
    Label,
    Input,
    Textarea,
    MensajeExito,
    ContainerTextarea,
    ContainerInput
    
}