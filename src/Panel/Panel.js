import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    padding: "1rem 0"
  }
};

function Panel({ onCreate, info }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <div style={styles.div} className="control-panel">
      <form onSubmit={submitHandler}>
        <button type="submit">Добавить задачу</button>
        <input value={value} onChange={event => setValue(event.target.value)} />
      </form>
      <div className="control-panel__info">
        <div className="info__item"></div>
      </div>
    </div>
  );
}

Panel.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default Panel;
