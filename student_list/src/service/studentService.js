const studentList = [
	{
		name: "stu1",
		phone: "0912345678",
		email: "stu1@gmail.com",
	},
	{
		name: "stu2",
		phone: "0932432333",
		email: "stu2@gmail.com",
	},
	{
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
