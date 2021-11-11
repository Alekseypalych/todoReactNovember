import React from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export function ToDoForm({ onAddTask }) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(userInput)//можно ли здесь написать props.addTask а в export function ToDoForm({ addTask }) { addTask } заменить на props
    setUserInput("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  //ниже в теге импут помещяем value в {userInput} это равняется (грубо, вопрос про логику) записи в обычном js const input = document.querySelector('.input'); и ввод нахордится в свойстве объекта input.value

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение"
      />
      <button>
        Сохранить
      </button>
    </form>
  )
};
