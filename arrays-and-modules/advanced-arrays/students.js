const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(student => student.marks >= 40);
console.log("Passed Students:", passedStudents);

// 2. map() to add grade field
const studentsWithGrades = students.map(student => {
  let grade;
  
  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return { ...student, grade };
});
console.log("Students with Grades:", studentsWithGrades);

// 3. reduce() to calculate average marks
const averageMarks = students.reduce((total, student) => total + student.marks, 0) / students.length;
console.log("Average Marks:", averageMarks);

// 4. find() the student who scored 92
const student92 = students.find(student => student.marks === 92);
console.log("Student who scored 92:", student92);

// 5. findIndex() of student "Kiran"
const indexKiran = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran:", indexKiran);
