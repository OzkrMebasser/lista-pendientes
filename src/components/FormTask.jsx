import React from 'react';
import styled from 'styled-components'
import allColors from '../styles/colors'
import ColorBox from './ColorBox';
import { generate as id } from 'shortid'

const Input = styled.input`
    border:none;
    font-size: 1.8rem;
    width:330px;
    font-weigth: 600;
    font-family: 'Roboto', 'sans-serif';
    border:1px solid ${allColors.mainColor};
    border-radius:5px;
    background: ${allColors.mainColor};
    outline:none;
    color: black};
`

const Button = styled.button`
    background-color:${allColors.mainColor};
    border:1px solid ${allColors.mainColor};
    color:black;
    border-radius:5px;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: 'Roboto', 'sans-serif';
    padding: .5rem 1.5rem;
    cursor:pointer;
    outline:none;
    &:hover{
    background-color:green;
    color:${allColors.mainColor};

    }
`

const ColorsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: 'Roboto', 'sans-serif';
    width:330px;
    margin: 0 auto .5rem;
    padding: .5rem 1.5rem;
`

const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
    <form onSubmit={handleSubmit}>
        <Input name="title" type="text" placeholder="Agrega tu tarea" />
        <ColorsContainer>
            {
                allColors.colors.map(color => (
                    <ColorBox
                        handleChangeColor={handleChangeColor}
                        color={color}
                        key={id()}
                        isChecked={colorSelected === color}
                    />
                ))
            }
        </ColorsContainer>
        <Button>Agregar tarea</Button>
    </form>

)

export default FormTask