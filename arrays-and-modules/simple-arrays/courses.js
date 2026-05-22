const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Length > 5:", longCourses);

// 2. map() convert course names to uppercase
const upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase:", upperCourses);

// 3. reduce() generate single string
const courseString = upperCourses.reduce((acc, course, index) => {
    return index === 0 ? course : acc + " | " + course;
}, "");
console.log("Combined String:", courseString);

// 4. find() the course "react"
const foundReact = courses.find(course => course === "react");
console.log("Found React:", foundReact);

// 5. findIndex() of "node"
const indexNode = courses.findIndex(course => course === "node");
console.log("Index of Node:", indexNode);
