import React from "react";
import TodoList from "./Todo/TodoList";
import Panel from "./Panel/Panel";
import Context from "./context";

function App() {
  let [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Описание задачи №1",
      status: "Новый",
      priority: "Низкий",
      plannedEndDate: "01.01.2019",
      actualEndDate: "-"
    },
    {
      id: 2,
      title: "Описание задачи №2",
      status: "В работе",
      priority: "Средний",
      plannedEndDate: "23.04.2019",
      actualEndDate: "-"
    },
    {
      id: 3,
      title: "Описание задачи №3",
      status: "Завершено",
      priority: "Высокий",
      plannedEndDate: "16.02.2019",
      actualEndDate: "18.02.2019"
    },
    {
      id: 4,
      title: "Описание задачи №4",
      status: "Завершено",
      priority: "Средний",
      plannedEndDate: "12.05.2019",
      actualEndDate: "20.04.2019"
    }
  ]);

  function openModal(id) {
    setTodos(
      (todos = todos.map(todo => {
        if (todo.id === id) {
          console.log("todo id", id);
        }
        return todo;
      }))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now()
        }
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper__task-section">
        <h1>Прототип - раздел задач</h1>

        <Panel onCreate={addTodo} />

        <TodoList todos={todos} onEdit={openModal} />
      </div>
    </Context.Provider>
  );
}

export default App;
