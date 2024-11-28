import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentItem(props) {
	const { id, name, phone, email } = props.student;

	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>
				<button className="btn btn-secondary me-3">Edit</button>
				<button onClick={() => props.showModalDelete(props.student)} className="btn btn-secondary">
					Delete
				</button>
			</td>
		</tr>
	);
}
export default StudentItem;
