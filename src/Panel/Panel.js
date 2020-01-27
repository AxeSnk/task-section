import React from "react";
import PropTypes from "prop-types";

const styles ={
	div: {
		display: 'flex',
		padding: '1rem 0',
	}
}

function Panel(info) {
	return (
		<div style={styles.div} className="control-panel">
			<button>Добавить задачу</button>
			<form>
				<input></input>
			</form>
			<div className="control-panel__info">
				<div className="info__item"></div>
			</div>
		</div>
	);
}

export default Panel