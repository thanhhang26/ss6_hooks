import React from "react";
import { useState } from "react";
import { deleteStudentByEmail } from "../service/studentService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudent(props) {
	const handleClose = () => {
		props.closeModal();
	};

	const handleDelete = (student) => {
		deleteStudentByEmail(props.student.email);
		handleClose();
	};

	return (
		<>
			<Modal show={props.show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Bạn có muốn xoá sinh viên <strong>{props.student?.email}</strong> không?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleDelete}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteStudent;
