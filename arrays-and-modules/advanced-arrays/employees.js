const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);

// 2. map() add netSalary = salary + 10% bonus
const employeesWithBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + (emp.salary * 0.10)
}));
console.log("Employees with Net Salary:", employeesWithBonus);

// 3. reduce() calculate total salary payout
const totalPayout = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);
console.log("Total Salary Payout:", totalPayout);

// 4. find() employee with salary 30000
const employee30000 = employees.find(emp => emp.salary === 30000);
console.log("Employee with Salary 30000:", employee30000);

// 5. findIndex() of employee "Neha"
const indexNeha = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", indexNeha);
