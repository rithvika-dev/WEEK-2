const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40 (pass marks)
const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);

// 2. map() add 5 grace marks
const graceMarks = marks.map(mark => mark + 5);
console.log("After Grace Marks:", graceMarks);

// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log("Highest Mark:", highestMark);

// 4. find() first mark below 40
const firstBelow40 = marks.find(mark => mark < 40);
console.log("First Below 40:", firstBelow40);

// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", indexOf92);
