import React from 'react'

export default function TodoItem({todo}) {
  return (
    <li className="table__tr">
      <span className="table__td">
        {todo.title}
      </span>
      <span className="table__td">
        {todo.status}
      </span>
      <span className="table__td">
        {todo.priority}
      </span>
      <span className="table__td">
        {todo.plannedEndDate}
      </span>
      <span className="table__td">
        {todo.actualEndDate}
      </span>
    </li>
  )
}