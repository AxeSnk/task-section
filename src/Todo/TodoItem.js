import React from "react";
import PropTypes from "prop-types";
import { styles } from "./TodoList"

function TodoItem({ todo }) {
  return (
    <li className="table__tr">
      <div className="table__td">{todo.title}</div>
      <div className="table__td">{todo.status}</div>
      <div className="table__td">{todo.priority}</div>
      <div className="table__td">{todo.plannedEndDate}</div>
      <div className="table__td">{todo.actualEndDate}</div>
      <div style={styles.div} className="table__td button__delete">Удалить</div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
