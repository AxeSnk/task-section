import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
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
  ];

  return (
    <div className="wrapper__task-section">
      <h1>Прототип - раздел задач</h1>

      <div className="control-panel"></div>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
