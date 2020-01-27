import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context'

const styles = {
  td: {
    border: "1px solid grey",
  },
}

function TodoItem({ todo, edit }) {
  const {removeTodo} = useContext(Context)
  return (
    <tr className="table__tr" onDoubleClick={() => edit(todo.id)}>
      <td style={styles.td} className="table__td">{todo.title}</td>
      <td style={styles.td} className="table__td">{todo.status}</td>
      <td style={styles.td} className="table__td">{todo.priority}</td>
      <td style={styles.td} className="table__td">{todo.plannedEndDate}</td>
      <td style={styles.td} className="table__td">{todo.actualEndDate}</td>
      <td style={styles.td} className="table__td button__delete" onClick={removeTodo.bind(null, todo.id)}>Удалить</td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  edit: PropTypes.func.isRequired
};

export default TodoItem;
