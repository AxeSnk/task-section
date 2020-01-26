import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  div: {
    borderRight: "none"
  }
};

const headTr = [
  {
    id: 0,
    cell1: "Описание",
    cell2: "Статус",
    cell3: "Приоритет",
    cell4: "Плановая дата окончания",
    cell5: "Фактическая дата окончания",
    cell6: "Действие"
  }
];

function TodoHeadItem({ headTr }) {
  return (
    <li className="table__tr head__tr">
      <div className="table__td">{headTr.cell1}</div>
      <div className="table__td">{headTr.cell2}</div>
      <div className="table__td">{headTr.cell3}</div>
      <div className="table__td">{headTr.cell4}</div>
      <div className="table__td">{headTr.cell5}</div>
      <div style={styles.div} className="table__td">{headTr.cell6}</div>
    </li>
  );
}

function TodoList(props) {
  return (
    <div className="task-table">
      <ul style={styles.ul}>
        {headTr.map(headTr => {
          return <TodoHeadItem headTr={headTr} key={headTr.id} />;
        })}
        {props.todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TodoList;
