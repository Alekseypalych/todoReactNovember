import React from 'react';
import PropTypes from 'prop-types';

//почему в параметре функции мы пишем в фигурных скобках? это изза того, что надо передать несколько параметров ? почему здесь нет key хотя в App.js в <ToDo key={todo.id} /> ?
export function ToDo({ todo, onToggleTask, onRemoveTask }) {
  console.log('rerender', todo.task);
  return (
    <div key={todo.id} className="item-todo">
      <div className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => onToggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => onRemoveTask(todo.id)}>
        X
      </div>
    </div>
  )
}

ToDo.propTypes = {
  id: PropTypes.number,
  task: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  complete: PropTypes.bool,
  onToggleTask: PropTypes.func,
  onRemoveTask: PropTypes.func,
};