import React from "react";

const SinTareas = (props) => {
    console.log(props.tareasLength === 0)
	if (props.tareasLength === 0) {
		return (
			<div className="sinTareas__div" key={props.id}>
				<h1 className="sinTareas__texto">No hay tareas pendientes</h1>
			</div>
		);
	}
};
export default SinTareas;
