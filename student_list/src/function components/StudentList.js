import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllStudent, addNewStudent } from "../service/studentService";
import StudentItem from "./StudentItem";
import AddComponent from "./AddStudent";

function StudentList() {
	// Khai báo state cho danh sách sinh viên và trạng thái loading
	const [studentList, setStudentList] = useState([]);
	const [isLoading, setIsLoading] = useState(false); //dùng để khai báo một state với giá trị ban đầu là false, và có thể thay đổi trạng thái này sau này để kiểm soát xem ứng dụng có đang trong trạng thái "đang tải" hay không.

	// Hàm xử lý trạng thái loading
	const handleIsLoading = () => {
		setIsLoading((prevState) => !prevState); //Hàm này thay đổi trạng thái của isLoading. Nếu isLoading là true, nó sẽ trở thành false và ngược lại. Điều này sẽ kích hoạt useEffect để tải lại dữ liệu mỗi khi isLoading thay đổi.
	};

	// Hàm thêm sinh viên mới vào danh sách
	const handleAddStudent = (student) => {
		addNewStudent(student); // Gọi API thêm sinh viên
		handleIsLoading(); // Cập nhật trạng thái loading để load lại danh sách
	};

	// Lấy danh sách sinh viên khi có sự thay đổi trạng thái loading
	useEffect(() => {
		setStudentList(getAllStudent());
	}, [isLoading]);

	return (
		<>
			<div className="container">
				<div className="card">
					<div className="card-header">
						<h1>Student List</h1>
					</div>
					<AddComponent handleAddStudent={handleAddStudent} handleIsLoading={handleIsLoading} />
					<div className="card-body">
						<table className="table table-light">
							<thead>
								<tr>
									<th>Name</th>
									<th>Phone</th>
									<th>Email</th>
									<th className="text-center" style={{ width: 200 }}>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{studentList.map((s) => (
									<StudentItem key={s.email} student={s} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default StudentList;