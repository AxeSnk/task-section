import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

const headTr = [{
  id: 0,
  cell1: 'Описание',
  cell2: 'Статус',
  cell3: 'Приоритет',
  cell4: 'Плановая дата окончания',
  cell5: 'Фактическая дата окончания',
  cell6: 'Действие',
}]

function TodoHeadItem({headTr}) {
  return (
    <li className="table__tr head__tr">
      <span className="table__td">
        {headTr.cell1}
      </span>
      <span className="table__td">
        {headTr.cell2}
      </span>
      <span className="table__td">
        {headTr.cell3}
      </span>
      <span className="table__td">
        {headTr.cell4}
      </span>
      <span className="table__td">
        {headTr.cell5}
      </span>
      <span className="table__td">
        {headTr.cell6}
      </span>
    </li>
  )
}

export default function TodoList(props) {
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
