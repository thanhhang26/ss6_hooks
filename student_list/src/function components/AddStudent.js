import React, { useRef } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { searchByName } from "../service/studentService";

function AddComponent(props) {
	const [student, setStudent] = useState({
		name: "",
		phone: "",
		email: "",
	});
	const searchNameRef = useRef();

	const handleSearch = () => {
		let searchName = searchNameRef.current.value;
		const listSearch = searchByName(searchName);
		props.setStudentList(() => [...listSearch]);
	};

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
		setStudent({ id: "", name: "", phone: "", email: "" });
	};
	return (
		<div>
			<form className="mt-3" onSubmit={handleSubmit}>
				<div className="row  mb-3 ms-1 align-items-center">
					<label className="col-sm-1">ID:</label>
					<div className="col-sm-4">
						<input type="text" name="name" value={student.id} onChange={handleChange} className="form-control" placeholder="Enter your id" />
					</div>
				</div>
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
				<div className="ms-2">
					<input ref={searchNameRef} placeholder={"Enter name"} />
					<button onClick={handleSearch} type={"button"}>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddComponent;
