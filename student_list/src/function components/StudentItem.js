import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentItem(props) {
	const { name, phone, email } = props.student;

	const [deleteStudent, setDeleteStudent] = useState([]);
	const [showModal, setShowModal] = useState([]);

	const handleIsShowModal = (student) => {
		props.showModalDelete(student);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>
				<button className="btn btn-secondary me-3">Edit</button>
				<button onClick={() => handleIsShowModal(props.student)} className="btn btn-secondary">
					Delete
				</button>
			</td>
		</tr>
	);
}
export default StudentItem;
