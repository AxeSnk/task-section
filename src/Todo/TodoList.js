import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  table: {
    border: "1px solid grey",
    borderCollapse: "collapse",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  td: {
    border: "1px solid grey",
  },
  taskTable: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  width40: {
    width: "40%"
  },
  width15: {
    width: "15%"
  },
  width10: {
    width: "10%"
  },

}

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
      <td style={styles.td} className="table__td">{headTr.cell1}</td>
      <td style={styles.td} className="table__td">{headTr.cell2}</td>
      <td style={styles.td} className="table__td">{headTr.cell3}</td>
      <td style={styles.td} className="table__td">{headTr.cell4}</td>
      <td style={styles.td} className="table__td">{headTr.cell5}</td>
      <td style={styles.td} className="table__td">{headTr.cell6}</td>
    </tr>
  );
}

function TodoList(props) {
  return (
    <div style={styles.taskTable} className="task-table">
      <table style={styles.table}>
        {headTr.map(headTr => {
          return <TodoHeadItem headTr={headTr} key={headTr.id} />;
        })}
        {props.todos.map(todo => {
          return <TodoItem todo={todo} key={todo.id} edit={props.onEdit} />;
        })}
      </table>
    </div>
  );
}

TodoList.propTypes = {
  headTr: PropTypes.arrayOf(PropTypes.object).isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default TodoList;
