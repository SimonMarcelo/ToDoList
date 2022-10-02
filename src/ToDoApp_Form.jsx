import React from "react";
import { MdAddTask } from "react-icons/md";

const Formulario = (props) => {

	return(
	<form onSubmit={props.handleSubmit}>
	<input
		placeholder="Titulo de la tarea"
		className="tituloTarea"
		type="text"
		name="titulo"
		required
		onChange={props.handleChange}
		/>
	<input
		placeholder="Descripción de la tarea"
		className="descripcionTarea"
		type="text"
		name="descripcion"
		required
		onChange={props.handleChange}
		/>
	<button className="botonSubmit" type="submit">
		<MdAddTask />
	</button>
	<p>* Es necesario completar ambos campos para añadir</p>
</form>
	);
}

export default Formulario;