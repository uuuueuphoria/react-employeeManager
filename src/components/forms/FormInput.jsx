import React from 'react';
import styled from 'styled-components';

const FormInputsStyles=styled.div `
        color:#3a464c;
        box-shadow:0 4px 4px -2px rgba(0,0,0,0.12);
        label{
            font-size:13px;
            color:#848d92;
        }
        input{
            width:100%;
            font-size:1rem;
            background-color:inherit;
            border:none;
            padding:0.25rem;
            outline:none;
        }
        `
const FormInput=(props)=>{
    return(
        <FormInputsStyles>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.inputType} name={props.name} id={props.id}/>
        </FormInputsStyles>

    );
}

export default FormInput;