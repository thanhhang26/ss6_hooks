import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function AddComponent(props) {
	const [student, setStudent] = useState({
		name: "",
		phone: "",
		email: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setStudent((prevState) => ({
			...prevState,
			[name]: value, // Cập nhật thuộc tính tương ứng
		}));
	};
	const handleSubmit = (e) => {
		// Ngan chan hanh vi mac dinh cua form
		e.preventDefault();
		props.handleAddStudent(student);
		setStudent({ name: "", phone: "", email: "" });
	};
	return (
		<div>
			<form className="mt-3" onSubmit={handleSubmit}>
				<div className="row  mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Name:</label>
					<div className="col-sm-4">
						<input type="text" name="name" value={student.name} onChange={handleChange} className="form-control" placeholder="Enter your name" />
					</div>
				</div>
				<div className="row mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Phone:</label>
					<div className="col-sm-4">
						<input type="number" name="phone" value={student.phone} onChange={handleChange} className="form-control" placeholder="Enter your phone" />
					</div>
				</div>
				<div className="row mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Email:</label>
					<div className="col-sm-4">
						<input type="email" name="email" value={student.email} onChange={handleChange} className="form-control" placeholder="Enter your email" />
					</div>
				</div>
				<button type="submit" className="btn btn-secondary btn-sm mb-3 ms-2">
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddComponent;
