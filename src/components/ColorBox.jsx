import React from 'react';
import styled from 'styled-components'

const LabelColor = styled.label`
    display:inline-block;
    font-family: 'Roboto', 'sans-serif';
    width:45px;
    height:45px;
    justify-content: space-between;
    margin-top:.5rem;
    background-color: ${({ color }) => color};
    border-radius:5px;
`

const InputRadio = styled.input`
    font-size: 1rem;
    display:none;
    &:checked + label{
    border:1px solid #000;
    &:hover{
        transform: scale(1.1);
        
    }
    }
`


const ColorBox = ({ color, handleChangeColor, isChecked }) => (
    <>
        <InputRadio
            
            defaultChecked={isChecked}
            id={color}
            name="color"
            onChange={() => handleChangeColor(color)}
            type="radio"
        />
        <LabelColor  htmlFor={color} color={color} ></LabelColor>
    </>
)

export default ColorBox;