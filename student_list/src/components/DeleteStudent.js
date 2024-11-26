import React from "react";
import { deleteStudentByEmail } from "../service/studentService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudent(props) {
	const handleClose = () => {
		props.closeModal();
	};
	const handleDelete = () => {
		deleteStudentByEmail(props.student.email);
		props.showModalDelete();
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
				{/*  Thẻ <strong> được dùng để làm nổi bật nội dung văn bản.
				props.student?.email kiểm tra an toàn trước khi truy cập email (đề phòng trường hợp props.student không được truyền vào).
				Dấu ?. là Optional Chaining trong JavaScript/React, đảm bảo rằng:
                Nếu props.student không tồn tại hoặc là undefined, chương trình sẽ không bị lỗi mà chỉ trả về undefined cho toàn bộ biểu thức.
                Nếu props.student tồn tại và có thuộc tính name, giá trị của name sẽ được hiển thị.
				 */}
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
