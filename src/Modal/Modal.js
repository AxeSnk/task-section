import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal">
          <div className="modal-body">
            <h1>Создание/редактирование задачи</h1>
            <form>
              <div>
                <p>Описание (*)</p>
                <input />
              </div>
              <div>
                <div>
                  <p>Приоритет</p>
                  <p>
                    <select>
                      <option selected="selected">Низкий</option>
                      <option>Средний</option>
                      <option>Высокий</option>
                    </select>
                  </p>
                </div>
                <div>
                  <p>Статус</p>
                  <p>
                    <select>
                      <option selected="selected">Новый</option>
                      <option>В работе</option>
                      <option>Завершено</option>
                    </select>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
