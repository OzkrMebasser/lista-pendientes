import React from 'react';
import styled from 'styled-components'
import "../styles/App.css"

const TaskContainer = styled.div`
    display:grid;
    grid-template-columns: 33px 1fr 30px;
    justify-items:start;
    align-items:center;
    padding: 0 2rem;
    background-color:${({ color }) => color};
    width:100%;
    max-width:330px;
    margin: 1rem auto;
    border-radius:5px;
    color:#000;
    font-size: 1.5rem;
    font-family: 'Roboto', 'sans-serif';
    
`

const TaskButton = styled.button`
    font-size:1rem;
    font-family: 'Roboto', 'sans-serif';
    background-color:white;
    border: 1px solid #000;
    color:#000;
    padding:.3rem .5rem;
    border-radius:50px;
    cursor:pointer;
    outline:none;
    &:hover{
        background-color:#FF0000;
        color:#222;
    }
`

const TaskText = styled.p`
    color:#000;
    font-size:1.5rem;
    font-family: 'Roboto', 'sans-serif';
    text-decoration:${({ done }) => done ? 'line-through' : 'none'};
`

const Task = ({ color, title, done, handleCompleteTask, handleDeleteTask }) => (
    <TaskContainer color={color}>
        <input
            className="big"
            type="checkbox"
            onChange={handleCompleteTask}
            defaultChecked={done}
        />
        <TaskText done={done}>{title}</TaskText>
        <TaskButton onClick={handleDeleteTask}><i class="far fa-trash-alt"></i></TaskButton>
    </TaskContainer>
)

export default Task;