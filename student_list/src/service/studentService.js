const studentList = [
	{
		id: 1,
		name: "stu1",
		phone: "0912345678",
		email: "stu1@gmail.com",
	},
	{
		id: 2,
		name: "stu2",
		phone: "0932432333",
		email: "stu2@gmail.com",
	},
	{
		id: 3,
		name: "stu3",
		phone: "0932433212",
		email: "stu3@gmail.com",
	},
];

export function getAllStudent() {
	return studentList;
}
export function addNewStudent(student) {
	// kết nối API để thêm mới
	studentList.push(student);
}
export function deleteStudentById(id) {
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].id === id) {
			studentList.splice(i, 1);
			break;
		}
	}
}
export function searchByName(name) {
	return studentList.filter((student) => student.name.includes(name));
}
