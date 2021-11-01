import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

import { generate as id } from 'shortid'
import allColors from './styles/colors'
import FormTask from './components/FormTask'
import Task from './components/Task'

const GlobalSyle = createGlobalStyle`
    body{
        
        font-family: 'Roboto', 'sans-serif';
        font-size: .8rem;
        background-image: url('https://images.unsplash.com/photo-1558051815-0f18e64e6280?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80');
        color:${allColors.mainColor};
        text-align: center;
        margin:0;
        background-repeat: no-repeat;
        
    }
    h1,h2,h3{
      text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em grey;

    }
`

const App = () => {

    const [colorSelected, setColorSelected] = useState(allColors.colors[0])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      const json = localStorage.getItem("tasks");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTasks(loadedTodos);
      }
    }, []);
  
    useEffect(() => {
      const json = JSON.stringify(tasks);
      localStorage.setItem("tasks", json);
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.title.value.trim() !== '') {
            createNewTask(e.target.title.value)
            e.target.title.value = ''
        }
    }

    const createNewTask = (title) => {
        const newTask = {
            id: id(),
            title,
            color: colorSelected,
            done: false
        }

        const allTasks = [...tasks, newTask]

        setTasks(allTasks)
    }

    const handleCompleteTask = (id) => {
        const currentTasks = [...tasks]
        const task = currentTasks.find(task => task.id === id)
        const index = currentTasks.indexOf(task)

        currentTasks[index].done = !currentTasks[index].done

        setTasks(currentTasks)
    }

    const handleDeleteTask = (id) => {
        let currentTasks = [...tasks]
        currentTasks = currentTasks.filter(task => task.id !== id)

        setTasks(currentTasks)
    }

    const handleChangeColor = (color) => {
        setColorSelected(color)
    }

    return (
        <>
            <GlobalSyle />
            <h1>✅ Lista de Pendientes ✅</h1>
            <FormTask
                handleChangeColor={handleChangeColor}
                handleSubmit={handleSubmit}
                colorSelected={colorSelected}
            />

            {tasks.length === 0 && <h3> 😉 No tienes tareas pendientes 👏</h3>}
            {
                tasks.map(task => (
                    <Task
                        key={id()}
                        done={task.done}
                        title={task.title}
                        color={task.color}
                        handleCompleteTask={() => handleCompleteTask(task.id)}
                        handleDeleteTask={() => handleDeleteTask(task.id)}
                    />
                ))
            }
        </>

    )
}

export default App;