import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

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
    <tr className="table__tr head__tr">
      <td className="table__td">
        {headTr.cell1}
      </td>
      <td className="table__td">
        {headTr.cell2}
      </td>
      <td className="table__td">
        {headTr.cell3}
      </td>
      <td className="table__td">
        {headTr.cell4}
      </td>
      <td className="table__td">
        {headTr.cell5}
      </td>
      <td className="table__td">
        {headTr.cell6}
      </td>
    </tr>
  );
}

function TodoList(props) {
  return (
    <table className="task-table">
      <thead className="table-thead">
        {headTr.map(headTr => {
          return <TodoHeadItem headTr={headTr} key={headTr.id} />;
        })}
        {props.todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} edit={props.onEdit} />;
        })}
      </thead>
    </table>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default TodoList;
